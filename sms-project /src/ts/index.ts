import { Article } from './Article';
import { Product } from './Product';
import { articleValidator } from './ArticleValidator';
import { productValidator } from './ProductValidator';
import { CompositeValidator } from './CompositeValidator';
import { ContentOperations } from './ContentOperations';


const articleData: Article = { id: '1', createdAt: new Date(), updatedAt: new Date(), title: 'Article Title', body: 'Content', author: 'John Doe', tags: ['tag1'], status: 'draft' };
const productData: Product = { id: '1001', createdAt: new Date(), updatedAt: new Date(), name: 'Product Name', description: 'Product Description', price: 99.99, categoryId: 'cat1', stock: 10, status: 'published' };

console.log(articleValidator.validate(articleData));
console.log(productValidator.validate(productData));


const contentOperations: ContentOperations<Article> = {
  create: (content) => { console.log('Created:', content); return content; },
  read: (id) => { console.log('Read:', id); return articleData; },
  update: (id, content) => { console.log('Updated:', content); return content; },
  delete: (id) => { console.log('Deleted:', id); return true; }
};


contentOperations.create(articleData);
contentOperations.read('1');
contentOperations.update('1', { ...articleData, title: 'Updated Title' });
contentOperations.delete('1');
