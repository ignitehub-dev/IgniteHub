import { CreateUserData, CreateUserVariables, AddNewsletterSignUpData, AddNewsletterSignUpVariables, CreateOrgData, CreateOrgVariables, AddUserToOrgData, AddUserToOrgVariables, ListNewsletterSignIpsData, GetNewsletterByEmailData, GetNewsletterByEmailVariables, ListUsersData, GetUserByIdData, GetUserByIdVariables} from '../';
import { useDataConnectQueryOptions, FlattenedQueryResult, useDataConnectMutationOptions, FlattenedMutationResult} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, CreateUserVariables>): UseMutationResult<FlattenedMutationResult<CreateUserData, CreateUserVariables>, FirebaseError, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, CreateUserVariables>): UseMutationResult<FlattenedMutationResult<CreateUserData, CreateUserVariables>, FirebaseError, CreateUserVariables>;

export function useAddNewsletterSignUp(options?: useDataConnectMutationOptions<AddNewsletterSignUpData, AddNewsletterSignUpVariables>): UseMutationResult<FlattenedMutationResult<AddNewsletterSignUpData, AddNewsletterSignUpVariables>, FirebaseError, AddNewsletterSignUpVariables>;
export function useAddNewsletterSignUp(dc: DataConnect, options?: useDataConnectMutationOptions<AddNewsletterSignUpData, AddNewsletterSignUpVariables>): UseMutationResult<FlattenedMutationResult<AddNewsletterSignUpData, AddNewsletterSignUpVariables>, FirebaseError, AddNewsletterSignUpVariables>;

export function useCreateOrg(options?: useDataConnectMutationOptions<CreateOrgData, CreateOrgVariables>): UseMutationResult<FlattenedMutationResult<CreateOrgData, CreateOrgVariables>, FirebaseError, CreateOrgVariables>;
export function useCreateOrg(dc: DataConnect, options?: useDataConnectMutationOptions<CreateOrgData, CreateOrgVariables>): UseMutationResult<FlattenedMutationResult<CreateOrgData, CreateOrgVariables>, FirebaseError, CreateOrgVariables>;

export function useAddUserToOrg(options?: useDataConnectMutationOptions<AddUserToOrgData, AddUserToOrgVariables>): UseMutationResult<FlattenedMutationResult<AddUserToOrgData, AddUserToOrgVariables>, FirebaseError, AddUserToOrgVariables>;
export function useAddUserToOrg(dc: DataConnect, options?: useDataConnectMutationOptions<AddUserToOrgData, AddUserToOrgVariables>): UseMutationResult<FlattenedMutationResult<AddUserToOrgData, AddUserToOrgVariables>, FirebaseError, AddUserToOrgVariables>;

export function useListNewsletterSignIps(options?: useDataConnectQueryOptions<ListNewsletterSignIpsData>): UseQueryResult<FlattenedQueryResult<ListNewsletterSignIpsData, undefined>, FirebaseError>;
export function useListNewsletterSignIps(dc: DataConnect, options?: useDataConnectQueryOptions<ListNewsletterSignIpsData>): UseQueryResult<FlattenedQueryResult<ListNewsletterSignIpsData, undefined>, FirebaseError>;

export function useGetNewsletterByEmail(vars: GetNewsletterByEmailVariables, options?: useDataConnectQueryOptions<GetNewsletterByEmailData>): UseQueryResult<FlattenedQueryResult<GetNewsletterByEmailData, GetNewsletterByEmailVariables>, FirebaseError>;
export function useGetNewsletterByEmail(dc: DataConnect, vars: GetNewsletterByEmailVariables, options?: useDataConnectQueryOptions<GetNewsletterByEmailData>): UseQueryResult<FlattenedQueryResult<GetNewsletterByEmailData, GetNewsletterByEmailVariables>, FirebaseError>;

export function useListUsers(options?: useDataConnectQueryOptions<ListUsersData>): UseQueryResult<FlattenedQueryResult<ListUsersData, undefined>, FirebaseError>;
export function useListUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListUsersData>): UseQueryResult<FlattenedQueryResult<ListUsersData, undefined>, FirebaseError>;

export function useGetUserById(vars: GetUserByIdVariables, options?: useDataConnectQueryOptions<GetUserByIdData>): UseQueryResult<FlattenedQueryResult<GetUserByIdData, GetUserByIdVariables>, FirebaseError>;
export function useGetUserById(dc: DataConnect, vars: GetUserByIdVariables, options?: useDataConnectQueryOptions<GetUserByIdData>): UseQueryResult<FlattenedQueryResult<GetUserByIdData, GetUserByIdVariables>, FirebaseError>;
