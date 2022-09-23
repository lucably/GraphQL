import { gql } from 'apollo-server';
import { userTypeDefs } from  './user/typedefs';
import { userResolvers } from './user/resolvers';
import { postTypeDefs } from './post/typedefs';
import { postResolvers } from './post/resolvers';

const rootTypeDefs = gql`
  type Query {
    root: Boolean
  }
`;

const rootResolvers = {
  Query:  {
    root: () => true
  }
};

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];


export const resolvers = [rootResolvers, userResolvers, postResolvers];

