import { ScoreModelDto } from '../dto/ScoreModelDto'
import NumberConst from '../const/NumberConst'
import ScoreConst from '../const/ScoreConst'

export default class ScoreModel {
  numberToGuess: string
  scores: number[]

  constructor(numberToGuess: string) {
    this.numberToGuess = numberToGuess
    this.scores = []
    for (let i = 0; i < numberToGuess.length; ++i) {
      this.scores.push(ScoreConst.ScoreString.NONE)
    }
  }

  measure(userInput: string): ScoreModelDto {
    const strikes = this.countStrikes(userInput)
    const balls = this.countBalls(userInput)
    const nothings = this.countNothings()
    if (strikes + balls + nothings !== userInput.length) {
      return {
        error:
          'error in ScoreModel.measure... ' +
          `\n  numberToGuess: ${this.numberToGuess}` +
          `\n  userInput: ${userInput}`,
        strikes: 0,
        balls: 0,
        nothings: 0,
      }
    }
    return {
      error: null,
      strikes: this.scores.filter(
        (score) => score === ScoreConst.ScoreString.STRIKE,
      ).length,
      balls: this.scores.filter(
        (score) => score === ScoreConst.ScoreString.BALL,
      ).length,
      nothings: this.scores.filter(
        (score) => score === ScoreConst.ScoreString.NOTHING,
      ).length,
    }
  }
  /** @access private */
  countStrikes(userInput: string): number {
    let strikes = 0
    for (let i = 0; i < NumberConst.LENGTH; ++i) {
      if (userInput[i] === this.numberToGuess[i]) {
        this.scores[i] = ScoreConst.ScoreString.STRIKE
        ++strikes
      }
    }
    return strikes
  }
  /** @access private */
  countBalls(userInput: string): number {
    let balls = 0
    for (let i = 0; i < NumberConst.LENGTH; ++i) {
      if (
        this.numberToGuess.includes(userInput[i]) &&
        this.scores[i] === ScoreConst.ScoreString.NONE
      ) {
        this.scores[i] = ScoreConst.ScoreString.BALL
        ++balls
      }
    }
    return balls
  }
  /** @access private */
  countNothings(): number {
    let nothings = 0
    for (let i = 0; i < NumberConst.LENGTH; ++i) {
      if (this.scores[i] === ScoreConst.ScoreString.NONE) {
        this.scores[i] = ScoreConst.ScoreString.NOTHING
        ++nothings
      }
    }
    return nothings
  }
}
