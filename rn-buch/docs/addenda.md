---
id: addenda
title: Ergänzungen
sidebar_label: Ergänzungen
---

## Flexbox Layout

Um Elemente entlang der Hauptachse mit `justifyContent` mit gleichmäßigem Abstand auszurichten steht nun auch `space-evenly` zur Verfügung:

```
<View style={{flex: 1, justifyContent: 'space-evenly', aligItems: 'center'}}>
...
</View>
```

Bei `space-evenly` der Abstand zwischen den einzelnen Elementen und auch zum Displayrand gleich, wohingegen letzterer bei `space-around` anders ausfallen kann.

## react-navigation

Anfang Februar 2018, also nach Erscheinung des Buchs, hat react-navigation den Betastatus verlassen und die Version 1.0 erreicht: <https://reactnavigation.org/blog/2018/02/06/react-navigation-1.0.html>