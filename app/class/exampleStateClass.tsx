import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ExampleProps {
    // Define props interface if needed
}

interface ExampleState {
    day: number;
    month : string ;
}

class Example extends React.Component<ExampleProps, ExampleState> {

    constructor(props: ExampleProps) {
        super(props);
        this.state = {
            day: 0,
            month : 'Jun'
        };
    }

    dayPress = () => {
        this.setState({ day: 100 });
        // => { month : "Jun", day : 100 }
    }

    render() {
        return (
            <View style={styles.body}>

                <Text>
                    Day: {this.state.day}
                </Text>

                <TouchableOpacity
                    onPress={this.dayPress}
                    style={styles.dayButton}>
                    <Text>Set Day +1</Text>
                </TouchableOpacity>
            </View>
        );
    }
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
});

export default Example;
