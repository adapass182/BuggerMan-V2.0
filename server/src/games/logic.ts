import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Board, PlayerSymbol, BoardSymbol, Bug, Explosion, Row } from './entities'

@ValidatorConstraint()
export class IsBoard implements ValidatorConstraintInterface {

  validate(board: Board) {
    const symbols = [ 'x', 'o', 'p1', 'p2', 'p3', 'p4', 'bug', 'exp' ]
    return board.length === 10 &&
      board.every(row =>
        row.length === 10 &&
        row.every(symbol => symbols.includes(symbol))
      )
  }
}