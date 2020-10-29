enum ResourceType {
  BOOK,
  AUTHOR,
  BOOKMARK,
  FILM,
  PHOTO
}
//with interfaces
interface Resources<T> {
  uid: number;
  type: ResourceType;
  data: T;
}

const docEnum1: Resources<string> = {
  uid: 1,
  type: ResourceType.BOOK,
  data: 'hello'
};

console.log(docEnum1);
