import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity
} from 'react-native';
import image1 from '../media/product/54.jpeg'
export default function Search({props,navigation,route}) {
  
    const data = route.params.otherParam
    console.log('route',data)
        return (
            <ScrollView style={styles.wrapper}>
                <View style={styles.cardStyle}>
                    <View style={styles.imageContainer}>
                        <ScrollView >
                            <Image source={image1} style={styles.productImageStyle} />
                        </ScrollView>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.textMain}>
                                <Text style={styles.textBlack}>{data.name}</Text>
                                <Text style={styles.textHighlight}> / </Text>
                                <Text style={styles.textSmoke}>{data.price}$</Text>
                            </Text>
                        </View>
                        <View style={styles.descContainer}>
                            <Text style={styles.descStyle}>{data.description}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                                <Text style={styles.txtMaterial}>Material: {data.material}</Text>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={styles.txtColor}>Color: {data.color}</Text>
                                    <View style={{ backgroundColor: data.color.toLowerCase(),height: 15, width: 15, borderRadius: 15, marginLeft: 10, borderWidth: 1, borderColor: '#C21C70', marginTop: 3 }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
}

const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20
    },
    cartStyle: {
        width: 25,
        height: 25
    },
    backStyle: {
        width: 25,
        height: 25
    },
    productStyle: {
        width: width / 2,
        height: width / 2
    },
    footer: {
        flex: 6,
        marginTop: 25
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 40
    },
    textMain: {
        paddingLeft: 20,
        marginVertical: 10
    },
    textBlack: {
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#696969'
    },
    textHighlight: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        marginHorizontal: 20,
        paddingBottom: 5
    },
    descContainer: {
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    descStyle: {
        color: '#5F9EA0',
        fontSize: 15,
    },
    linkStyle: {
        color: '#7D59C8'
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5
    },
    mainRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 20
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    }
});