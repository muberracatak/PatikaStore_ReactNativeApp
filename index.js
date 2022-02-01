/**
 * @format
 */


import {AppRegistry} from 'react-native';
import Router from './Router';  //Buradan yönleneceği yer router
import {name as appName} from './app.json';



AppRegistry.registerComponent(appName, () => Router);
