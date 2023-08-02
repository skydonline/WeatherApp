import React from 'react';
import {Text, View} from 'react-native';

export default function RowText(props) {
    const {
        containerStyles, 
        message1, 
        message2, 
        message1Styles, 
        message2Styles
    } = props

    return (
        <View style={containerStyles}>
          <Text style={message1Styles}>{message1}</Text>
          <Text style={message2Styles}>{message2}</Text>
        </View>
    )
}