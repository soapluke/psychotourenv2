import { Fragment } from "react";
import Link from "next/link";
import Header from "./Header";
import TournamentOverviewCard from "./TournamentOverviewCard";

const TournamentsOverview = ({ tournaments }) => {
  return (
    <Fragment>
      {tournaments.map((tourney) => (
        <Link key={tourney._id} href={`/${tourney.slug}`} legacyBehavior>
          <a>
            <TournamentOverviewCard
              name={tourney.name}
              date={tourney.date}
              players={tourney.players}
            />
          </a>
        </Link>
      ))}
    </Fragment>
  );
};

export default TournamentsOverview;
