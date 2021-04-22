import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { classToPlain } from 'class-transformer';
import { JWTAuthGuard } from 'src/domain/auth/guards/jwt-auth.guard';
import { User } from 'src/domain/user/model/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('singup')
  async singUp(@Body() user) {
    return new User(await this.userService.save(user));
  }

  @Put()
  async update(@Body() user) {
    return new User(await this.userService.save(user));
  }

  @UseGuards(JWTAuthGuard)
  @Get()
  async getUser(@Request() request) {
    const user = request.user;
    return classToPlain(await this.userService.findOne(user.id));
  }
}
