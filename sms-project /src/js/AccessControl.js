"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const permission_1 = require("./Permission"); 
exports.AccessControl = {
  role: 'admin', 
  contentType: { id: '1', createdAt: new Date(), updatedAt: new Date(), status: 'published', title: 'Title', body: 'Body', authorId: 'author1', tags: ['tag1'] }, // Тип контенту
  permissions: permission_1.Permission,
};
