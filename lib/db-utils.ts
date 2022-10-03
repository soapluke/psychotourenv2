import clientPromise from "./mongodb";

export const getAllTournaments = async () => {
  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);
  const result = await db.collection("tourneys").find().toArray();
  return result;
};

export const getTournamentBySlug = async (slug: string) => {
  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);
  const result = await db.collection("tourneys").find({ slug }).toArray();
  return result;
};
