/**
 * @format
 */

import { AppRegistry } from 'react-native'
import Provider from 'routes'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => Provider)
