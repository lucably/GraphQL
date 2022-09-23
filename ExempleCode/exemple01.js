import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID!,
      name: String,
      age: Int,
      size: Float,
      married: Boolean!,
      hobby: [String]
      arrayEmptyButOnlyString: [String!]!
    }
  `,
  resolvers:  {
    Query: {
      id: () =>  1,
      name: () => 'Krathos',
      age: () => '26',
      size: () => 1.81,
      married:() => false,
      hobby: () => ['program', 'play guitar'],
      arrayEmptyButOnlyString:() => []
    }
  }
});

server.listen(4003).then(({url} )=> {
  console.log(`Server listening on url ${url}`)
});

/* married: Boolean! => Fala que é obrigatório, caso n seja obrigatorio como
as outras ele retorna null se n tiver nenhum valor
*/
