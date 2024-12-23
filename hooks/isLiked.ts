export const isLiked = (
  data: string[] | undefined,
  email: string | undefined
): boolean => {
  if (data === undefined || email === undefined) return false;

  return data.includes(email);
};