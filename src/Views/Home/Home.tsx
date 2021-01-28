import { FunctionComponent } from "react";
import { GetPersonData } from "Models";
import { useQuery } from "react-query";
import { RouteComponentProps } from "react-router-dom";
import { getPersonQuery } from "Services/Queries";
import "./Home.scss";

type HomeParams = {};
type HomeProps = RouteComponentProps<HomeParams>;

const Home: FunctionComponent<HomeProps> = () => {
  const { isLoading, error, data } = useQuery<GetPersonData>(
    "getPerson",
    getPersonQuery
  );

  return <div id="home">Home</div>;
};

export default Home;
