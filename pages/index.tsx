import { sortTourneysByDate, serializer } from "../lib/utils";
import { Fragment } from "react";
import { Grid } from "@mantine/core";
import TournamentsOverview from "../components/TournamentsOverview";
import TotalScoreCard from "../components/TotalScoreCard";
import Header from "../components/Header";
import { getAllTournaments } from "../lib/db-utils";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  const tournaments = await getAllTournaments();
  const serialized = serializer(tournaments);
  const sortedByDate = sortTourneysByDate(serialized);

  return {
    props: { tournaments: sortedByDate },
  };
}

export default function Home({
  tournaments,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Fragment>
      <Header />
      <Grid>
        <Grid.Col md={6} sm={12}>
          <TournamentsOverview tournaments={tournaments} />
        </Grid.Col>
        <Grid.Col md={6} sm={12}>
          <TotalScoreCard tournaments={tournaments} />
        </Grid.Col>
      </Grid>
    </Fragment>
  );
}
