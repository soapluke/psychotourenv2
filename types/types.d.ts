export interface Id {
  $oid: string;
}

export interface Player {
  name: string;
  score: number;
}

export interface PlayerWithOccurrencesAndScores {
  name: string;
  scores: number[];
  occurrences: number;
}

export interface TourneyData {
  _id: Id;
  slug: string;
  name: string;
  date: string;
  players: Player[];
}