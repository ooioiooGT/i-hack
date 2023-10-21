// src/components/Register.json
import { View, Text, Image , Pressable, TextInput, TouchableOpacity, Button, StyleSheet} from 'react-native'
import React, { useState } from 'react'

const Profile = ({ navigation }) => {
    //const [isPasswordShown, setIsPasswordShown] = useState(false);
    
    return (
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: 'black'
                    }}>
                        Profile 👋
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

                <View style={styles.input}>
                    {/* Other signup-related components */}
                    <Button title="Sign Up" onPress={() => navigation.navigate("main")} />
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: 'black' }}>Already have an account ?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("login")}
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