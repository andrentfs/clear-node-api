export class InvalidParamError extends Error {
  constructor (paramName: String) {
    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
