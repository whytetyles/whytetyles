import { StyleSheet } from "react-native"



const styles = StyleSheet.create({
    image:{
        width:'100%',
        aspectRatio:16/9,
        resizeMode: 'cover'
    },
    title:{
        fontSize:24,
        fontWeight: "bold",

    },
    match:{
        color:'green',
        fontWeight: 'bold',
        marginRight: 10,
    },
    year:{
        color: '#757575',
        marginRight: 10,
    },
    ageContainer:{
        backgroundColor: '#e6e229',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
        paddingHorizontal:3,
        marginRight: 10,
    },
    age:{
        color:'black',
        fontWeight:'bold',
    },
    playButton:{
        backgroundColor: '#e6e229',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
        paddingHorizontal:3,
        marginTop:5,
    },
    playButtonText:{
        color:'black',
        fontSize:16,
        fontWeight:'bold'
    },

    downloadButton:{
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
        paddingHorizontal:3,
        marginTop:5,
    },
    
    downloadButtonText:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    }
})


export default styles;