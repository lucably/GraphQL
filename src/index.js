import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/Schema';

const server = new ApolloServer({
  typeDefs, // typeDefs: typeDefs
  resolvers, // resolvers: resolvers
});

server.listen(4003).then(({url} )=> {
  console.log(`Server listening on url ${url}`)
});
