import { Validator } from './Validator';

export const CompositeValidator = {
  validate: <T>(data: T, validators: Validator<T>[]): { isValid: boolean; errors: string[] } => {
    let isValid = true;
    let errors: string[] = [];
    validators.forEach(validator => {
      const result = validator.validate(data);
      if (!result.isValid) {
        isValid = false;
        errors = errors.concat(result.errors || []);
      }
    });
    return { isValid, errors };
  }
};
