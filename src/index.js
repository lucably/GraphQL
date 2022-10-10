import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/Schema';

import fetch from 'node-fetch';

const server = new ApolloServer({
  typeDefs, // typeDefs: typeDefs
  resolvers, // resolvers: resolvers
  context: () => {
    return {
     fetch,
    }
  }
});

server.listen(4003).then(({url} )=> {
  console.log(`Server listening on url ${url}`)
});
