import React from 'react';
import { View, StyleSheet, Alert} from 'react-native';

const showAlert = (message) => {
    Alert.alert(
        message
    )
}

export default showAlert