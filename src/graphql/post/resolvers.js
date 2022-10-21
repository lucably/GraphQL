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
};

const hasWatched = (isWatch = false) => {
  return isWatch
}

const getStarRankedPost = (id) => {

  const randomNumber = Math.floor(Math.random() * 10)
  return `Ranque do post ${randomNumber.toString()} do ID: ${id}`;
}

const getUser = async (id, context) =>  {
  const response = await context(id);

  return response.json();
}

export const postResolvers = {
  Query: {post , posts},
  Post: {
    watched: () =>  hasWatched(),
    starRankedPost: (parent, arg, context) => getStarRankedPost(parent.id),
    user: (parent, arg, context) => getUser(parent.userId, context.getUser)
  },
};
