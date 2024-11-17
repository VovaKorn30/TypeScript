"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositeValidator = void 0;
exports.CompositeValidator = {
    validate: function (data, validators) {
        var isValid = true;
        var errors = [];
        validators.forEach(function (validator) {
            var result = validator.validate(data);
            if (!result.isValid) {
                isValid = false;
                errors = errors.concat(result.errors || []);
            }
        });
        return { isValid: isValid, errors: errors };
    },
};
