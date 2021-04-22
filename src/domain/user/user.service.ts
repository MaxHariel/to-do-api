import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/domain/auth/auth.service';
import { User } from 'src/domain/user/model/user.entity';
import { getRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}
  async save(user: User): Promise<User> {
    const pass = user.password;
    user.password = await this.authService.hashPassword(user.password);
    const isMatch = await bcrypt.compare(pass, user.password);
    return this.usersRepository.save(user);
  }

  findOne(userId: string): Promise<User> {
    return this.usersRepository.findOne(userId);
  }

  async findByIdentification(identification: string): Promise<User> {
    return getRepository(User)
      .createQueryBuilder('users')
      .where('users.identification = :identification', { identification })
      .getOne();
  }

  async findTasksByUserId(userId: string) {
    const user = await this.usersRepository.findOne(userId);
    return user;
  }
}
