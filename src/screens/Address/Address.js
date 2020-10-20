import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import Radio from '../../components/Radio/Radio';
import User from '../../helper/User';
import { getAddress, getOrder, postOrderAddress } from '../../network/network';
import { HP, WP } from '../../utils/contants';


class Address extends Component {
    state = {
        loader:true,
        address: [],
        selectedAddress: '',
        orderid:this.props.navigation.getParam('order_id'),
    }
    componentDidMount() {
        this.getDataFromEndpoint();
        this.didFocusListener = this.props.navigation.addListener(
            'didFocus',
            () => {
                if (this.state.address.length) {
                    this.getDataFromEndpoint()
                }
            }
        );

    }
    getDataFromEndpoint = () => {
        getAddress(User.getToken())
            .then((response) => {
                console.log(response);
                this.setState({ address: response.data.addresses ,
                loader:false 
            },  this.selectDefault)

            })
            .catch((error) => {
                console.log(error.response);
            alert(error.response.data.payload.message);

               
            })

    }
    selectDefault = () => {
        if (this.state.address.length > 0) {
            this.setState({ selectedAddress: 0 },()=>        console.log(this.state , "address !!!!!!!!!!!!!!!!!!!!!!!!!!!")
)
        }
    }
orderPublish=()=>{
    this.setState({loader:true});
    if(this.state.selectedAddress != 0 && !this.state.selectedAddress){
    this.setState({loader:false});
    alert('Select address to continue');
    return

    }
    postOrderAddress(this.state.orderid , this.state.address[this.state.selectedAddress].id , User.getToken())
    .then((response)=>{
        console.log(response);
        getOrder(this.state.orderid , User.getToken())
        .then((response)=>{
            console.log(response);
            this.setState({loader:false});
            this.props.navigation.navigate('Confirmation') ;
        })
        .catch((error)=>{
            console.log(error.response);
            alert(error.response.data.payload.message);
            this.setState({loader:false});


        })

    })
    .catch((error)=>{
        console.log(error.response);
        this.setState({loader:false});
        alert(error.response.data.payload.message);



    })
            
}
    render() {
        return [

            <View style={styles.navi} >
                <Text style={styles.subNav}>
                    Address
                    </Text>
            </View>,
            <ScrollView style={styles.container}>
                {this.state.address.length ?
                    (this.state.address).map((obj, index) => {
                        let prop = false;
                        if (index == this.state.selectedAddress) {
                            prop = true;
                        }
                        return (
                            <View key={obj.index} style={styles.addressBox}>
                                <View style={styles.addressHead}>
                                    <Text style={styles.head}>{obj.name}</Text>
                                    <Radio
                                        active={prop}
                                        onPress={() => { this.setState({ selectedAddress: index }) }}
                                    />
                                </View>
                                <Text style={styles.para}>
                                    {obj.lane}, {obj.city}
                                </Text>


                            </View>

                        )
                    })
                    :
                    <Text style={styles.head}>No address found</Text>
                }
{this.state.loader && <Loader />}
            </ScrollView>
            , <View style={styles.continueBtn}>
                <TouchableOpacity style={styles.newAddress} onPress={() => this.props.navigation.navigate('CreateAddress')}>
                    <Text style={styles.newAdd}>Add Address</Text>

                </TouchableOpacity>
                <Buttoncomponent
                    width={WP(90)}
                    text="Continue To Payment"
                    height={60}
                    // OnClick={() => { this.props.navigation.navigate('Confirmation') }}
                    OnClick={this.orderPublish}
                />
            </View>

        ]
    }
}

export default Address;

const styles = StyleSheet.create({
    navi: {
        backgroundColor: "#fff",
        paddingBottom: 10
    },
    container: {
        paddingHorizontal: WP(5),
    },
    subNav: {
        fontWeight: "normal",
        color: "#000",
        fontSize: 34,
        textAlign: 'left',
        paddingLeft: WP(5),
        color: '#000'
    },
    continueBtn: {
        paddingVertical: 20,
    },
    addressHead: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    addressBox: {
        marginVertical: 10
    },
    head: {
        fontSize: 24,
        color: "#000"

    },
    para: {
        fontSize: 18,
        color: '#a0a0a0'
    },
    newAddress: {
        width: WP(90),
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: "center",
        borderColor: 'blue',
        borderWidth: 3,
        borderRadius: 1,
        borderStyle: 'dotted',
        paddingVertical: 10
    },
    newAdd: {
        fontSize: 20,
        color: 'blue'
    }

})