import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
const RadioButton = props => {
  const {
    value,
    defaultChecked,
    selected,
    onPress,
    outerColor = '#000',
    innerColor = 'green',
    style,
    disabled = false,
  } = props;
  const handlePress = () => {
    if (onPress) {
      onPress(true, value);
    }
  };
  return (
    <TouchableOpacity onPress={handlePress} disabled={disabled}>
      <View
        style={[
          {
            height: 20,
            width: 20,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: outerColor,
            alignItems: 'center',
            justifyContent: 'center',
            margin:2
          },
          style,
        ]}>
         {selected && <View style={{height: 10,
            width: 10,backgroundColor:"#00BA6B",borderRadius:10}}/>
         }
        {defaultChecked && (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: innerColor,
            }}
          />
        )}
        </View>
    </TouchableOpacity>
  );
};
export default RadioButton;