"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = { validate: (data) => ({ isValid: Object.values(data).every(value => value), errors: [] }) }; 
