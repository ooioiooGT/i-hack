// src/components/Register.json
import { View, Text, Pressable, TextInput, TouchableOpacity, Button, StyleSheet} from 'react-native'
import React, { useState } from 'react'
//import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Create = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    
    return (
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={styles.container}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: 'black'
                    }}>
                        Create Account 👋
                    </Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>Email address</Text>

                    <View style={styles.input}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={'black'}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>Password</Text>

                    <View style={styles.input}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={'black'}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={'black'} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={'black'} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
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
                    {/* Other signup-related components */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate("Profile")}
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
                        <Text style={{ color: 'white', fontSize: 20 }}>Register</Text>
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
        
    )
}

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
      width: "100%",
      height: 48,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: 22,  
  },

})

export default Create
