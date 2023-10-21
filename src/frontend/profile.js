// src/components/Register.json
import { View, Text, Image , Pressable, TextInput, TouchableOpacity, Button, styles} from 'react-native'
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

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>First Name</Text>

                    <TextInput style={{
                        width: "50%",
                        height: 48,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                    </TextInput>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Last Name</Text>

                    <TextInput style={{
                        width: "50%",
                        height: 48,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                    </TextInput>
                </View>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Age</Text>

                    <TextInput style={{
                        width: "50%",
                        height: 48,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                    </TextInput>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Native Language</Text>

                    <TextInput style={{
                        width: "50%",
                        height: 48,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                    </TextInput>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>What Language want to learn</Text>

                    <TextInput style={{
                        width: "50%",
                        height: 48,
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                    </TextInput>
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
        
    )
}

export default Profile