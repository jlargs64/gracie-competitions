import MatchCard from '@/components/match';
import { TypographyH1 } from '@/components/typography/typography';
import { MatchState } from '@/lib/match-types';

export default function Dashboard() {
  /**
   *    1. Get all competitors in bracket
        2. Create cards with Competitor A and Competitor B. They will have a line seperating them on the x axis.
        3. After inital matches are placed, we create the next round which is half the competitors until there is only 1 match remaining
        4. Assume we are using single elimination for ruleset. Add double later.
        5. Handle edge cases for 1 competitor/ even competitors/ etc. (Use algo to generate rank)
   */
  return (
    <div className="container mx-auto px-2 lg:w-2/3 sm:w-full items-center justify-items-center pb-20 gap-16 sm:p-20">
      <TypographyH1>Dashboard</TypographyH1>
      <MatchCard
        competitorA="Justin"
        competitorB="Doofus"
        state={MatchState.CANCELLED}
      />
    </div>
  );
}
