import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
	const [contador, setContador] = useState(0);

	function adicionarMaisUm(){
		setContador(contador + 1)
	}

	return (
		<View style={styles.containerALPHA}>
        <Text style={{ fontSize: 35, padding: 40, alignSelf: 'center' }}>RESULTADO: {contador} </Text>
<span></span>
        <View style={styles.container1}>
			<TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text>1</Text>
			</TouchableOpacity>
            
            <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text>2</Text>
			</TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text>3</Text>
			</TouchableOpacity>
        </View>
<span></span>
        <View style={styles.container2}>
            <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text>4</Text>
			</TouchableOpacity>
            
            <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text>5</Text>
			</TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text>6</Text>
			</TouchableOpacity>
		</View>
<span></span>
        <View style={styles.container3}>
            <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text>7</Text>
			</TouchableOpacity>
            
            <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text>8</Text>
			</TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text>9</Text>
			</TouchableOpacity>
		</View>
        </View>
	);
}

const styles = StyleSheet.create({
    containerALPHA: {
        fontSize: 100,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    container1: {
        flexDirection: 'row'
    },

    container2: {
        flexDirection: 'row'
    },

    container3: {
        flexDirection: 'row'
    },

	botao:{
		backgroundColor: '#ffaaff',
        fontSize: 50,
		marginHorizontal: 10,
		padding: 20,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
        
	}
});