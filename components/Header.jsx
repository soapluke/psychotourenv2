import { Fragment } from "react";
import { Title, Text, Grid } from "@mantine/core";

const Header = () => {

  return (
    <Fragment>
      <Title>Psychotouren</Title>
      <Grid>
        <Grid.Col md={6} sm={12}>
          <Text component="p">Psykopater som spelar golf!</Text>
        </Grid.Col>
      </Grid>
    </Fragment>
  );
};

export default Header;
