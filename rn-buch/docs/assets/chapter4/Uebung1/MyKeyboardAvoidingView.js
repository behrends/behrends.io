import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

export default class MyKeyboardAvoidingView extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        {this.props.children}
      </KeyboardAvoidingView>
    );
  }
}
