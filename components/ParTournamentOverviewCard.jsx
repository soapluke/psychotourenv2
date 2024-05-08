import { Title, Table } from "@mantine/core";
import Card from "../ui/Card";
import { sortPlayersByScoreToPar } from "../lib/utils";

const ParTournamentOverviewCard = ({ name, date, players, par }) => {
  const topThree = sortPlayersByScoreToPar(players, par).slice(0, 3);

  const rows = topThree.map((player) => {
    const numberColor = player.score >= 0 ? "black" : "red";
    const scoreLabel =
      player.score === 0
        ? "E"
        : player.score > 0
        ? `+${player.score}`
        : `${player.score}`;

    return (
      <tr key={player.name}>
        <td>{player.name}</td>
        <td style={{ color: numberColor }}>{scoreLabel}</td>
      </tr>
    );
  });

  return (
    <Card>
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
    </Card>
  );
};

export default ParTournamentOverviewCard;
