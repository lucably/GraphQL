const post = async (parent, arg, context) => {
  const response = await context.getPost(arg.id);

  return response.json();
}

const posts = async (parent, arg, context) => {
  /*
  apiFiltersInput está na pasta do api-filters é um mecanismo para fazer
  sort, orderBy, limit, start ...
  */

  const apiFiltersInput = new URLSearchParams(arg.input);

  //const response = await context.getPosts(); => Chama o metodo normal (sem o apiFiltersInput)
  const response = await context.getPosts(apiFiltersInput);

  return response.json();

  /*  CONSULTA NO GRAPHQL SERVER

  query Test($userId: ID!, $postId: ID!, $input: ApiFiltersInput) {

    post(id: $postId) {
      title
      watched
    }
    posts(input: { //Lembrando que esses "_" é somente nesse no caso do db.json
      _sort: "indexRef",
      _limit: 3,
      _order: "desc",
      _start: 3,
    }) {
      title
      id
      starRankedPost
      indexRef
    }
  }
  */
};

const hasWatched = (isWatch = false) => {
  return isWatch
}

const getStarRankedPost = (id) => {

  const randomNumber = Math.floor(Math.random() * 10)
  return `Ranque do post ${randomNumber.toString()} do ID: ${id}`;
}

export const postResolvers = {
  Query: {post , posts},
  Post: {
    watched: () =>  hasWatched(),
    starRankedPost: (parent, arg, context) => getStarRankedPost(parent.id),
  },
};
