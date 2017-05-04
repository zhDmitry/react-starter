start dev server - npm start
build static assets - npm run build 
## Add size analizer 
```
yarn add --dev webpack-bundle-analyzer


var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

///

///
function rewireAnalizer(config, env){
    config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
    return config;
}

```


## TODO
1. add more bluprints for redux cli
2. add setup without routing
3. decide about styling (glamour/styled-components/css-modules)
4. add more complex setup with redux-saga and immutable reducers