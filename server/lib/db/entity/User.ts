import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Todo } from './Todo';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string; // Email from GitHub profile

  @Column()
  githubId: string; // GitHub user ID

  @Column()
  name: string; // GitHub user's name

  @Column({ nullable: true })
  avatarUrl: string; // GitHub user's avatar URL

  @Column({ default: 0 })
  tokensUsed: number; // Track the number of tokens each user has consumed

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}
