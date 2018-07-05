---
id: chapter9
title: Kapitel 9 - StackNavigator
sidebar_label: Kapitel 9 - StackNavigator
---

### Korrekturen

Wenn `react-navigation` mit npm im Projektordner von `MyJournal` installiert wird, dann handelt es sich jetzt um Version 2 der Navigationsbibliothek. Um einen Stacknavigator zu verwenden, muss in `AppNavigator.js` der entsprechende Import aus `react-navigation` angepasst werden:

```
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
```

Um einen Stack zu erzeugen, muss nun die Funktion `createStackNavigator` in `AppNavigator.js`
aufgerufen werden (anstatt `StackNavigator`):

```
const AppNavigator = createStackNavigator({
// ... usw. ...
```

### Code

StackNavigator mit einfacher Detailansicht einbinden: [AppNavigator.js](assets/chapter9/StackNavigator/AppNavigator.js), [ItemScreen.js](assets/chapter9/StackNavigator/ItemScreen.js), [JournalScreen.js](assets/chapter9/StackNavigator/JournalScreen.js), [JournalItems.js](assets/chapter9/StackNavigator/JournalItems.js), [JournalItemRow.js](assets/chapter9/StackNavigator/JournalItemRow.js) und [JournalItemInput.js](assets/chapter9/StackNavigator/JournalItemInput.js)

Styling der Kopfleiste: [AppNavigator.js](assets/chapter9/Styling/AppNavigator.js) und [JournalItems.js](assets/chapter9/Styling/JournalItems.js)

Detailansicht mit Tagebucheintrag (Text und Foto): [JournalItems.js](assets/chapter9/Detailansicht/JournalItems.js), [JournalScreen.js](assets/chapter9/Detailansicht/JournalScreen.js) und [ItemScreen.js](assets/chapter9/Detailansicht/ItemScreen.js)

Navigation von der Fotogalerie zu einem Eintrag: [PhotosScreen.js](assets/chapter9/NavigationFotoEintrag/PhotosScreen.js)

Editor: [EditScreen.js](assets/chapter9/Editor/EditScreen.js), [AppNavigator.js](assets/chapter9/Editor/AppNavigator.js) und [JournalScreen.js](assets/chapter9/Editor/JournalScreen.js)

Eintrag bearbeiten: [ItemScreen.js](assets/chapter9/EintragBearbeiten/ItemScreen.js) und [App.js](assets/chapter9/EintragBearbeiten/App.js)

Wetterdaten und Standort im Editor anfragen: [EditScreen.js](assets/chapter9/WetterStandort/EditScreen.js)
