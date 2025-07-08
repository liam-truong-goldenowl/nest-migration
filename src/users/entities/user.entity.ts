import { BaseEntity } from 'src/common/entities/base.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
