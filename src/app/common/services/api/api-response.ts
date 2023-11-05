export enum ApiErrorType {
  Connection = "Connection",
  Auth = "Connection",
  Client = "Connection",
  NotFound = "Connection",
  Server = "Connection",
}

export class ApiError extends Error {
  public type: ApiErrorType
  public errors: Record<string, unknown>

  constructor(message: string, type: ApiErrorType, errors: Record<string, unknown>) {
    super(message)
    this.type = type
    this.errors = errors
  }
}
