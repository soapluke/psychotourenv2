import { Box, Title, Table } from "@mantine/core";
import Card from "../ui/Card";
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
    <Card>
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
    </Card>
  );
};

export default TotalScoreCard;
