import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

// table name to be profile
@Entity({name : "Profile"}) 
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable : false})
    gender: string

    @Column({nullable : true})
    skills: string
}