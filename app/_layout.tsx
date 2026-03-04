import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
    const [resultado, setResultado] = useState<string>('0');
    const [primeiroResultado, segundoResultado] = useState(null);

    const digitarNumero = (num: string) => {
        if (resultado == '0') {
            setResultado(num);
        } else {
            setResultado(resultado + num);
        }
    };

    function coletarPrimeiroResultado() {
        const numero = parseInt(resultado);
        setPrimeiroNumero(numero);
    };

    function coletarSegundoValor(){
        const numero = parseInt(resultado);
        setSegundoNumero(numero);
    };

    function calcular() {
        if (operacao === "+") {
            const resultadoFinal = primeiroResultado + segundoResultado;
            const setResultadoFinal(resultadoFinal.toString());
        }

        if (operacao === "-") {
            const resultadoFinal = primeiroResultado - segundoResultado;
            const setResultadoFinal(resultadoFinal.toString());
        }

        if (operacao === "/") {
            const resultadoFinal = primeiroResultado / segundoResultado;
            const setResultadoFinal(resultadoFinal.toString());
        }

        if (operacao === "*") {
            const resultadoFinal = primeiroResultado * segundoResultado;
            const setResultadoFinal(resultadoFinal.toString());
        }

    };

    function subtracao() {
        const numero1 = parseInt(primeiroResultado);
        const numero2 = parseInt(segundoResultado);

        const resultadoFinal = numero1 - numero2;

        setResultado(resultadoFinal);
    }

    function divisao() {
        const numero1 = parseInt(primeiroResultado);
        const numero2 = parseInt(segundoResultado);

        const resultadoFinal = numero1 / numero2;

        setResultado(resultadoFinal);
    };

    function multiplicao() {
        const numero1 = parseInt(primeiroResultado);
        const numero2 = parseInt(segundoResultado);

        const resultadoFinal = numero1 * numero2;

        setResultado(resultadoFinal);
    };

    const limpar = () => {
        setResultado('0');
    };

    return (
        <View style={styles.containerALPHA}>
            <Text style={{ fontSize: 35, padding: 40, alignSelf: 'center' }}>{resultado}</Text>
            <span></span>
            <View style={styles.container1}>
                <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('1')}>
                    <Text style={styles.botao}>1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('2')}>
                    <Text style={styles.botao}>2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('3')}>
                    <Text style={styles.botao}>3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={limpar}>
                    <Text style={styles.botao}>C</Text>
                </TouchableOpacity>
            </View>
            <span></span>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('4')}>
                    <Text style={styles.botao}>4</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('5')}>
                    <Text style={styles.botao}>5</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => digitarNumero('6')}>
                    <Text style={styles.botao}>6</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={coletarPrimeiroResultado}>
                    <Text style={styles.botao}>+</Text>
                </TouchableOpacity>

                <span></span>

            </View>
            <TouchableOpacity style={styles.botao} onPress={coletarSegundoValor}>
                <Text style={styles.botao}>=</Text>
            </TouchableOpacity>

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

    botao: {
        backgroundColor: '#ffaaff',
        fontSize: 50,
        marginHorizontal: 10,
        padding: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',

    }
});