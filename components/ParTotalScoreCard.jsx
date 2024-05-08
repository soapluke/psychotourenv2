import { Title, Table } from "@mantine/core";
import Card from "../ui/Card";
import { calculateTotalScoreToPar } from "../lib/utils";

const ParTotalScoreCard = ({ tournaments }) => {
  const totalScore = calculateTotalScoreToPar(tournaments);

  const rows = totalScore.map((player) => {
    const numberColor = player.scores[0] >= 0 ? "black" : "red";
    const scoreLabel =
      player.scores[0] === 0
        ? "E"
        : player.scores[0] > 0
        ? `+${player.scores[0]}`
        : `${player.scores[0]}`;

    return (
      <tr key={player.name}>
        <td>{player.name}</td>
        <td style={{ color: numberColor }}>{scoreLabel}</td>
        <td>{player.occurrences}</td>
      </tr>
    );
  });

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

export default ParTotalScoreCard;
