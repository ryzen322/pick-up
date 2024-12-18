export const sliceName = (name: string): string => {
  const my_name = name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .join()
    .replaceAll(",", " ");

  return my_name;
};
