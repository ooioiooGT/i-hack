// src/components/Register.json
import { View, Text, Image , Pressable, TextInput, TouchableOpacity, Button, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'

const Profile = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    //const [userID, setUserId] = useState('');
    
    const route = useRoute();
    
    return (
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: 'black'
                    }}>
                         Profile 👋 {route.params.id} 
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>First Name</Text>

                    <TextInput style={styles.input}/>

                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>Last Name</Text>

                    <TextInput style={styles.input}/>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>Age</Text>

                    <TextInput style={styles.input}/>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>Native Language</Text>

                    <TextInput style={styles.input}/>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>What Language want to learn</Text>

                    <TextInput style={styles.input}/>
                </View>

                <View style={{
                    width: "50%",
                    height: 48,
                    borderColor: '#00507A',
                    backgroundColor: '#00507A',
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 1
                }}>
                    {/* Other signup-related components */}
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
                        <Text style={{ color: 'white', fontSize: 20 }}>Assessment</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: 'black' }}>Already have an account ?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Login</Text>
                    </Pressable>
                </View>
            </View>
        
    )}

    const styles = StyleSheet.create({
        container: {
            marginBottom: 12,
        },

        text:{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8,  
        },

        input: {
            width: "50%",
            height: 48,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22,  
        },

      })

export default Profile