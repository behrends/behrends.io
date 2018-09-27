---
id: chapter2
title: Kapitel 2 - Erste Schritte mit React Native
sidebar_label: Kapitel 2 - Erste Schritte
---

## Korrekturen

### Node.js: Version 8 oder neuer

Node.js muss mindestens in Version 8 installiert werden. Das schrittweise Vorgehen zur Installation von React Native auf Windows ist in diesem [Video](https://youtu.be/v4zmZV2uOkY) zu sehen.

### `expo` statt `create-react-native-app` verwenden

Um neue React-Native-Projekte für Expo zu erzeugen, sollte nun das
Kommandozeilenwerkzeug Expo CLI mit `npm` installiert werden (anstatt
`create-react-native-app`):

```
npm install -g expo-cli
```

Ein neues Projektverzeichnis wird nun wie folgt estellt (anstatt
`create-react-native-app`):

```
expo init StepCounter
```

Es sollte nun das Template `blank` gewählt werden. Danach kann der React Native Packager für das neue Projekt wie gewohnt gestartet
werden:

```
cd StepCounter
npm start
``` 

Es ist auch möglich, den Packager mit `expo start` auszuführen.

### iPhone: App in Expo laden

Aufgrund strengerer Richtlinien von Apple für iOS-Apps kann man in der Expo-App auf dem iPhone die App seit Ende März 2018 nicht mehr per QR-Code scannen und laden. Ab iOS 11 ist es möglich, den QR-Code mit der normalen Kamera-App von Apple auf dem iPhone zu scannen und die App durch Antippen der dann erscheinenden Benachrichtigung in Expo zu öffnen:   

![](/react-native-buch/img/Expo-iPhone.png)

Ansonsten kann die App z.B. auch per SMS geladen werden. Wenn der React Native Packager in der Konsole gestartet wurde, kann statt dessen eine URL per SMS oder E-Mail verschickt werden. Durch klicken dieser URL in der SMS bzw. E-Mail auf dem iPhone wird die Expo-App geöffnet, sodass diese den Code für die App laden und ausführen kann. Android-Geräte sind von dieser Änderung nicht betroffen.

Wie eine App auf dem iPhone mit Expo per SMS geladen und ausgeführt werden kann, zeigt dieses [Video](https://youtu.be/w76_znaypW0).

### Code

Für die App `StepCounter` enthält die Datei `App.js` den Code der einzigen Komponente. Das komplette Projekt steht als gezipptes Archiv zum Download bereit. Für dessen Verwendung muss im entpackten Projektordner `npm install` oder `yarn ausgeführt` werden. Zusätzlich kann die App als Expo Snack im Browser getestet werden.

Code der Hauptkomponente: [App.js](assets/chapter2/App.js)

Komplettes Projekt: [StepCounter.zip](assets/chapter2/StepCounter.zip)

Expo Snack: [snack.expo.io/H12IdYC5b](https://snack.expo.io/H12IdYC5b)
