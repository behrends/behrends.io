import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TouchableItem from '../components/TouchableItem';

export default class ItemScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate, state } = navigation;
    const { date } = state.params.item;
    const minutes =
      (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    const time = `${date.getHours()}:${minutes}`;
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return {
      headerTitle: `${day}.${month}.${year} ${time}`,
      headerRight: (
        <TouchableItem
          onPress={() =>
            navigation.navigate('Edit', { item: state.params.item })}
        >
          <View>
            <Text style={styles.headerAction}>Bearbeiten</Text>
          </View>
        </TouchableItem>
      )
    };
  };

  render() {
    const item = this.props.navigation.state.params.item;
    const photo = item.photo
      ? <Image
          style={styles.photo}
          source={{ uri: item.photo }}
          resizeMode="cover"
        />
      : null;

    return (
      <ScrollView>
        {photo}
        <Text style={styles.text}>
          {item.text}
        </Text>
      </ScrollView>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  photo: {
    width: width,
    height: width
  },
  text: {
    fontSize: 16,
    padding: 15
  },
  headerAction: {
    padding: 10,
    color: 'deepskyblue'
  }
});
