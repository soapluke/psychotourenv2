import { Table } from "@mantine/core";
import Card from "../ui/Card";
import { sortPlayersByScoreToPar } from "../lib/utils";

const ParTournamentDetailCard = ({ players, par }) => {
  const sortedPlayers = sortPlayersByScoreToPar(players, par);

  const rows = sortedPlayers.map((player) => {
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

export default ParTournamentDetailCard;
