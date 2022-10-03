import { Fragment, useState } from "react";
import { Title, Text, Grid, NativeSelect } from "@mantine/core";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <Fragment>
      <Title>Psychotouren</Title>
      <Grid>
        <Grid.Col md={6} sm={12}>
          <Text component="p">Psykopater som spelar golf</Text>
        </Grid.Col>
        <Grid.Col md={6} sm={12}>
          <NativeSelect
            data={["2022", "2023"]}
            value={value}
            onChange={(event) => console.log(event.currentTarget.value)}
          />
        </Grid.Col>
      </Grid>
    </Fragment>
  );
};

export default Header;
