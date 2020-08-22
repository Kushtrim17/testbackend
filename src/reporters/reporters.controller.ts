import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ReportersService } from './reporters.service';

@Controller('reporters')
export class ReportersController {
  constructor(private reporterService: ReportersService) {}

  @Get('/:id')
  findOne(@Param('id') id): string {
    return 'This endpoint will return reporter with id' + id;
  }
}
