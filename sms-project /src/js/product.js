"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseContent_1 = require("./baseContent"); 
exports.Product = { ...baseContent_1.BaseContent, name: '', description: '', price: 0, categoryId: '', stock: 0 }; // Продукт, що розширює BaseContent
