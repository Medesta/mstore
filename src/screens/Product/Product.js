import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import ViewMoreText from 'react-native-view-more-text';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import User from '../../helper/User';
import { getPrdouctById, postToCartIncreament } from '../../network/network';
import { HP, WP } from '../../utils/contants';
import Cart from '../Cart/Cart';


class Product extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.navigation.getParam('id'), "id reciving point");
        this.state = {
            loader:true,
            productId: this.props.navigation.getParam('id'),
            product: {},
            sizes: [
                {
                    mark: 'S',
                    available: false
                },
                {
                    mark: 'M',
                    available: false
                },
                {
                    mark: 'L',
                    available: false
                },
                {
                    mark: 'XXL',
                    available: false
                }
            ],
            currentSelected: 0,
        }
    }
    sizeMatch = () => {
        const temp = this.state;
        if (this.state.product.size.includes('Small')) {
            temp.sizes[0].available = true;
        }
        if (this.state.product.size.includes('Medium')) {
            temp.sizes[1].available = true;
        }
        if (this.state.product.size.includes('Large')) {
            temp.sizes[2].available = true;
        }
        if (this.state.product.size.includes('Extra Large')) {
            temp.sizes[3].available = true;
        }
        this.setState({ sizes: temp.sizes })
    }
    sizeFunc=()=>{
        switch (this.state.currentSelected) {
            case 0:
                return 'Small';
                break;
            case 1:
                return 'Medium';
                break;
            case 2:
                return 'Large';
                break;
            case 3:
                return 'Extra Large';
                break;
            default:
                return 'Medium';
        }
    }
    lengthCalc(arr) {
        if (arr) {
            return arr.length;
        }
        return 0;
    }
    
    Cart() {
        this.setState({loader:true})
        const id = this.state.productId;
        let size = this.sizeFunc();

        let data = {
            "product_id": id,
            "quantity": '1',
            "size": size
        };
        console.log(data);
        postToCartIncreament(data,User.getToken())
        .then((response)=>{
            console.log(response);
          this.setState({loader:false})
            // this.props.navigation.navigate('Cart')
        })
        .catch((error)=>{
            console.log(error.response);
            alert(error.response.data.payload.message);

        })
        .finally(()=>{
          this.setState({loader:false})

        })


    }
    componentDidMount() {
        getPrdouctById(this.state.productId, User.getToken())
            .then((response) => {
                console.log(response);
                this.setState({ product: response.data.product ,
                loader:false });
                this.sizeMatch();

            })
            .catch((error)=>{
                console.log(error.response, 'error fetching product');
            alert("No product found");
            this.setState({loader:false})

            })
            
    }

    sizeToggler = (index) => {
        const temp = this.state;
        temp.currentSelected = index;
        this.setState({ currentSelected: temp.currentSelected });

    }

    render() {
        return [
            <ScrollView style={styles.container} >
 {this.state.loader && <Loader />}
                <View style={styles.productPage}>
                    {this.state.product.imageUrl ?
                        <View style={styles.productPageImage}>
                            <View style={styles.productImage}>
                                {<Swiper style={styles.wrapper} showsButtons={false}
                                    autoplay={false}
                                    loop={true}
                                    showsPagination={true}
                                    paginationStyle={{
                                        right: WP(60)
                                    }}

                                    dot={
                                        <View style={{
                                            backgroundColor: '#fff',
                                            width: 8,
                                            height: 8,
                                            borderRadius: 4,
                                            marginLeft: 6,
                                            marginRight: 6,



                                        }} />
                                    }
                                    activeDot={
                                        <View style={{
                                            backgroundColor: '#667eea',
                                            width: 8,
                                            height: 8,
                                            borderRadius: 4,
                                            marginLeft: 6,
                                            marginRight: 6,
                                        }} />
                                    }

                                >



                                    {(this.state.product.imageUrl).map((image, index) => {
                                        return (
                                            <View key={index} style={styles.slide}>
                                                <TouchableOpacity activeOpacity={0.3} style={styles.productPressOn}>
                                                    <Image source={{ uri: image }}
                                                        style={styles.productImageProp}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })

                                    }


                                </Swiper>
                                }

                            </View>
                        </View>
                        : null}

                    <View style={styles.namePrice}>
                        <Text style={styles.productName}>
                            {this.state.product.name}
                        </Text>
                        <View style={styles.Pricing}>
                            <Text style={styles.productPrice}>
                                {this.state.product.price}
                            </Text>
                            {this.state.product.oldPrice ?
                                <Text style={styles.productOldPrice}>
                                    {this.state.product.oldPrice}
                                </Text>
                                : null}
                        </View>
                    </View>
                    <View style={styles.ratingReview}>
                        <View style={styles.rating}>
                            <Text style={styles.star}>{this.state.product.rating}</Text>
                            <Text style={styles.ratingRemarks}>Very Good</Text>

                        </View>
                        {this.state.product.reviews ?
                            <Text style={styles.reviewQuantity}>{this.lengthCalc(this.state.product.reviews)} Reviews</Text>
                            : null}

                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsHeading}>
                            Description
                </Text>
                        {this.state.product.description ?
                            <ViewMoreText
                                numberOfLines={2}
                                renderViewMore={this.renderViewMore}
                                renderViewLess={this.renderViewLess}
                                textStyle={styles.detailsDescription}
                            >
                                <Text numberOfLines={this.state.more ? 3 : 1} style={styles.detailsDescription}>
                                    {this.state.product.description}
                                </Text>
                            </ViewMoreText>
                            :
                            null}

                    </View>
                    <View style={styles.sizeHeader}>
                        <Text style={styles.sizeHeading}>
                            Select Size & Color
                    </Text>

                    </View>
                    <View style={styles.sizeSelection}>
                        {(this.state.sizes) ?
                            (this.state.sizes).map((size, index) => {
                                return (
                                    <TouchableOpacity key={index} style={(size.available) ? [styles.sizeAvailable, this.state.currentSelected == index && { backgroundColor: "#667eea" }] : [styles.nonAvailable]} disabled={(size.available) ? false : true}
                                        onPress={() => this.sizeToggler(index)}
                                    >
                                        <Text style={[styles.activeMark, this.state.currentSelected == index && { color: "#fff" }]}>{size.mark}</Text>
                                    </TouchableOpacity>
                                )
                            }) :
                            null
                        }

                    </View>

                </View>
            </ScrollView>,
            <View style={styles.productButton}>
                <TouchableOpacity style={styles.addToCart} onPress={() => {
                    this.Cart();
                    
                }}>
                    <Text style={styles.addToCartText}>add to cart</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.buyNow} >
                    <Text style={styles.buyNowText}>buy now</Text>
                </TouchableOpacity>
            </View>



        ];
    }
}

export default Product;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    productPageImage: {
        paddingHorizontal: WP(5),
        height: HP(35),
        width: WP(100),
        paddingVertical: 20,
    },
    productImage: {
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 10,
    },
    productPressOn: {
        width: '100%',
        height: '100%',
    },
    slide: {
        width: "100%",
        height: "100%"

    },
    productImageProp: {
        width: "100%",
        height: "100%"
    },
    namePrice: {
        marginVertical: 20,
        paddingHorizontal: WP(5),

    },
    productPrice: {
        color: "#667eea",
        fontSize: 25,
    },
    productName: {
        color: "#000",
        fontSize: 28,
        marginBottom: 10,

    },
    productOldPrice: {
        color: "#000",
        fontSize: 18,
        marginLeft: 20,
        textDecorationLine: "line-through"
    },
    Pricing: {
        flexDirection: "row",
        alignItems: 'center'

    },
    ratingReview: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#d0d0d0",
        borderTopWidth: 1,
        borderTopColor: "#d0d0d0",
        paddingHorizontal: WP(5),
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    rating: {
        flexDirection: "row",
        alignItems: 'center'
    },
    star: {
        fontSize: 25,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        color: "#fff",
        backgroundColor: "#667eea"
    },
    ratingRemarks: {
        fontSize: 25,
        marginLeft: 20
    },
    reviewQuantity: {
        color: '#667eea',
        fontSize: 22,
        fontWeight: "bold",
    },
    details: {
        paddingHorizontal: WP(5),
        paddingVertical: 10

    },
    detailsHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    detailsDescription: {
        fontSize: 18
    },
    detailsDescriptionMore: {
        fontSize: 20,
        color: "#667eea",
        fontWeight: "bold"
    },
    detailsDescriptionMoreBtn: {
        paddingRight: 10,
        paddingBottom: 10,
        width: 70,
        alignItems: "center"
    },
    sizeHeader: {
        paddingVertical: 20,
        justifyContent: "center",
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#d0d0d0",
        borderTopWidth: 1,
        borderTopColor: "#d0d0d0",
        paddingHorizontal: WP(5),

    },
    sizeHeading: {
        fontSize: 25,
        color: "#000",
        textAlign: "center",
        fontWeight: "bold",
    },
    nonAvailable: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginHorizontal: 10
    },
    sizeAvailable: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        backgroundColor: '#d6d6d6',
        marginHorizontal: 10
    },
    sizeSelection: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 30,
        paddingHorizontal: WP(5),
        marginBottom: HP(10)
    },
    activeMark: {
        fontSize: 22,
        color: '#000'

    },
    productButton: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        backgroundColor: "#fff"

    },
    addToCart: {
        width: WP(50),
        height: HP(8),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d0d0d0'
    },
    addToCartText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000",
        textTransform: "uppercase",
    },
    buyNowText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
        textTransform: "uppercase"

    },
    buyNow: {
        width: WP(50),
        height: HP(8),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#667eea'
    }




});