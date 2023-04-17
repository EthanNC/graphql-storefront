/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['ID'];
  items: Array<CartItem>;
  subtotal: Money;
  totalItems: Scalars['Int'];
};

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Money = {
  __typename?: 'Money';
  amount: Scalars['Float'];
  formatted: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Get a cart by id */
  cart: Cart;
};


export type QueryCartArgs = {
  id: Scalars['ID'];
};

export type CartQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CartQueryQuery = { __typename?: 'Query', cart: { __typename?: 'Cart', id: string, totalItems: number, items: Array<{ __typename?: 'CartItem', id: string, name: string }>, subtotal: { __typename?: 'Money', amount: number, formatted: string } } };


export const CartQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CartQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"2","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"subtotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"formatted"}}]}}]}}]}}]} as unknown as DocumentNode<CartQueryQuery, CartQueryQueryVariables>;