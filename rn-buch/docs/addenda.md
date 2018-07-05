---
id: addenda
title: Ergänzungen
sidebar_label: Ergänzungen
---

## Flexbox Layout

Um Elemente entlang der Hauptachse mit `justifyContent` auszurichten, steht nun auch `space-evenly` zur Verfügung:

```
<View style={{flex: 1, justifyContent: 'space-evenly', aligItems: 'center'}}>
...
</View>
```

Bei `space-evenly` ist der Abstand zwischen den einzelnen Elementen und auch zum Displayrand gleich, wohingegen letzterer bei `space-around` kleiner ausfallen kann.

## react-navigation

Im Mai 2018, also nach Erscheinung des Buchs, wurde Version 2 der Navigationsbibliothek `react-navigation` veröffentlich: <https://reactnavigation.org/blog/2018/05/07/react-navigation-2.0.html>. 

Die im Buch beschriebene Erzeugung von Navigatoren hat sich deshalb verändert. Entsprechende Korrekturen sind für [Kapitel 8](chapter8.md) und [Kapitel 9](chapter9.md) nötig. 
