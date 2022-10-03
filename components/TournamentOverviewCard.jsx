import { Box, Title, Table } from "@mantine/core";
import { sortPlayersByScore } from "../lib/utils";

const TournamentOverviewCard = ({ name, date, players }) => {
  const topThree = sortPlayersByScore(players).slice(0, 3);

  const rows = topThree.map((player) => (
    <tr key={player.name}>
      <td>{player.name}</td>
      <td>{player.score}</td>
    </tr>
  ));

  return (
    <Box
      sx={() => ({
        backgroundColor: "#F6FFF8",
        textAlign: "center",
        padding: "1rem",
        borderRadius: "0.5rem",
        marginBottom: "1rem",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",

        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 10px",
        },
      })}
    >
      <Title order={2}>{name}</Title>
      <Title order={4}>{date}</Title>
      <Table>
        <thead>
          <tr>
            <th>Spelare</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Box>
  );
};

export default TournamentOverviewCard;
