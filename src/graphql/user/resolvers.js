const users = async (parent, arg, context, info) => {
  const users = await context.getUsers();
  return users.json();
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
