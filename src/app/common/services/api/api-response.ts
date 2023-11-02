export enum ApiErrorType {
  Connection = "Connection",
  Auth = "Connection",
  Client = "Connection",
  NotFound = "Connection",
  Server = "Connection",
}

export class ApiError extends Error {
  public type: ApiErrorType

  constructor(message: string, type: ApiErrorType) {
    super(message)
    this.type = type
  }
}
