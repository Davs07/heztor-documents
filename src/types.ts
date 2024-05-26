import { PartialBlock } from "@blocknote/core";

export type Id = string | number;
export type isFavourite = boolean | null;

export type Foulder = {
  id: Id;
  name: string;
  isFavourite: isFavourite;
};

export type contentType = [] | undefined | PartialBlock[];

export type Document = {
  id: Id;
  name: string;
  content: contentType;
  image?: string;
  foulderId: Id;
  isFavourite: isFavourite;
};
