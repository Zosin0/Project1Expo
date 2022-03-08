import React from "react";
import {StyleSheet, TouchableOpacity} from 'react-native';


import Texto from "../../../components/Texto";


export default function Detalhes ({titulo, formas, desc, botao, navigation}){

return <>

            <TouchableOpacity style={estilos.botao} onPress={()=>{navigation.navigate('Carrinho')}}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
            </TouchableOpacity>
            
            <Texto style={estilos.titulo}> {titulo}</Texto>
            <Texto style={estilos.desc}> {desc}</Texto>
            <Texto style={estilos.formas}> {formas}</Texto>

        </>
}

const estilos = StyleSheet.create({
    titulo: {
        color:"#add8e6",
        fontWeight: "bold",
        fontSize:25,
        lineHeight:42
    },
    formas: {
        color:"#000",
        fontWeight: "bold",
        fontSize:16,
        lineHeight:26,
    },
    desc:{
        color:"black",
        fontSize:16,
        lineHeight:26,
        marginLeft:5,
    },
    
    botao:{
        marginTop:1,
        backgroundColor: "#add8e6",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao:{
        textAlign: "center",
        color:"#fff",
        fontSize:18,
        lineHeight: 28,
        fontWeight:"bold"
    }
})