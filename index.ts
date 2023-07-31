export function cleanObjectByKey(
  data: object,
  keysToDeleteFromTheObject: string[]
) {
  const props = Object.entries(data);
  const toDelete: any[] = [];
  for (const prop of props) {
    if (keysToDeleteFromTheObject.includes(String(prop[0]))) {
      toDelete.push(prop);
    } else if (typeof prop[1] === "object") {
      console.log(prop);
      prop[1] = cleanObjectByKey(prop[1], keysToDeleteFromTheObject);
      if (Object.keys(prop[1]).length === 0) {
        toDelete.push(prop);
      }
    }
  }
  const res = props.filter((item) => !toDelete.includes(item));
  return Object.fromEntries(res);
}
export default cleanObjectByKey;
