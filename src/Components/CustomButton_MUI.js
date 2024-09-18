import React from 'react';
import {ActivityIndicator, Button} from 'react-native-paper';

export default function CustomButton_MUI({
  text='Book My Seat',
  variant,
  color,
  onClick,
  textColor,
  disabled,
  loading
}) {

  return (
    <Button
      mode={variant}
      uppercase={false}
      buttonColor={color}
      textColor={textColor}
      style={
        variant === 'outlined'
          ? {borderColor: 'green', borderRadius: 100}
          : {borderRadius: 100}
      }
      contentStyle={{
        width: '100%',
        height: 54,
        maxHeight: 54,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
      }}
      disabled={disabled}
      labelStyle={{color: textColor, fontSize: 18}}
      onPress={onClick}>
      {!loading ? (
        text
      ) : (
        <ActivityIndicator
          color="#ffffff"
          size="small"
          style={{marginTop: -2}}
        />
      )}
    </Button>
  );
}
