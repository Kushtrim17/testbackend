import { Controller, Get, Post, Param, Body, UseGuards, Request } from '@nestjs/common';
import { CreateArtifactDto } from './dto/create-artifact.dto';
import { ArtifactsService } from './artifacts.service';
import { Artifact } from './entities/artifact.entity';
import { AuthenticatedGuard } from '../common/guards/authenticated.guard';

@Controller('artifacts')
export class ArtifactsController {
  constructor(private artifactsService: ArtifactsService) {}

  @Get()
  async findAll(): Promise<Artifact[]> {
    try {
      return this.artifactsService.findAll();
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/recent')
  async getRecent(@Request() req: any): Promise<Artifact[]> {
    try {
      return this.artifactsService.getRecent();
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  findOne(@Param('id') id) {
    return this.artifactsService.getArtifactById(id);
  }

  @Post()
  async create(@Body() createArtifactDto: CreateArtifactDto) {
    return this.artifactsService.create(createArtifactDto);
  }

  @Post('/images/:id')
  uploadArtifactImages(): string {
    return 'This endpoint will be used to upload images for the created artifact';
  }
}
