import { Module } from '@nestjs/common';
import { ProjectsModule } from './module/projects/projects.module';

@Module({
  imports: [ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
