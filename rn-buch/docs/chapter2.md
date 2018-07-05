---
id: chapter2
title: Kapitel 2 - Erste Schritte mit React Native
sidebar_label: Kapitel 2 - Erste Schritte
---

### Korrekturen

Node.js muss mindestens in Version 8 installiert werden.

Aufgrund strengerer Richtlinien von Apple für iOS-Apps kann man in der Expo-App auf dem iPhone die App seit Ende März 2018 nicht mehr per QR-Code mit der Kamera scannen und laden. Wenn der React Native Packager in der Konsole gestartet wurde, kann statt dessen eine URL per SMS oder E-Mail verschickt werden. Durch klicken dieser URL in der SMS bzw. E-Mail auf dem iPhone wird die Expo-App geöffnet, sodass diese den Code für die App laden und ausführen kann. Android-Geräte sind von dieser Änderung nicht betroffen.

Wie eine App auf dem iPhone mit Expo geladen und ausgeführt werden kann, zeigt dieses [Video](https://youtu.be/w76_znaypW0).

### Code

Für die App `StepCounter` enthält die Datei `App.js` den Code der einzigen Komponente. Das komplette Projekt steht als gezipptes Archiv zum Download bereit. Für dessen Verwendung muss im entpackten Projektordner `npm install` oder `yarn ausgeführt` werden. Zusätzlich kann die App als Expo Snack im Browser getestet werden.

Code der Hauptkomponente: [App.js](assets/chapter2/App.js)

Komplettes Projekt: [StepCounter.zip](assets/chapter2/StepCounter.zip)

Expo Snack: [snack.expo.io/H12IdYC5b](https://snack.expo.io/H12IdYC5b)
