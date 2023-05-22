import { UserService } from '../../src/user/user.service';
import { UserRepository } from '../../src/user/user.repository';
import { PrismaClient } from '@prisma/client';
import { MailService } from '../../src/mail/mail.service';
import { MailProvider } from '../../src/mail/provider/mail.provider';
import { MailProviderService } from '../../src/mail/mail.provider.service';
import { MockNotWorkingMailProvider, MockWorkingMailProvider } from './util/mock.mail.provider';
import { StatsService } from '../../src/stats/stats.servcie';
import { StatsRepository } from '../../src/stats/stats.repository';
import { UserDto } from '../../src/user/dto/user.dto';

describe("MailService", () => {

  const db = new PrismaClient();
  let mailService: MailService;

  let mailProviderService: MailProviderService;

  let providers: MailProvider[];

  let user: UserDto;

  beforeEach(async () => {
    const userService = new UserService(new UserRepository(db))

    user = await userService.getUserById(7)

    providers = [new MockNotWorkingMailProvider(), new MockNotWorkingMailProvider(), new MockWorkingMailProvider()]
    mailProviderService = new MailProviderService(providers)


    mailService = new MailService(userService, mailProviderService, new StatsService(new StatsRepository(db)))

  })

  describe("send", () => {
    it("should switch through all not working providers and send the msg", async () => {
      await mailService.send({to: 'user2@gmail.com', text: 'Test', subject: 'Test'}, user.id)

      expect(mailProviderService.getProvider()).toEqual(providers[2])
    })

    it("should return null if providers are not working", async () => {
      providers.forEach((provider, index) => providers[index] = new MockNotWorkingMailProvider())

      const result = await mailService.send({to: 'user2@gmail.com', text: 'Test', subject: 'Test'}, user.id)

      expect(result).toBeNull();
    })
  })
})