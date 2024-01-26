import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class ProjectsService {

    constructor(private prisma: PrismaClient) { }

    async create(data: Prisma.ProjectCreateInput) {

        const projectExists = await this.prisma.project.findFirst({
            where: {
                id: data.id
            }
        })

        if (projectExists) {
            throw new Error('O projeto já existe.');
        }

        const projects = await this.prisma.project.create({
            data
        })
    }
}
