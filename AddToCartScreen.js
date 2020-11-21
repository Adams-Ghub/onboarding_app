import React, { Component } from 'react';
import {Text,View, StyleSheet,Image, TouchableOpacity} from 'react-native';


export default class AddToCartScreen extends Component{
        constructor(props){
            super(props)
            this.state={}
        }

        render(){
            return(
                <View style={styles.container}>
                        <View style={styles.pageTitleInfoContainer}>
                            <Text style={styles.heading}>Add To Cart</Text>
                            <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                            </Text>
                        </View>

                        <View style={styles.imageContainer}>
                            <Image style={styles.image}source={require('./assets/addToCart.png')}></Image>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.paginationTextContainer}>
                            <Text style={styles.paginationText}>Previous</Text>
                            <View style={styles.paginationIndicatorContainer}>
                                <View style={styles.paginationIndicator}></View>
                                <View style={[styles.paginationIndicator,styles.activePaginationIndicator]}></View>
                                <View style={styles.paginationIndicator}></View>
                            </View>
                            <Text style={styles.paginationText}>Skip</Text>
                            
                        </View>
                </View>
            )
        }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        marginVertical:35,
    },
    pageTitleInfoContainer:{
        flexDirection:'column',
        marginTop:40,
        
    },
    heading:{
        fontFamily:'open sans',
        fontSize:27,
        textTransform:'uppercase',
        fontWeight:'bold',
        marginBottom:10
    },
    imageContainer:{
        
        alignItems:'center',
        
    },
    image:{
        width:300,
        height:300,
        marginVertical:20,
        paddingVertical:30,
    },
    button:{
        backgroundColor:'#776fc3',
        height:60,
        width:180,
        borderRadius:50,
        
    },
    buttonText:{
        textAlign:'center',
        fontSize:20,
        color:'white',
        marginVertical:15,
        fontWeight:'700'
    },
    buttonContainer:{
        flex:1,
        alignItems:'center',
        marginVertical:25,
        
    },
    paragraph:{
            color:'#707070',
            fontSize:18,
            textAlign:'left',
    },
    paginationText:{
        fontSize:16,
        color:'#bbbbbb'

    },
    paginationTextContainer:{
        flexDirection:'row',
        justifyContent:'flex-start',
        marginVertical:100
    },
    paginationIndicatorContainer:{
        flexDirection:'row',
        marginVertical:10,
        justifyContent:"space-evenly",
        marginLeft:105,
        marginRight:125
    },
    paginationIndicator:{
        width:8,
        height:8,
        backgroundColor:'#aaaaaa',
        borderRadius:4,
        marginHorizontal:3
    },
    activePaginationIndicator:{
        width:16,
        backgroundColor:'#776fc3'
    },
   
})