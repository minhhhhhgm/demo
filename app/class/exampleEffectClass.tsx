import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ExampleProps {
    // Define props interface if needed
}

interface ExampleState {
    count: number;
    posts : [] ;
}
class UseEffectHookScreenClass extends Component<ExampleProps, ExampleState> {
    constructor(props : ExampleProps) {
        super(props);
        this.state = {
            posts: [],
            count: 1
        };
    }

    componentDidMount() {
        this.handleGetPosts();
        console.log('render');
    }

    componentDidUpdate(prevProps: any, prevState: { count: number; }) {
        if (this.state.count !== prevState.count) {
            this.handleGetPosts();
        }
    }

    handleGetPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + this.state.count);
        const data = await response.json();
        if (data) {
            this.setState({ posts: data });
        }
    }

    renderItem = ({ item, index }: any ) => (
        <Text
            key={index}
            style={{
                marginTop: 20
            }}>{item.title} </Text>
    );

    render() {
        return (
            <View style={styles.body}>
                {this.state.posts.length > 0 ? (
                    <FlatList
                        data={this.state.posts}
                        renderItem={this.renderItem}
                    />
                ) : <ActivityIndicator />
                }

                <TouchableOpacity onPress={() => this.setState(prevState => ({ count: prevState.count + 1 }))} style={{ padding: 20 }}>
                    <Text>Set Count: {this.state.count}</Text>
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
})

export default UseEffectHookScreenClass;
