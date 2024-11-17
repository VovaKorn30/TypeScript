"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { articleValidator } = require("./ArticleValidator");
const { productValidator } = require("./ProductValidator");
const { CompositeValidator } = require("./CompositeValidator");

const articleData = {
    title: "Sample Article",
    body: "This is the body of the article",
    authorId: "author123"
};

const productData = {
    name: "Sample Product",
    description: "A great product",
    price: 100,
    stock: 50
};


const articleValidationResult = articleValidator.validate(articleData);
console.log("Article Validation:", articleValidationResult);


const productValidationResult = productValidator.validate(productData);
console.log("Product Validation:", productValidationResult);


const compositeValidationResult = CompositeValidator.validate(productData, [productValidator, articleValidator]);
console.log("Composite Validation:", compositeValidationResult);
