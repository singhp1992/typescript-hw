import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
//import { IsString, IsIn } from 'class-validator'


const defaultBoard = [
    ["o", "o", "o"],
    ["o", "o", "o"],
    ["o", "o", "o"]
]


@Entity()
export default class Game extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    //@IsString()
    @Column('text', { nullable: false })
    name: string

    //@IsIn(colors)
    //@IsString()
    @Column('text', { default: false })
    color: string

    @Column('json', { nullable: true, default: defaultBoard})
    board: string[][]

}