import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ContactRecord } from './ContactRecord';

// todo consider moving to common
enum PhoneNumberType {
  Work = 'work',
  Home = 'home',
  Mobile = 'mobile',
  Other = 'other',
}

@Entity({ name: 'phone_number' })
export class PhoneNumber {
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @Column({
    default: PhoneNumberType.Home,
  })
  public type: string;

  @ManyToOne(
    () => ContactRecord,
    contact => contact.phoneNumbers,
  )
  public userContact: ContactRecord;
}