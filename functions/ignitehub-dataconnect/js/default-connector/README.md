#  Generated TypeScript README
This README will guide you through the process of using the generated TypeScript SDK package for the connector `default`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@IgniteHub/dataconnect` as shown below. Both CommonJS and ESM imports are supported.
You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

# Accessing the connector
A connector is a collection of queries and mutations. One SDK is generated for each connector - this SDK is generated for the connector `default`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

In order to call Data Connect queries and mutations, you need to create an instance of the connector in your application code.

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@IgniteHub/dataconnect';

const connector: DataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```javascript
// add connectDataConnectEmulator to your imports 
import { connectDataConnectEmulator, getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@IgniteHub/dataconnect';

const connector: DataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(connector, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK. 

# Queries
There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument

Below are examples of how to use the `default` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListNewsletterSignIps
You can execute the `ListNewsletterSignIps` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
listNewsletterSignIps(): QueryPromise<ListNewsletterSignIpsData, undefined>;

listNewsletterSignIpsRef(): (QueryRef<ListNewsletterSignIpsData, undefined> & { __angular?: false });
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
listNewsletterSignIps(dc: DataConnect): QueryPromise<ListNewsletterSignIpsData, undefined>;

listNewsletterSignIpsRef(dc: DataConnect): (QueryRef<ListNewsletterSignIpsData, undefined> & { __angular?: false });
```

### Variables
The `ListNewsletterSignIps` query has no variables.
### Return Type
Recall that executing the `ListNewsletterSignIps` query returns a `QueryPromise` that resolves to an object with a `data` property. 

The `data` property is an object of type `ListNewsletterSignIpsData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface ListNewsletterSignIpsData {
  newsletters: ({
    id: UUIDString;
    email: string;
  } & Newsletter_Key)[];
}
```
### Using `ListNewsletterSignIps`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, listNewsletterSignIps } from '@IgniteHub/dataconnect';

// Call the `listNewsletterSignIps()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listNewsletterSignIps();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const connector: DataConnect = getDataConnect(connectorConfig);
const { data } = await listNewsletterSignIps(connector);

console.log(data.newsletters);

// Or, you can use the `Promise` API.
listNewsletterSignIps().then((response) => {
  const data = response.data;
  console.log(data.newsletters);
});
```

### Using `ListNewsletterSignIps`'s `QueryRef` function

```javascript
import { getDataConnect, DataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listNewsletterSignIpsRef } from '@IgniteHub/dataconnect';

// Call the `listNewsletterSignIpsRef()` function to get a reference to the query.
const ref = listNewsletterSignIpsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const connector: DataConnect = getDataConnect(connectorConfig);
const ref = listNewsletterSignIpsRef(connector);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.newsletters);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.newsletters);
});
```

## ListUsers
You can execute the `ListUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
listUsers(): QueryPromise<ListUsersData, undefined>;

listUsersRef(): (QueryRef<ListUsersData, undefined> & { __angular?: false });
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
listUsers(dc: DataConnect): QueryPromise<ListUsersData, undefined>;

listUsersRef(dc: DataConnect): (QueryRef<ListUsersData, undefined> & { __angular?: false });
```

### Variables
The `ListUsers` query has no variables.
### Return Type
Recall that executing the `ListUsers` query returns a `QueryPromise` that resolves to an object with a `data` property. 

The `data` property is an object of type `ListUsersData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
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
```
### Using `ListUsers`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, listUsers } from '@IgniteHub/dataconnect';

// Call the `listUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const connector: DataConnect = getDataConnect(connectorConfig);
const { data } = await listUsers(connector);

console.log(data.users);

// Or, you can use the `Promise` API.
listUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `ListUsers`'s `QueryRef` function

```javascript
import { getDataConnect, DataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUsersRef } from '@IgniteHub/dataconnect';

// Call the `listUsersRef()` function to get a reference to the query.
const ref = listUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const connector: DataConnect = getDataConnect(connectorConfig);
const ref = listUsersRef(connector);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

# Mutations
There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument

Below are examples of how to use the `default` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

createUserRef(vars: CreateUserVariables): (MutationRef<CreateUserData, CreateUserVariables> & { __angular?: false });
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```javascript
createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

createUserRef(dc: DataConnect, vars: CreateUserVariables): (MutationRef<CreateUserData, CreateUserVariables> & { __angular?: false });
```

### Variables
The `CreateUser` mutation requires an argument of type `CreateUserVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface CreateUserVariables {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property. 

The `data` property is an object of type `CreateUserData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@IgniteHub/dataconnect';
// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  id: ..., 
  firstName: ..., 
  lastName: ..., 
  email: ..., 
}

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ id: ..., firstName: ..., lastName: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const connector: DataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(connector, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```javascript
import { getDataConnect, DataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@IgniteHub/dataconnect';
// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  id: ..., 
  firstName: ..., 
  lastName: ..., 
  email: ..., 
}

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ id: ..., firstName: ..., lastName: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const connector: DataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(connector, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## AddNewsletterSignUp
You can execute the `AddNewsletterSignUp` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
addNewsletterSignUp(vars: AddNewsletterSignUpVariables): MutationPromise<AddNewsletterSignUpData, AddNewsletterSignUpVariables>;

addNewsletterSignUpRef(vars: AddNewsletterSignUpVariables): (MutationRef<AddNewsletterSignUpData, AddNewsletterSignUpVariables> & { __angular?: false });
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```javascript
addNewsletterSignUp(dc: DataConnect, vars: AddNewsletterSignUpVariables): MutationPromise<AddNewsletterSignUpData, AddNewsletterSignUpVariables>;

addNewsletterSignUpRef(dc: DataConnect, vars: AddNewsletterSignUpVariables): (MutationRef<AddNewsletterSignUpData, AddNewsletterSignUpVariables> & { __angular?: false });
```

### Variables
The `AddNewsletterSignUp` mutation requires an argument of type `AddNewsletterSignUpVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface AddNewsletterSignUpVariables {
  email: string;
}
```
### Return Type
Recall that executing the `AddNewsletterSignUp` mutation returns a `MutationPromise` that resolves to an object with a `data` property. 

The `data` property is an object of type `AddNewsletterSignUpData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface AddNewsletterSignUpData {
  newsletter_insert: Newsletter_Key;
}
```
### Using `AddNewsletterSignUp`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, addNewsletterSignUp, AddNewsletterSignUpVariables } from '@IgniteHub/dataconnect';
// The `AddNewsletterSignUp` mutation requires an argument of type `AddNewsletterSignUpVariables`:
const addNewsletterSignUpVars: AddNewsletterSignUpVariables = {
  email: ..., 
}

// Call the `addNewsletterSignUp()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addNewsletterSignUp(addNewsletterSignUpVars);
// Variables can be defined inline as well.
const { data } = await addNewsletterSignUp({ email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const connector: DataConnect = getDataConnect(connectorConfig);
const { data } = await addNewsletterSignUp(connector, addNewsletterSignUpVars);

console.log(data.newsletter_insert);

// Or, you can use the `Promise` API.
addNewsletterSignUp(addNewsletterSignUpVars).then((response) => {
  const data = response.data;
  console.log(data.newsletter_insert);
});
```

### Using `AddNewsletterSignUp`'s `MutationRef` function

```javascript
import { getDataConnect, DataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addNewsletterSignUpRef, AddNewsletterSignUpVariables } from '@IgniteHub/dataconnect';
// The `AddNewsletterSignUp` mutation requires an argument of type `AddNewsletterSignUpVariables`:
const addNewsletterSignUpVars: AddNewsletterSignUpVariables = {
  email: ..., 
}

// Call the `addNewsletterSignUpRef()` function to get a reference to the mutation.
const ref = addNewsletterSignUpRef(addNewsletterSignUpVars);
// Variables can be defined inline as well.
const ref = addNewsletterSignUpRef({ email: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const connector: DataConnect = getDataConnect(connectorConfig);
const ref = addNewsletterSignUpRef(connector, addNewsletterSignUpVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.newsletter_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.newsletter_insert);
});
```

