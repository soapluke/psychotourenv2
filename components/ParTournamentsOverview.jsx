import { Fragment } from "react";
import Link from "next/link";
import ParTournamentOverviewCard from "./ParTournamentOverviewCard";

const ParTournamentsOverview = ({ tournaments }) => {
  return (
    <Fragment>
      {tournaments.map((tourney) => (
        <Link key={tourney._id} href={`/${tourney.slug}`} legacyBehavior>
          <a>
            <ParTournamentOverviewCard
              name={tourney.name}
              date={tourney.date}
              players={tourney.players}
              par={tourney.par}
            />
          </a>
        </Link>
      ))}
    </Fragment>
  );
};

export default ParTournamentsOverview;
