"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
	User,
	onAuthStateChanged,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	updateProfile
} from "firebase/auth";
import { getUserById, createUser } from "@IgniteHub/dataconnect";
import { auth, dataConnect } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { Modal } from "@mui/material";
import SignIn from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";

export interface UserProfile {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	profilePictureUrl: string;
	project_id: string;
	roles: Array<string>;
	lastLoggedIn: Date;
	createdAt: Date;
	updatedAt: Date;
}

interface AuthContextProps {
	user: User | null;
	loading: boolean;
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setModalView: React.Dispatch<React.SetStateAction<"login" | "signup">>;
	handleGoogleSignIn: () => Promise<void>;
	handleEmailSignIn: (email: string, password: string) => Promise<void>;
	handleEmailSignUp: (
		firstName: string,
		lastName: string,
		email: string,
		password: string
	) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
	user: null,
	loading: true,
	isModalOpen: false,
	setIsModalOpen: () => {},
	setModalView: () => {},
	handleGoogleSignIn: async () => {},
	handleEmailSignIn: async () => {},
	handleEmailSignUp: async () => {}
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalView, setModalView] = useState<"login" | "signup">("login");
	const router = useRouter();

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
			setUser(firebaseUser);
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	async function handleGoogleSignIn() {
		try {
			setLoading(true);
			const provider = new GoogleAuthProvider();
			const userCredential = await signInWithPopup(auth, provider);
			const userProfile = await getUserById(dataConnect, {
				id: userCredential.user.uid
			});
			handleCloseModal();
			if (!userProfile.data.user) {
				const displayName = userCredential.user.displayName || "";
				const [firstName, lastName = ""] = displayName.split(" ");
				await createUser({
					id: userCredential.user.uid,
					firstName: firstName,
					lastName: lastName,
					email: userCredential.user.email as string
				});
				router.push("/dashboard/new_org");
				return;
			} else {
				router.push("/dashboard");
			}
		} catch (error) {
			console.error("Google sign-in error:", error);
		} finally {
			setLoading(false);
		}
	}

	async function handleEmailSignIn(email: string, password: string) {
		try {
			setLoading(true);
			await signInWithEmailAndPassword(auth, email, password);
			handleCloseModal();
			router.push("/dashboard");
		} catch (error) {
			console.error("Email sign-in error:", error);
		} finally {
			setLoading(false);
		}
	}

	// Email/Password sign-up function
	async function handleEmailSignUp(
		firstName: string,
		lastName: string,
		email: string,
		password: string
	) {
		try {
			setLoading(true);
			const displayName = firstName + " " + lastName;
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			await updateProfile(userCredential.user, { displayName });
			await createUser({
				id: userCredential.user.uid,
				firstName: firstName,
				lastName: lastName,
				email: email
			});
			handleCloseModal();
			router.push("/dashboard/new_org");
		} catch (error) {
			console.error("Email sign-up error:", error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				isModalOpen,
				setIsModalOpen,
				setModalView,
				handleGoogleSignIn,
				handleEmailSignIn,
				handleEmailSignUp
			}}>
			{children}
			<Modal open={isModalOpen} onClose={handleCloseModal}>
				{modalView === "login" ? <SignIn /> : <SignUp />}
			</Modal>
		</AuthContext.Provider>
	);
};

export function useAuth() {
	return useContext(AuthContext);
}
