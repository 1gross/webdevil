const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@components': resolvePath('./src/components'),
            '@css': resolvePath('./src/source/styles'),
            '@images': resolvePath('./src/images'),
            '@hooks': resolvePath('./src/hooks'),
        }
    },
}