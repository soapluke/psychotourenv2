import { Fragment } from "react";
import Link from "next/link";
import TournamentOverviewCard from "./TournamentOverviewCard";

const TournamentsOverview = ({ tournaments }) => {
  return (
    <Fragment>
      {tournaments.map((tourney) => (
        <Link key={tourney._id} href={`/${tourney.slug}`}>
          <TournamentOverviewCard
            name={tourney.name}
            date={tourney.date}
            players={tourney.players}
          />
        </Link>
      ))}
    </Fragment>
  );
};

export default TournamentsOverview;
