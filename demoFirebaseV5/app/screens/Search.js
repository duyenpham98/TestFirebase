import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, FlatList, View, Image, Dimensions, TextInput } from 'react-native';
import firebase, { Firebase } from 'react-native-firebase';
import image1 from '../media/product/54.jpeg'
export default function Search({props,navigation}) {
    let h = []
    const [search, setSearch] = useState("")
    const [arrayProduct,SetArrayProduct] = useState([])
    
    function searchProduct(){
        let h = []
        firebase.database().ref('Product/').orderByChild('name').orderBy(search).on('value', snapshot => {
            let items = snapshot.val()
            
            let d = Object.values(items).map(i => {
                h = h.concat(i)
            })
            SetArrayProduct(h)
    })
    }
    function goToDetail(item){
        navigation.navigate('Details',{
            otherParam: item,
        });
    }
        return (
            <View style={styles.wrapper}> 
            <View style={styles.wrapper1}>
                <TextInput
                    style={styles.textInput}
                    placeholder="What do you want to buy?"
                    underlineColorAndroid="transparent"
                    value={search}
                    onChangeText={text => setSearch(text)}
                />
                <View style={styles.wrapper2}>
                <TouchableOpacity style={styles.button} onPress={searchProduct}>
                    <Text style={styles.txtShowDetail}>Search</Text>
                </TouchableOpacity>
                </View>
                <View style={{marginTop: 20}}>
                <FlatList
                    data={arrayProduct}
                    renderItem={({ item }) =>
                        <View style={styles.product}>
                            <Image source={image1} style={styles.productImage} />
                            <View style={styles.mainRight}>
                                <Text style={styles.txtName}>{item.name}</Text>
                                <Text style={styles.txtPrice}>{item.gia}$</Text>
                                <Text style={styles.txtMaterial}>Material {item.color}</Text>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={styles.txtColor}>Color {item.price}</Text>
                                    <View
                                        style={{
                                            height: 15,
                                            width: 15,
                                            backgroundColor: 'white',
                                            borderRadius: 15,
                                            marginLeft: 10
                                        }}
                                    />
                                </View>
                                <TouchableOpacity style={styles.showDetailContainer} onPress={() => goToDetail(item)}>
                                    <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    keyExtractor={({ id }, index) => id}
                />
                </View>
            </View>
               
            </View>
        );
}
const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#F6F6F6',
        flex: 1
    },
    wrapper1: {
        backgroundColor: '#F6F6F6',
        flex: 1,
    },
    wrapper2: {
        backgroundColor: '#F6F6F6',
        flex: 1,
        alignItems: 'center'
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    txtName: {
        paddingLeft: 20,
        color: '#acabac',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#DDC488',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtColor: {
        paddingLeft: 20,
        color: '#008080',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        paddingLeft: 20,
        color: '#008080',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#b97b95',
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 36
    },
    textInput: {
        margin: 10,
        height: 30,
        borderRadius: 10
    },
    button:{
        alignItems: 'center',
        width: 80, 
        height: 30
    }
});