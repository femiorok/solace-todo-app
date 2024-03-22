import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  isCompleted: boolean;

  @Column('text', { nullable: true })
  description?: string;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
