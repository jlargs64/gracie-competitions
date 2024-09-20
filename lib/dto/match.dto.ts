// src/dto/user.dto.ts

import { MatchState } from '../match-types';

export class CreateMatchDTO {
  competitorA: string;
  competitorAPoints: number = 0;
  competitorB: string;
  competitorBPoints: number = 0;
  timeInMinutes: number = 5;
  state: MatchState = MatchState.PENDING;
  result?: string = undefined;
  winner?: string = undefined;

  constructor(
    competitorA: string,
    competitorB: string,
    timeInMinutes?: number,
  ) {
    this.competitorA = competitorA;
    this.competitorB = competitorB;
    if (timeInMinutes) {
      this.timeInMinutes = timeInMinutes;
    }
  }
}

export class UpdateMatchDTO {}
