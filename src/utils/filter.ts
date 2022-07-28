export const getDeepValue = (obj: Record<string, any> = {}, path: string) => {
  const splittedPath = path.split(".");

  for (let i = 0; i < splittedPath.length; i++) {
    obj = obj?.[splittedPath?.[i]];
  }

  return obj;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFilteredArrayOfOjects = (
  arr: Record<string, any>[] = [],
  keys: string[] = [],
  query: string
): object[] => {
  if (!query) {
    return arr;
  }

  const filtered = arr.filter((item) => {
    return keys.some((key) => {
      const value = getDeepValue(item, key);

      if (typeof value !== "string") {
        return false;
      }

      return (
        (value as string)
          ?.toLocaleLowerCase()
          ?.indexOf(query.toLocaleLowerCase()) > -1
      );
    });
  });

  return filtered;
};
