import { getAllTournaments } from "../../lib/db-utils";
import { serializer, filterTourneysByYear } from "../../lib/utils";
import { Grid, Space } from "@mantine/core";
import TournamentsOverview from "../../components/TournamentsOverview";
import Header from "../../components/Header";
import TotalScoreCard from "../../components/TotalScoreCard";
import { Fragment } from "react";

const TournamentsYearPage = ({ tournaments }) => {
  return (
    <Fragment>
      <Header />
      <Space h="lg" />
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
};

export default TournamentsYearPage;

export const getStaticPaths = async () => {
  const years = ["2022", "2023", "2024"];
  const paths = years.map((year) => ({
    params: { year },
  }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context) => {
  const year = context.params.year;
  const tournaments = await getAllTournaments();
  const filtered = filterTourneysByYear(tournaments, year)
  const serialized = serializer(filtered);
  return { props: { tournaments: serialized } };
};
