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

@Entity('Contacts')
export default class Contact {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  ownerId: number;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: 'ownerId' })
  owner: User;

  @Column()
  contactId: number;

  @ManyToOne(() => User, user => user.id, { eager: true })
  @JoinColumn({ name: 'contactId' })
  contact: User;

  @Column()
  lastMessage: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
