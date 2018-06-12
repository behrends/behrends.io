---
id: chapter6
title: Kapitel 6 - Fotos mit der Kamera aufnehmen
sidebar_label: Kapitel 6 - Fotos / Kamera
---

### Korrekturen

Für die Verwendung der Kamera werden in neueren Version des Expo-SDKs weitere Berechtigungen benötigt
(`Permissions.CAMERA` und `Permissions.CAMERA_ROLL`). Bitte passen Sie den Code
in `js/screens/EditScreen.js` entsprechend an: 

```
// diese Methode der Klasse EditScreen hinzufuegen
_hasCameraPermissions = async () => {
  let permission = await Permissions.askAsync(Permissions.CAMERA);
  if (permission.status !== 'granted') {
    console.log('Permission to camera was denied');
    return false;
  }
  permission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (permission.status !== 'granted') {
    console.log('Permission to camera roll was denied');
    return false;
  }
  return true;
};

// vor Verwendung der Kamera werden die Berechtigungen mit obiger Methode abgefragt
_launchCamera = async () => {
  if (this._hasCameraPermissions()) {
    const result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      const { item } = this.state;
      item.photo = result.uri;
      this.setState({ item: item });
    }
  }
  this.textInput.focus();
};

// ... der Rest bleibt unveraendert ...
```

### Code

Beispielfoto: [foto.png](/react-native-buch/Kapitel6/foto.png)

Tagebucheintrag in der Liste als eigene Komponente: [JournalItemRow.js](assets/chapter6/JournalItemRow/JournalItemRow.js) und [JournalItems.js](assets/chapter6/JournalItemRow/JournalItems.js)

Statisches Bild im Tagebucheintrag: [JournalItemRow.js](assets/chapter6/StatischesBild/JournalItemRow.js) und [JournalItems.js](assets/chapter6/StatischesBild/JournalItems.js)

Eingabe als eigene Komponente: [JournalItemInput.js](assets/chapter6/JournalItemInput/JournalItemInput.js) und [App.js](assets/chapter6/JournalItemInput/App.js)

Kamera-Icon und TouchableItem: [JournalItemInput.js](assets/chapter6/EingabefeldMitKameraIcon/JournalItemInput.js), [JournalItemRow.js](assets/chapter6/EingabefeldMitKameraIcon/JournalItemRow.js) und [TouchableItem.js](assets/chapter6/EingabefeldMitKameraIcon/TouchableItem.js)

Kamera verwenden: [JournalItemInput.js](assets/chapter6/Kamera/JournalItemInput.js)

Dateien am Ende des Kapitels: [App.js](assets/chapter6/Ende/App.js), [JournalItems.js](assets/chapter6/Ende/JournalItems.js), [JournalItemInput.js](assets/chapter6/Ende/JournalItemInput.js), [JournalItemRow.js](assets/chapter6/Ende/JournalItemRow.js) und [TouchableItem.js](assets/chapter6/Ende/TouchableItem.js)
