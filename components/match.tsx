import { Card, CardContent } from '@/components/ui/card';
import { MatchResult, MatchState } from '@/lib/match-types';
import { CircleCheck, CircleX } from 'lucide-react';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

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
  result,
  state = MatchState.PENDING,
}) => {
  // Decide match color
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

  // Dynamically render match contents
  let matchContents = undefined;
  if (winner) {
    const loser = winner !== competitorA ? competitorA : competitorB;
    matchContents = (
      <>
        <div className="flex flex-row justify-between py-2">
          <p className="text-xl">{winner}</p>
          <CircleCheck color="green" />
        </div>
        <div className="flex flex-row justify-between py-2">
          <p className="text-xl">{loser}</p>
          <CircleX color="red" />
        </div>
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
  const card = (
    <Card className={`w-1/2 my-4 px-2 pt-4 ${matchColor}`}>
      <CardContent className="divide-y-2">{matchContents}</CardContent>
    </Card>
  );

  if (winner && result) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="w-1/2">{card}</TooltipTrigger>
          <TooltipContent>
            <p>
              {winner} by {result}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  } else {
    return card;
  }
};
export default MatchCard;
