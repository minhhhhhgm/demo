import React, { useMemo, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Jane' },
    { id: 5, name: 'Sam' },
    { id: 6, name: 'Sam' },
    { id: 7, name: 'Sam' },
];

function UseMemoScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',paddingTop:50 }}>
            <UserList users={data} filter={'Sam'} />
        </View>
    );
}




const UserList = ({ users, filter }: any) => {
    const filteredUsers = useMemo(
        () => users.filter((user: any) => user.name.includes(filter)),
        [users, filter]
    );

    const renderItem = ({ item }: any) => (
        <Text key={item.id}>{item.name}</Text>
    );

    return (
        <View>
            <FlatList
                data={filteredUsers}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default UseMemoScreen;
