export interface CreatorFields {
  [key: string]: any;
}
export interface CreatorFieldsProp {
  creator: CreatorFields;
}
export interface ListCreatorFields {
  // fullName: string;
  // id: string;
  // image: string;
  // handle: string;
  [key: string]: any;
}

export interface ListCreatorFieldsProp {
  creators: ListCreatorFields[];
}
