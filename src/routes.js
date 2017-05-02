import { Home } from './containers/Home/Home';
import ErrorPage from './containers/Error/index';

const errorLoading = (err) => {
    console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
    cb(null, componentModule.default);
};

export default function createRoutes(store) {
    // const injectReducer = injectReducerCreator(store);

    return [
        {
            path: '/',
            name: 'home',
            component: Home
            //// async modules injection
            //             getComponent(nextState, cb) {
            //                 const importModules = Promise.all([
            //           import('containers/HomePage/reducer'),
            //           import('containers/HomePage/sagas'),
            //           import('containers/HomePage'),
            //     ]);

            //     const renderRoute = loadModule(cb);

            //     importModules.then(([reducer, sagas, component]) => {
            //         injectReducer('home', reducer.default);;

            //         renderRoute(component);
            //     });

            //     importModules.catch(errorLoading);
            // },
        }, {
            path: '*',
            name: 'notfound',
            component: ErrorPage
        }
    ];
}