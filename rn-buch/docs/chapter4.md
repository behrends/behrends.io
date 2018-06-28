---
id: chapter4
title: Kapitel 4 - UI-Komponenten verwenden
sidebar_label: Kapitel 4 - UI-Komponenten
---

### Korrekturen

In Beispiel 4-3 auf Seite 65 und in Beispiel 4-4 auf Seite 68 muss der Prop
`keyExtractor` der `FlatList`-Komponente folgendermaßen geändert werden:

```
keyExtractor={item => item.date.toString()}
```

### Code

TextInput: [App.js](assets/chapter4/TextInput/App.js)  

FlatList: [App.js](assets/chapter4/FlatList/App.js)  

SectionList: [App.js](assets/chapter4/SectionList/App.js)  

TouchableItem: [App.js](assets/chapter4/TouchableItem/App.js)  

Komponenten am Ende des Kapitels: [App.js](assets/chapter4/App.js) und [JournalItems.js](assets/chapter4/JournalItems.js)

