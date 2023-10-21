import React, { useState } from "react";
import {TouchableOpacity, Pressable, TextInput, View, Text, Button} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Database from "../backend/database";
import showAlert from "../util/alert";


const Login = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [status, setStatus] = useState(false);
    const navigation = useNavigation();
    const db = new Database();

    const SignIn = async (email,password) => {
        const response = await db.SignIn(email,password);
        console.log(response)
        if (response){
            setStatus(true)
        }else{
            showAlert('Email or password incorrect. Try again.')
        }
    }

    return (
        <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: 'black'
                    }}>
                        Login
                    </Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Email address</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={'black'}
                            keyboardType='email-address'
                            onChangeText={onChangeEmail}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={'black'}
                            onChangeText={onChangePassword}
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
                        onPress={ async () => {
                            await SignIn(email,password)
                            if(status){
                                navigation.navigate("Home")
                            }
                        }}
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
                        <Text style={{ color: 'white', fontSize: 20 }}>Sign In</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: 'black' }}>Don't have an account? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("Create")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: 'primary',
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
    );
};

export default Login