import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserWithEmailDto } from './dtos/create-user-with-email.dto';


@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}

    async createUserWithEmail(user: CreateUserWithEmailDto) {
        return this.prisma.user.create({
            data: {
                email: 
            }
        })
    }
}
