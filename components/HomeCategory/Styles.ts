import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container :{
        flex: 1, 
        padding: 5,
        marginTop:20,
    },
    image:{
        width:100,
        height:170,
        resizeMode: 'cover',
        borderRadius:5,
        margin:2
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    }
});

export default styles;