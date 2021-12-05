import React from "react";
import CreatorContainer from "../components/Home/ListContainer/CreatorContainer";
import { Navbar } from "../components/Layout/Navbar/Navbar";
import { Session } from "../hooks/session";
import { useAllListCreatorsQueryQuery } from "../graphql/generated/apolloComponents";

export { getServerSideProps } from "../hooks/session";

export default function Creators({ session }: { session: Session }) {
  const { data, loading, error } = useAllListCreatorsQueryQuery({
    variables: {},
  });
  if (!data || !data.listCreators || !data.listCreators.Users) {
    return <></>;
  }

  return (
    <div>
      <Navbar session={session} />
      <CreatorContainer creators={data.listCreators.Users} />
    </div>
  );
}
