
export interface CreatorFields {
  fullName: string,
  id: string,
  handle: string
  image: string,
  bio: string,
}
export interface CreatorFieldsProp {
    creator: CreatorFields,
}
export interface ListCreatorFields {
  fullName: string,
  id:string,
  image: string,
}

export interface ListCreatorFieldsProp {
    creators: ListCreatorFields[],
}
