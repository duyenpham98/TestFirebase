import React, { useState, useEffect } from 'react';
import {
    View, TouchableOpacity,
    Text, StyleSheet, FlatList,
    Image
} from 'react-native';
import { responsiveWidth, responsiveHeight } from '@utils/DimenUtils';
import firebase, { Firebase } from 'react-native-firebase';
import image1 from '../media/product/54.jpeg'
export default function Home({props,navigation}) {
    const [limitArray, setLimitArray] = useState(10)
    const [arrayProduct,SetArrayProduct] = useState([])
    const [refeshData, setRefeshData] = useState(false)
    let messagesRef = null
    useEffect(() => {
    loadMessages()
  
    }, [])
    function loadMessages(){
        messagesRef = firebase.database().ref('Product');
        messagesRef.off();
        let h = [];
        const onReceive = (data) => {
            const message = data.val();
            h = h.concat(message)
            SetArrayProduct(h)
        };
        messagesRef.limitToLast(limitArray).on('child_added', onReceive);
    }
    function Reload(){
        let limit = limitArray + 10;
        messagesRef = firebase.database().ref('Product');
        messagesRef.off();
        let h = [];
        const onReceive = (data) => {
            const message = data.val();
            h = h.concat(message)
            SetArrayProduct(h)
        };
        messagesRef.limitToLast(limit).on('child_added', onReceive);
        setRefeshData(true)
    }
    function goToDetail(item){
        navigation.navigate('Details',{
            otherParam: item,
        });
    }
    return (
        <View style={styles.header}>
        <View style={styles.wrapper}>
                <FlatList
                    data={arrayProduct}
                    renderItem={({ item }) =>
                        <View style={styles.productContainer}>
                            <Image style={styles.productImage} source={image1} />
                            <View style={styles.productInfo}>
                                <Text style={styles.txtName}>{item.name}</Text>
                                <View style={styles.lastRowInfo}>
                                    <Text style={styles.txtPrice}>{item.gia}$</Text>
                                    <TouchableOpacity style={{ marginRight: 10 }} onPress={() => goToDetail(item)}>
                                        <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.txtMaterial}>Material:{item.color}</Text>
                                <View style={styles.lastRowInfo}>
                                    <Text style={styles.txtColor}>Color:{item.price}</Text>
                                    <View style={{ backgroundColor: item.price.toLowerCase() ,height: 16, width: 16, borderRadius: 8, marginRight: 35 }} />
                                </View>
                            </View>
                        </View>
                    }
                    keyExtractor={({ id }, index) => id}
                    refreshing={refeshData}
                />
               
            </View>
            <TouchableOpacity style={{ marginRight: 10 , marginTop: 12 , alignItems: 'center', }} onPress={Reload}>
                    <Text style={styles.txtShowDetail}>LOAD MORE</Text>
                </TouchableOpacity>
            </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: 1,
        padding: 5
    },
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 6
    },
    backStyle: {
        width: 30,
        height: 30
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 2
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 20
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65',
    },
    txtMaterial: {
        fontFamily: 'Avenir'
    },
    txtColor: {
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 11
    },
});