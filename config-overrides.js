var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


function rewireAnalizer(config, env) {
    config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
    return config;
}


module.exports = function override(config, env) {
    // rewireAnalizer(config, env);
    return config;
}