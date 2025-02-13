import { ConnectorConfig, DataConnect } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;


export interface Newsletter_Key {
  id: UUIDString;
  __typename?: 'Newsletter_Key';
}

export interface ProjectMembership_Key {
  id: UUIDString;
  __typename?: 'ProjectMembership_Key';
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface User_Key {
  id: string;
  __typename?: 'User_Key';
}

