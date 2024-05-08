import { Title, Text } from "@mantine/core";
import TournamentDetailCard from "../components/TournamentDetailCard";
import ParTournamentDetailCard from "../components/ParTournamentDetailCard";
import { getAllTournaments, getTournamentBySlug } from "../lib/db-utils";
import { serializer } from "../lib/utils";
import { Fragment } from "react";

const TournamentDetailPage = ({ tournament }) => {
  if (tournament.par) {
    return (
      <Fragment>
        <Title>{tournament.name}</Title>
        <Text component="p">{tournament.date}</Text>
        <ParTournamentDetailCard players={tournament.players} par={tournament.par}/>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Title>{tournament.name}</Title>
      <Text component="p">{tournament.date}</Text>
      <TournamentDetailCard players={tournament.players} />
    </Fragment>
  );
};

export default TournamentDetailPage;

export const getStaticPaths = async () => {
  const data = await getAllTournaments();
  const serialized = serializer(data);
  const paths = serialized.map((tournament) => ({
    params: { slug: tournament.slug },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const data = await getTournamentBySlug(slug);
  const serialized = serializer(data);
  return { props: { tournament: serialized[0] } };
};
