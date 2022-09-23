const users = () => {
  return [
    {
      id: '1',
      userName: 'Lucas',
    },
    {
      id: '2',
      userName: 'Lucas 2',
    },
    {
      id: '3',
      userName: 'Lucas 3',
    }
  ]
}

const user = () => {
  return {
    id: '1',
    userName: 'Lucas',
  }
}

export const userResolvers = {
  Query: {
    user,
    users
  }
}
