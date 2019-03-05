import React from 'react';
import { TextInput } from 'react-native';

export default class MyTextInput extends React.Component {
  render() {
    const {
      style,
      theRef,
      placeholder,
      returnKeyType,
      onSubmitEditing
    } = this.props;
    return (
      <TextInput
        style={style}
        ref={theRef}
        placeholder={placeholder}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
      />
    );
  }
}
