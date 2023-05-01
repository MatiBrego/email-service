export class MailInputDto{
  userId: number
  to: string
  subject: string
  text: string

  constructor(input: MailInputDto) {
    this.userId = input.userId;
    this.to = input.to;
    this.subject = input.subject;
    this.text = input.text;
  }
}

export class MailDto{
  from: string
  to: string
  subject: string
  text: string

  constructor(input: MailDto) {
    this.from = input.from;
    this.to = input.to;
    this.subject = input.subject;
    this.text = input.text;
  }
}