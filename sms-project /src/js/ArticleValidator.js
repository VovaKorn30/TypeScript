"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleValidator = void 0;
exports.articleValidator = {
    validate: function (data) {
        var errors = [];
        if (!data.title)
            errors.push("Title is required");
        if (!data.body)
            errors.push("Body is required");
        if (!data.authorId)
            errors.push("Author ID is required");
        return { isValid: errors.length === 0, errors: errors };
    },
};
