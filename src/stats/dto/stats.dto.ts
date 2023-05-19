export class StatsDto{
  id: number
  userId: number
  mailCount: number
  date: Date

  constructor(input: StatsDto) {
    this.id = input.id
    this.userId = input.userId;
    this.mailCount = input.mailCount;
    this.date = input.date;
  }
}