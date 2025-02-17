const { createUserRef, addNewsletterSignUpRef, createOrgRef, addUserToOrgRef, listNewsletterSignIpsRef, getNewsletterByEmailRef, listUsersRef, getUserByIdRef, connectorConfig } = require('../');
const { CallerSdkTypeEnum, validateArgs } = require('@firebase/data-connect');
const { useDataConnectQuery, useDataConnectMutation } = require('@tanstack-query-firebase/react/data-connect');


exports.useCreateUser = function useCreateUser(dcOrOptions, options) {
  const { dc: dcInstance, vars: inputOpts } = validateArgs(connectorConfig, dcOrOptions, options, false);
  function refFactory(vars) {
    return createUserRef(dcInstance, vars);
  }
  return useDataConnectMutation(refFactory, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}

exports.useAddNewsletterSignUp = function useAddNewsletterSignUp(dcOrOptions, options) {
  const { dc: dcInstance, vars: inputOpts } = validateArgs(connectorConfig, dcOrOptions, options, false);
  function refFactory(vars) {
    return addNewsletterSignUpRef(dcInstance, vars);
  }
  return useDataConnectMutation(refFactory, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}

exports.useCreateOrg = function useCreateOrg(dcOrOptions, options) {
  const { dc: dcInstance, vars: inputOpts } = validateArgs(connectorConfig, dcOrOptions, options, false);
  function refFactory(vars) {
    return createOrgRef(dcInstance, vars);
  }
  return useDataConnectMutation(refFactory, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}

exports.useAddUserToOrg = function useAddUserToOrg(dcOrOptions, options) {
  const { dc: dcInstance, vars: inputOpts } = validateArgs(connectorConfig, dcOrOptions, options, false);
  function refFactory(vars) {
    return addUserToOrgRef(dcInstance, vars);
  }
  return useDataConnectMutation(refFactory, inputOpts, CallerSdkTypeEnum.GeneratedReact);
}


exports.useListNewsletterSignIps = function useListNewsletterSignIps(dc, options) {
  const { dc: dcInstance } = validateArgs(connectorConfig, dc, undefined, false);
  const ref = listNewsletterSignIpsRef(dcInstance);
  return useDataConnectQuery(ref, options, CallerSdkTypeEnum.GeneratedReact);
}

exports.useGetNewsletterByEmail = function useGetNewsletterByEmail(dcOrVars, vars, options) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, false);
  const ref = getNewsletterByEmailRef(dcInstance, inputVars);
  return useDataConnectQuery(ref, options, CallerSdkTypeEnum.GeneratedReact);
}

exports.useListUsers = function useListUsers(dc, options) {
  const { dc: dcInstance } = validateArgs(connectorConfig, dc, undefined, false);
  const ref = listUsersRef(dcInstance);
  return useDataConnectQuery(ref, options, CallerSdkTypeEnum.GeneratedReact);
}

exports.useGetUserById = function useGetUserById(dcOrVars, vars, options) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, false);
  const ref = getUserByIdRef(dcInstance, inputVars);
  return useDataConnectQuery(ref, options, CallerSdkTypeEnum.GeneratedReact);
}