import {
  sortTourneysByDate,
  serializer,
  filterTourneysByYear,
} from "../lib/utils";
import { Fragment, useState, useCallback } from "react";
import { Grid, Text, Select, Space } from "@mantine/core";
import TournamentsOverview from "../components/TournamentsOverview";
import TotalScoreCard from "../components/TotalScoreCard";
import Header from "../components/Header";
import { getAllTournaments } from "../lib/db-utils";
import { InferGetStaticPropsType } from "next";
import { TourneyData } from "../types/types";

const years = ["2022", "2023"];

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
  const [filteredTournaments, setFilteredTournaments] =
    useState<TourneyData[]>();
  const [value, setValue] = useState("");

  const setYear = useCallback((year) => {
    setValue(year);
    setFilteredTournaments([]);
    const filtered = filterTourneysByYear(tournaments, year);
    setFilteredTournaments(filtered);
  }, []);

  return (
    <Fragment>
      <Header />
      <Select
        placeholder="Välj ett år"
        data={years}
        value={value}
        onChange={setYear}
      />
      <Space h="md" />
      {filteredTournaments && (
        <Grid>
          <Grid.Col md={6} sm={12}>
            <TournamentsOverview tournaments={filteredTournaments} />
          </Grid.Col>
          <Grid.Col md={6} sm={12}>
            <TotalScoreCard tournaments={filteredTournaments} />
          </Grid.Col>
        </Grid>
      )}
      {!filteredTournaments && (
        <Text component="p" align="center">
          Välj ett år för att se turneringar
        </Text>
      )}
    </Fragment>
  );
}
