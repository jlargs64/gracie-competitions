export enum MatchResult {
  SUBMISSION = 'submission',
  POINTS = 'points',
  DQ = 'disqualification',
  WALKOVER = 'walkover',
}

export enum MatchState {
  PENDING = 'not_started',
  START = 'start',
  IN_PROGRESS = 'in_progress',
  END = 'end',
  CANCELLED = 'cancelled',
}
