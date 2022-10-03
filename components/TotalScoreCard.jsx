import { Box, Title, Table } from "@mantine/core";
import { calculateTotalScore } from "../lib/utils";

const TotalScoreCard = ({ tournaments }) => {
  const totalScore = calculateTotalScore(tournaments);

  const rows = totalScore.map((player) => (
    <tr key={player.name}>
      <td>{player.name}</td>
      <td>{player.scores[0]}</td>
      <td>{player.occurrences}</td>
    </tr>
  ));
  return (
    <Box
      sx={() => ({
        backgroundColor: "#F6FFF8",
        textAlign: "center",
        padding: "1rem",
        borderRadius: "0.5rem",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",

        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 10px",
        },
      })}
    >
      <Title order={2}>Total ställning</Title>

      <Table>
        <thead>
          <tr>
            <th>Spelare</th>
            <th>Score</th>
            <th>Antal spelade</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Box>
  );
};

export default TotalScoreCard;
