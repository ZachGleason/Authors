module.exports = {
    resolve: {
        fallback: { "url": require.resolve("url/") },
        fallback: { "path": require.resolve("path-browserify") },
    }
}