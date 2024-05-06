import { Fragment, useCallback } from "react";
import { Text, Select, Space } from "@mantine/core";
import Header from "../components/Header";
import { useRouter } from "next/router";

const years = ['2022', '2023', '2024']

export default function Home() {
  
  const router = useRouter();

  const setYear = useCallback((year) => {
    router.push(`/tourneys/${year}`)
  }, []);

  return (
    <Fragment>
      <Header />
      <Select
        placeholder="Välj ett år"
        data={years}
        onChange={setYear}
      />
      <Space h="md" />
      
        <Text component="p" align="center">
          Välj ett år för att se turneringar
        </Text>

    </Fragment>
  );
}
