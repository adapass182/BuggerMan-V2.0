import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Index, OneToMany, ManyToOne } from 'typeorm'
import User from '../users/entity'
import { IsString } from 'class-validator';

export type BoardSymbol =  'o'
export type PlayerSymbol = 'p1' | 'p2' | 'p3' | 'p4'
export type Bug = 'bug'
export type Row = [ BoardSymbol | PlayerSymbol | Bug, BoardSymbol | PlayerSymbol | Bug, BoardSymbol | PlayerSymbol | Bug, BoardSymbol | PlayerSymbol | Bug, BoardSymbol | PlayerSymbol | Bug, BoardSymbol | PlayerSymbol | Bug, BoardSymbol | PlayerSymbol | Bug, BoardSymbol | PlayerSymbol | Bug, BoardSymbol | PlayerSymbol | Bug, BoardSymbol | PlayerSymbol | Bug ]
export type Board = [ Row, Row, Row, Row, Row, Row, Row, Row, Row, Row ]

type Status = 'pending' | 'started' | 'finished'

const emptyRow: Row = ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o' ]
const emptyBoard: Board = [ emptyRow, emptyRow, emptyRow, emptyRow, emptyRow, emptyRow, emptyRow, emptyRow, emptyRow, emptyRow ]

@Entity()
export class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:false})
  name: string

  @Column('json', {default: emptyBoard})
  board: Board

  @Column('char', {length:1, nullable: true})
  winner: Symbol

  @Column('text', {default: 'pending'})
  status: Status

  // this is a relation, read more about them here:
  // http://typeorm.io/#/many-to-one-one-to-many-relations
  @OneToMany(_ => Player, player => player.game, {eager:true})
  players: Player[]
}

@Entity()
@Index(['game', 'user'], {unique:true})
export class Player extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_ => User, user => user.players)
  user: User

  @ManyToOne(_ => Game, game => game.players)
  game: Game

  @Column()
  userIdentity: number

  @Column('char', {length: 1})
  symbol: PlayerSymbol

  @Column('boolean', {default: false, nullable: false})
  isDead: Boolean
}
