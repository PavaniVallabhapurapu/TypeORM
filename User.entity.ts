// we need to link profile with decorator so used onetoone and to mark foreign key Joincolumn

import { Entity, PrimaryGeneratedColumn, Column , OneToOne, JoinColumn } from "typeorm"
import { Profile } from "./Profile.entity"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean

    // in onetoone we have to define with which table/entity we want the relation 
    @OneToOne(()=> Profile)
    // to mark the profile attribute as foreign key
    @JoinColumn()
    // each user will have a profile so the attribute: 
    profile : Profile
}