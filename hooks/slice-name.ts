export const sliceName = (name: string): string => {
  const my_name = name
    .split(" ")
    .map((n) => (n === "string" ? n[0].toLowerCase() : ""))
    .join()
    .replaceAll(",", " ");

  return my_name;
};
