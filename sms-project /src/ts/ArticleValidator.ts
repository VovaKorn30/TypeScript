import { Article } from './Article';

export const articleValidator = {
  validate: (data: Article) => {
    const errors: string[] = [];
    if (!data.title) errors.push("Title is required");
    if (!data.body) errors.push("Body is required");
    if (!data.author) errors.push("Author is required");
    return { isValid: errors.length === 0, errors };
  }
};
