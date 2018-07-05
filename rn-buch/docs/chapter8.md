---
id: chapter8
title: Kapitel 8 - Navigation mit Tabs
sidebar_label: Kapitel 8 - Navigation (Tabs)
---

### Korrekturen

Wenn `react-navigation` mit npm im Projektordner von `MyJournal` installiert wird, dann handelt es sich jetzt um Version 2 der Navigationsbibliothek. Um eine TabLeiste zu verwenden, muss in `AppNavigator.js` der entsprechende Import aus `react-navigation` angepasst werden:

```
import { createBottomTabNavigator } from 'react-navigation';
```

Um eine Tableiste zu erzeugen, muss nun die Funktion `createBottomTabNavigator` in `AppNavigator.js`
aufgerufen werden (anstatt `TabNavigator`):

```
const Tabs = createBottomTabNavigator({
// ... usw. ...
``` 

### Code

Tableiste mit drei Screens einbinden: [App.js](assets/chapter8/SimpleScreens/App.js), [AppNavigator.js](assets/chapter8/SimpleScreens/AppNavigator.js), [JournalScreen.js](assets/chapter8/SimpleScreens/JournalScreen.js), [PhotosScreen.js](assets/chapter8/SimpleScreens/PhotosScreen.js) und [SettingsScreen.js](assets/chapter8/SimpleScreens/SettingsScreen.js)

Einheitliche Darstellung der Tableiste in Android und iOS: [AppNavigator.js](assets/chapter8/EinheitlicheTableiste/AppNavigator.js)

Screens für die Fotogalerie und Einstellungen: [PhotosScreen.js](assets/chapter8/Screens/PhotosScreen.js) und [SettingsScreen.js](assets/chapter8/Screens/SettingsScreen.js)
