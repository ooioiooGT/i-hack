import React from "react";
import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native';

const Home = ({ navigation }) => {
    
    return (
        <View style={{ flex: 1, marginHorizontal: 22 }}>
            <View style={{marginVertical: 40}}>
                <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginVertical: 12,
                    color: 'black'
                }}>
                    Hello, placeholder
                </Text>
            </View>

            <View style={{marginVertical: 22}}>
                  <Text style={{
                    fontSize: 22,
                    color: 'black'
                    }}>
                    Lessons
                  </Text>
            </View>
            <View style={{
                width: "100%",
                height: 48,
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 1
                }}>
                <Button title="Practice" onPress={() => navigation.navigate("lessons")}/>
            </View>
                  
            <View style={{marginVertical: 22}}>
                <Text style={{
                    fontSize: 22,
                    color: 'black'
                    }}>
                    Assessment
                </Text>
            </View>

            <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 1
                    }}>
                <Button 
                    title='Take Assessment' 
                    onPress={() => navigation.navigate("assessment")}>
                    
                </Button>
            </View>
        </View>
    );
};

export default Home