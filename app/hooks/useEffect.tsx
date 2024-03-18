import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export function UseEffectHookScreen() {
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(1);

   
    useEffect(() => {
        handleGetPosts()
        console.log('render');
    },[count])
    
    const handleGetPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId='+count);
        const data = await response.json();
        if (data) {
            setPosts(data)
        }
    }
    const Item = ({ title, index }: any) => (
        <Text
            key={index}
            style={{
                marginTop: 20
            }}>{title} </Text>
    );

    const renderItem = ({ item, index }: any) => (
        <Item title={item.title} key={index} />
    );
    return (
        <View style={styles.body}>

            {posts ? (
                <FlatList
                    data={posts}
                    renderItem={renderItem}
                />
            ) : <ActivityIndicator />
            }

            <TouchableOpacity onPress={()=> setCount(prev => prev + 1)} style={{padding : 20}}>
                <Text>Set Count : {count}</Text>
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