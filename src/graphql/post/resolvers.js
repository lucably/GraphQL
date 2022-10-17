const post = async (parent, arg, context) => {
  const response = await context.getPost(arg.id);

  return response.json();
}

const posts = async (parent, arg, context) => {
  const response = await context.getPosts();
  return response.json();
};

export const postResolvers = {
  Query: {
    post,
    posts
  }
};
