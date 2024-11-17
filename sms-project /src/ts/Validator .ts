export interface Validator<T> {
  validate: (data: T) => { isValid: boolean; errors?: string[] };
}
