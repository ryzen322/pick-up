export const getPost = async () => {
  try {
    const res = await fetch("/api/get-post");

    if (!res.ok) {
      throw Error(`Reqiest failed with status code ${res.status}`);
    }

    return res.json();
  } catch (error) {
    throw Error(`Reqiest failed with status code ${error}`);
  }
};

export const getLikes = async (userId: number) => {
  try {
    const res = await fetch(`/api/likes/${userId}`);

    if (!res.ok) {
      throw Error(`Reqiest failed with status code ${res.status}`);
    }

    return res.json();
  } catch (error) {
    throw Error(`Reqiest failed with status code ${error}`);
  }
};

export const getComments = async (userId: number) => {
  try {
    const res = await fetch(`/api/get-comments/${userId}`);

    if (!res.ok) {
      throw Error(`Reqiest failed with status code ${res.status}`);
    }

    return res.json();
  } catch (error) {
    throw Error(`Reqiest failed with status code ${error}`);
  }
};

export const getPostById = async (postId: number) => {
  try {
    const res = await fetch(`/api/post/${postId}`);

    if (!res.ok) {
      throw Error(`Reqiest failed with status code ${res.status}`);
    }

    return res.json();
  } catch (error) {
    throw Error(`Reqiest failed with status code ${error}`);
  }
};

export const getRetweet = async (userId: number) => {
  try {
    const res = await fetch(`/api/retweet/${userId}`);

    if (!res.ok) {
      throw Error(`Reqiest failed with status code ${res.status}`);
    }

    return res.json();
  } catch (error) {
    throw Error(`Reqiest failed with status code ${error}`);
  }
};
