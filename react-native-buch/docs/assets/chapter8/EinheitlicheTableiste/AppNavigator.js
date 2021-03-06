import React from 'react';
import { Platform } from 'react-native';
import { 
  createAppContainer,
  createBottomTabNavigator 
} from 'react-navigation';

import { SimpleLineIcons } from '@expo/vector-icons';

import JournalScreen from './screens/JournalScreen';
import PhotosScreen from './screens/PhotosScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tabs = createBottomTabNavigator(
  {
    Journal: {
      screen: JournalScreen,
      navigationOptions: {
        title: 'Tagebuch',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="book-open" size={24} color={tintColor} />
        )
      }
    },
    Photos: {
      screen: PhotosScreen,
      navigationOptions: {
        title: 'Fotos',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="picture" size={24} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Einstellungen',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="settings" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'deepskyblue',
      inactiveTintColor: '#929292',
      style: {
        backgroundColor: '#f4f4f4' // Hintergrundfarbe der Tableiste
      },
      indicatorStyle: {
        height: 0 // Kein Strich am unteren Rand in Android
      },
      showIcon: true,
      upperCaseLabel: false,
      labelStyle: {
        // nur Android: kein Abstand nach unten
        ...Platform.select({ android: { marginBottom: 0 } })
      }
    }
  }
);

export default createAppContainer(Tabs);
