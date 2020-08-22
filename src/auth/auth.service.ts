import { Injectable } from '@nestjs/common';
import { ReportersService } from '../reporters/reporters.service';

@Injectable()
export class AuthService {
  constructor(private readonly reportersService: ReportersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const reporter = await this.reportersService.findOne(email);
    if (reporter) {
      const { password, ...result } = reporter;
      return result;
    }

    return null;
  }
}
