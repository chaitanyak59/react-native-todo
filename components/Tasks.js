import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function Tasks(props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square} />
                <Text style={styles.itemText}>{props.title}</Text>
            </View>
            <View style={styles.circular} />

        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF666',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 12,
        height: 12, 
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#55BCF666'
    },
});
