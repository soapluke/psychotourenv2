import { Title, Table } from "@mantine/core";
import Card from "../ui/Card";
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

export default TournamentOverviewCard;
