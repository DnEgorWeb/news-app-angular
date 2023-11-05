import { Injectable } from "@angular/core"

@Injectable()
export class LocalStorageService {
  get<T>(key: string, isJSON: boolean): T | null {
    const result = localStorage.getItem(key)
    if (result && isJSON) {
      return JSON.parse(result) as T
    }
    return result as T | null
  }

  put(key: string, value: string | Object) {
    const formattedValue = typeof value === 'string' ? value : JSON.stringify(value)
    localStorage.setItem(key, formattedValue)
  }

  remove(key: string) {
    localStorage.removeItem(key)
  }
}