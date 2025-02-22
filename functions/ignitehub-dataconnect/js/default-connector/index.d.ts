import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface AddNewsletterSignUpData {
  newsletter_insert: Newsletter_Key;
}

export interface AddNewsletterSignUpVariables {
  email: string;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ListNewsletterSignIpsData {
  newsletters: ({
    id: UUIDString;
    email: string;
  } & Newsletter_Key)[];
}

export interface ListUsersData {
  users: ({
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    projectId?: UUIDString | null;
    roles?: string[] | null;
  } & User_Key)[];
}

export interface Newsletter_Key {
  id: UUIDString;
  __typename?: 'Newsletter_Key';
}

export interface Orginization_Key {
  id: UUIDString;
  __typename?: 'Orginization_Key';
}

export interface ProjectMembership_Key {
  id: UUIDString;
  __typename?: 'ProjectMembership_Key';
}

export interface User_Key {
  id: string;
  __typename?: 'User_Key';
}


/* Allow users to create refs without passing in DataConnect */
export function createUserRef(vars: CreateUserVariables): (MutationRef<CreateUserData, CreateUserVariables> & { __angular?: false });
/* Allow users to pass in custom DataConnect instances */
export function createUserRef(dc: DataConnect, vars: CreateUserVariables): (MutationRef<CreateUserData, CreateUserVariables> & { __angular?: false });

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;


/* Allow users to create refs without passing in DataConnect */
export function addNewsletterSignUpRef(vars: AddNewsletterSignUpVariables): (MutationRef<AddNewsletterSignUpData, AddNewsletterSignUpVariables> & { __angular?: false });
/* Allow users to pass in custom DataConnect instances */
export function addNewsletterSignUpRef(dc: DataConnect, vars: AddNewsletterSignUpVariables): (MutationRef<AddNewsletterSignUpData, AddNewsletterSignUpVariables> & { __angular?: false });

export function addNewsletterSignUp(vars: AddNewsletterSignUpVariables): MutationPromise<AddNewsletterSignUpData, AddNewsletterSignUpVariables>;
export function addNewsletterSignUp(dc: DataConnect, vars: AddNewsletterSignUpVariables): MutationPromise<AddNewsletterSignUpData, AddNewsletterSignUpVariables>;


/* Allow users to create refs without passing in DataConnect */
export function listNewsletterSignIpsRef(): (QueryRef<ListNewsletterSignIpsData, undefined> & { __angular?: false });
/* Allow users to pass in custom DataConnect instances */
export function listNewsletterSignIpsRef(dc: DataConnect): (QueryRef<ListNewsletterSignIpsData, undefined> & { __angular?: false });

export function listNewsletterSignIps(): QueryPromise<ListNewsletterSignIpsData, undefined>;
export function listNewsletterSignIps(dc: DataConnect): QueryPromise<ListNewsletterSignIpsData, undefined>;


/* Allow users to create refs without passing in DataConnect */
export function listUsersRef(): (QueryRef<ListUsersData, undefined> & { __angular?: false });
/* Allow users to pass in custom DataConnect instances */
export function listUsersRef(dc: DataConnect): (QueryRef<ListUsersData, undefined> & { __angular?: false });

export function listUsers(): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect): QueryPromise<ListUsersData, undefined>;

