import { Controller, Get, Post, UseGuards, Request, Res } from '@nestjs/common';
import { ReportersService } from './reporters/reporters.service';
import { LoginGuard } from './common/guards/login.guard';
import { AuthenticatedGuard } from './common/guards/authenticated.guard';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly reportersService: ReportersService) {}

  @UseGuards(LoginGuard)
  @Post('auth/login')
  async login(@Request() req: any, @Res() res: Response) {
    try {
      res.send({ user: res.req.user });
    } catch (error) {
      throw error;
    }
  }

  // async login(@Request() req: any) {
  //   try {
  //     return { user: 'hello mate' };
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  @UseGuards(AuthenticatedGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return { user: req.user };
  }

  // @UseGuards(LoginGuard)
  // @Post('/create')
  // async create(@Body() createReporterDto: CreateReporterDto) {
  //   try {
  //     // first check if the account exists
  //     const reporter = await this.reportersService.findOne(
  //       createReporterDto.reporter.email,
  //     );

  //     let newReporterAccount = null;
  //     if (reporter != null) {
  //       // reporter exists maybe we should signIn user and return access_token
  //       newReporterAccount = reporter;
  //     } else {
  //       newReporterAccount = await this.reportersService.create(
  //         createReporterDto,
  //       );
  //     }

  //     // const response = await this.login({
  //     //   user: {
  //     //     email: newReporterAccount.email,
  //     //     socialMediaId: createReporterDto.googleAuth.googleId,
  //     //   },
  //     // });
  //     const response = await this.login({
  //       username: 'username',
  //       password: 'shit',
  //     });

  //     return { ...newReporterAccount, response };
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
