import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({schema:'Test'})
export class Test {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean
}