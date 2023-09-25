import {
  Player,
  TourneyData,
  PlayerWithOccurrencesAndScores,
} from "../types/types.d";

const getAllPlayersAndScores = (array: TourneyData[]) => {
  let allPlayersAllScores: any = [];

  array.forEach((tournament) => {
    tournament.players.forEach((player: Player) => {
      allPlayersAllScores.push({ name: player.name, score: player.score });
    });
  });

  return allPlayersAllScores;
};

const removeHighestScores = (array: PlayerWithOccurrencesAndScores[]) => {
  array.forEach((player: PlayerWithOccurrencesAndScores) => {
    if (player.scores.length === 5) {
      player.scores.sort((a, b) => b - a).splice(0, 1);
    }
    if (player.scores.length === 6) {
      player.scores.sort((a, b) => b - a).splice(0, 2);
    }
    const scoreSum = player.scores.reduce((a, b) => a + b, 0);
    player.scores = [scoreSum];
  });

  return array;
};

export const sortPlayersByScore = (array: Player[]) => {
  return array.sort((a, b) => a.score - b.score);
};

export const sortTourneysByDate = (array: TourneyData[]) => {
  return array.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const filterTourneysByYear = (array: TourneyData[], year: string) => {
  return array.filter((tourney) => tourney.date.substring(0, 4) === year);
};

export const sortLowOccurrenceLast = (
  array: PlayerWithOccurrencesAndScores[]
) => {
  const lowOccurence = array.filter((player) => player.occurrences < 4);
  const goodOccurrence = array.filter((player) => player.occurrences >= 4);

  const sorted = [...goodOccurrence, ...lowOccurence];

  return sorted;
};

export const calculateTotalScore = (array: TourneyData[]) => {
  const allPlayersAllScores = getAllPlayersAndScores(array);
  let calculatedScores: PlayerWithOccurrencesAndScores[] = [];

  allPlayersAllScores.forEach((player: Player) => {
    const index = calculatedScores.findIndex(
      (x: PlayerWithOccurrencesAndScores) => x.name == player.name
    );
    if (index === -1) {
      calculatedScores.push({
        name: player.name,
        occurrences: 1,
        scores: [player.score],
      });
    } else {
      calculatedScores[index].scores.push(player.score);
      calculatedScores[index].occurrences++;
    }
  });

  const removedHighestScores = removeHighestScores(calculatedScores);
  const sortedByScore = removedHighestScores.sort(
    (a, b) => a.scores[0] - b.scores[0]
  );
  const lowOccurenceLast = sortLowOccurrenceLast(sortedByScore);

  return lowOccurenceLast;
};

export const serializer = (input: any) => {
  const stringifiedInput = JSON.stringify(input);
  return JSON.parse(stringifiedInput);
};
