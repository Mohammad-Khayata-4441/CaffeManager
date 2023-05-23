import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class Cafe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  openingHours: string;

  @Column()
  location: string;

  @Column()
  phoneNumber: string;

  @Column()
  themeId: string;

  constructor(
    name: string,
    openingHours: string,
    location: string,
    phoneNumber: string,
    themeId: string,
  ) {
    this.id = uuid();
    this.name = name;
    this.openingHours = openingHours;
    this.location = location;
    this.phoneNumber = phoneNumber;
    this.themeId = themeId;
  }
}
