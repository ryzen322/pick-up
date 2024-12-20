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
