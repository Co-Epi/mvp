import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Settings from './screens/settings'
import Location from './screens/location'
import HygieneTips from './screens/hygiene-tips'
import BLE from './screens/ble'

import { TabBarIcon } from './components/ui'

export default createAppContainer(
    createBottomTabNavigator({
        Location,
        Settings,
        "Hygiene Tips": HygieneTips,
        BLE
    }, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: TabBarIcon(navigation)
        }),
    }),
)
