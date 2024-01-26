import { Body, Controller, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import {}

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(@Body() data: ProjectCreateInput)
}
