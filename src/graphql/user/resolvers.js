const users = async (parent, arg, context, info) => {

  const apiFiltersInput = new URLSearchParams(arg.input);

  const response = await context.getUsers(apiFiltersInput);
  return response.json();
}

const user = async(_, { id }, { getUser }) => {
  const response = await getUser(id);

  const user = await response.json();
  return user;
}

export const userResolvers = {
  Query: {
    user,
    users
  }
}
