import { User } from 'src/domain/user/model/user.entity';
import { TaskStatus } from '../constants/task.constants';

export class CreateTaskDto {
  name: string;
  status: TaskStatus;
  user: User;
}
