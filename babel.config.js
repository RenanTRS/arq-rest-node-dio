module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                '@models': './src/models',
                '@repositories': './src/repositories'
            }
        }]
    ],
    ignore: [
        '**/*.spec.ts'
    ]
}