export type Id = string | number;
export type isFavourite = boolean | null;

export type Foulder = {
  id: Id;
  name: string;
  isFavourite: isFavourite;
};

export type Document = {
  id: Id;
  name: string;
  content: string;
  image?: string;
  foulderId: Id;
  isFavourite: isFavourite;
};
