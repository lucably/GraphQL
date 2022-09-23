const post = () => {
  return {
    id:'65765765',
    title: 'Post title one'
  }
}

const posts = () => {
  return [
    {
      id:'65765765',
      title: 'Post title one'
    },
    {
      id:'5675675665756',
      title: 'Post title two'
    },
    {
      id:'980980980',
      title: 'Post title three'
    },
  ]
};

export const postResolvers = {
  Query: {
    post,
    posts
  }
};
