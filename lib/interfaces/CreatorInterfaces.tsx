export interface CreatorFields {
  fullName: string;
  id: string;
  handle: string;
  image: string;
  bio: string;
  created: {
    handle: string;
    title: string;
    saleType: string;
    image?: string;
    description: string;
  };
}
export interface CreatorFieldsProp {
  creator: CreatorFields;
}
export interface ListCreatorFields {
  fullName: string;
  id: string;
  image: string;
  handle: string;
}

export interface ListCreatorFieldsProp {
  creators: ListCreatorFields[];
}
