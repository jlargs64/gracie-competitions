import { Card, CardContent } from '@/components/ui/card';
import { MatchResult, MatchState } from '@/lib/match-types';
import { CircleCheck, CircleX } from 'lucide-react';
import React from 'react';

interface MatchCardProps {
  competitorA: string;
  competitorB: string;
  winner?: string;
  result?: MatchResult;
  state: MatchState;
}

const MatchCard: React.FC<MatchCardProps> = ({
  competitorA,
  competitorB,
  winner,
  state = MatchState.PENDING,
}) => {
  let matchColor = '';
  switch (state) {
    case MatchState.IN_PROGRESS:
      matchColor = 'outline outline-yellow-600';
      break;
    case MatchState.CANCELLED:
      matchColor = 'outline outline-red-600';
      break;
    case MatchState.END:
      matchColor = 'outline outline-green-600';
      break;
  }
  let matchContents = undefined;
  if (winner) {
    const loser = winner !== competitorA ? competitorA : competitorB;
    matchContents = (
      <>
        <p>
          {winner} <CircleCheck />
        </p>
        <p>
          {loser} <CircleX />
        </p>
      </>
    );
  } else {
    matchContents = (
      <>
        <p>{competitorA}</p>
        <p>{competitorB}</p>
      </>
    );
  }
  return (
    <Card className={`w-1/2 my-4 px-2 pt-4 ${matchColor}`}>
      {/* <CardHeader>{state}</CardHeader> */}
      <CardContent className="divide-y-2">{matchContents}</CardContent>
    </Card>
  );
};
export default MatchCard;
