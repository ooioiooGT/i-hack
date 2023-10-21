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
                borderColor: '#00507A',
                backgroundColor: '#00507A',
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 1
                }}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("Assesment")}
                    style={{
                        width: "100%",
                        height: "100%",
                        borderColor: '#00507A',
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}>Practice</Text>
                </TouchableOpacity>
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
                borderColor: '#00507A',
                backgroundColor: '#00507A',
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 1
                }}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("Assesment")}
                    style={{
                        width: "100%",
                        height: "100%",
                        borderColor: '#00507A',
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}>Take Assessment</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home