import { Table } from "@mantine/core";
import Card from "../ui/Card";
import { sortPlayersByScoreToPar } from "../lib/utils";

const TournamentDetailCard = ({ players }) => {
  const sortedPlayers = sortPlayersByScoreToPar(players);

  const rows = sortedPlayers.map((player) => (
    <tr key={player.name}>
      <td>{player.name}</td>
      <td>{player.score}</td>
    </tr>
  ));

  return (
    <Card>
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

export default TournamentDetailCard;
