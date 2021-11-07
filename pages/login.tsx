import { useLoginQuery } from "../graphql/generated/apolloComponents";

export default function Login() {
  const { data, loading, error: registerError } = useLoginQuery();
  return <div>{data?.cookie}</div>;
}
