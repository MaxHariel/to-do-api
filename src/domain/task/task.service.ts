import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/domain/task/model/task.entity';
import { UserService } from 'src/domain/user/user.service';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    private userService: UserService,
  ) {}

  async create(createTaskDto: CreateTaskDto, user: any) {
    if (user.id == createTaskDto.user.id) {
      throw new UnauthorizedException('Doesnt create task for other user');
    }

    const task = await this.taskRepository.save(createTaskDto);
    return task;
  }

  findAll() {
    return this.taskRepository.find();
  }

  findOne(id: string) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update(updateTaskDto.id, updateTaskDto);
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
