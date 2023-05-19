import { MailProvider } from './mail.provider';
import { MailDto } from '../dto/mail.dto';

export class MockWorkingMailProvider implements MailProvider{
  send(input: MailDto): Promise<boolean> {
    return Promise.resolve(true);
  }
}

export class MockNotWorkingMailProvider implements MailProvider{
  send(input: MailDto): Promise<boolean> {
    return Promise.resolve(false);
  }
}