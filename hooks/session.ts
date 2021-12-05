import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import jwt from 'jsonwebtoken';
import client from "../lib/apollo-client";
import { listArtworkQuery } from "../graphql/artwork/queries/listArtworks";

export type Session = {
    user: {
        id: string
        handle: string
        image?: string
        email: string
        isApprovedCreator: boolean
        publicKey: string
    }
   
}
export async function getServerSideProps({req}: GetServerSidePropsContext) {
  const { data } = await client.query({
    query: listArtworkQuery,
  }); 
  
  const cookie = req?.cookies.jwt
    if (!cookie) return {
        props: {
          allArtworks: data.listArtworks.Artworks.slice(0, 10),
          fallback: true,
        }
    };
    let token: any = jwt.verify(
      cookie,
      process.env.SERVER_SECRET ?? '',
      (err: any, data: any) => {
        if (!err && data.user.id) {
          return data.user;
        } else {
          return null;
        }
      }
    );
    if (!token) {
      return {
          props: {
            allArtworks: data.listArtworks.Artworks.slice(0, 10),
            fallback: true,
          }
      }
    }
    const session: Session = {
        user: {
            id: token.id,
            handle: token.handle,
            email: token.email,
            image: token.image,
            isApprovedCreator: token.isApprovedCreator,
            publicKey: token.publicKey
        }
      }
      return {
          props: {
            allArtworks: data.listArtworks.Artworks.slice(0, 10),
            fallback: true,
            session
          }
      }
}