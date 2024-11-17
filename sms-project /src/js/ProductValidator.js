"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidator = void 0;
exports.productValidator = {
    validate: function (data) {
        var errors = [];
        if (!data.name)
            errors.push("Name is required");
        if (!data.description)
            errors.push("Description is required");
        if (data.price <= 0)
            errors.push("Price must be greater than 0");
        if (data.stock < 0)
            errors.push("Stock cannot be negative");
        return { isValid: errors.length === 0, errors: errors };
    },
};
