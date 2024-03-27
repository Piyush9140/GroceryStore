/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Loginscreen from './src/screens/Loginscreen';
import ImageCarousel from './src/components/ImageCarousel';

AppRegistry.registerComponent(appName, () => ImageCarousel);
