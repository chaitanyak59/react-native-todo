import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function NewTask(props) {
    const [newTask, setNewTask] = useState('');
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.textInputWrapper}>
            <TextInput style={styles.textInput} placeholder='Create Task' value={newTask} onChangeText={setNewTask}></TextInput>
            <TouchableOpacity onPress={() => {
                if (!newTask.trim()) {
                    return;
                }
                props.onTaskUpdated(newTask);
                setNewTask('');
                Keyboard.dismiss();
            }}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addIcon} onTa>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    textInputWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textInput: {
        paddingVertical: 15,
        width: 250,
        paddingHorizontal: 15,
        borderRadius: 60,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#C0C0C0',
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        borderWidth: 1,
        borderColor: '#55BCF666'
    },
    addIcon: {},
});
