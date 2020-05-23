import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from './User';

@Entity('Messages')
export default class Message {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  ownerId: number;

  @ManyToOne(() => User, user => user.id, { eager: true })
  @JoinColumn({ name: 'ownerId' })
  owner: User;

  @Column()
  receiverId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'receiverId' })
  receiver: User;

  @Column()
  text: string;

  @Column('time with time zone', { default: new Date() })
  date: Date;

  @Column('bool', { default: false })
  read: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
