import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export function UseStateHookScreen() {

    const [day, setDay] = useState(0);


    const dayPress = () => {
        setDay(prev => prev + 1)
    }
    return (
        <View style={styles.body}>

            <Text>
                Day : {day}
            </Text>
            <TouchableOpacity
                onPress={dayPress}
                style={styles.dayButton}>
                <Text>Set Day +1</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    dayButton: {
        padding: 20,
        backgroundColor: 'pink'
    }
})