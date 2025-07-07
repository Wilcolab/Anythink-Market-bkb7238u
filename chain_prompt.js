function toKebabCase(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new Error('Input must be a non-empty string');
    }

    return input
        // Replace underscores and spaces with hyphens
        .replace(/[_\s]+/g, '-')
        // Insert hyphen before uppercase letters (camelCase)
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        // Convert to lowercase
        .toLowerCase()
        // Remove leading/trailing hyphens
        .replace(/^-+|-+$/g, '')
        // Replace multiple hyphens with a single one
        .replace(/-+/g, '-');
}

module.exports = toKebabCase;