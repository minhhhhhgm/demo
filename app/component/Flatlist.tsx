import React, { useState } from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    StyleProp,
    ViewStyle,
    FlatList,
    Text,
    RefreshControl
} from 'react-native';



const FlatListComponent = () => {
    const data : any = []
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
      };
    return (
        <FlatList
        refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        data={data}
        ListEmptyComponent={()=>{
            return(
                <Text>No Data</Text>
            )
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Text>
            {index}.{item.title}
          </Text>
        )}
      />
    )
};
