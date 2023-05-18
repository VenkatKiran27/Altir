import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import React, { useRef, useState } from 'react';
import { Modalize } from 'react-native-modalize';
import {TextInput} from 'react-native-paper';

const MyRewardsScreen = ({

}) => {


    const addRewardModal = useRef(null);

    const onOpen = () => {
        addRewardModal.current.open();
    };

    const rewards = [
        {
            id: '1', 
            image: 'https://i0.wp.com/www.kahanihindi.com/wp-content/uploads/2020/02/Whatsapp-DP-HALF-SIZE-Profile-1.jpg?resize=500%2C500&ssl=1', 
            title: 'Big thanks for your help on the outage today!!', 
            rewardedBy: 'David Greene rewarded by Jane Doe', 
            time: '4 hrs ago'
        },
        {
            id: '2', 
            image: 'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg', 
            title: 'Thanks for your help in creating the product overvire deck. You help really helped in closing the loop on the story.', 
            rewardedBy: 'Alex Brown rewarded by Jane Doe', 
            time: 'Feb 20, 2023'
        },
    ];

    const [toName, setToName] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [myRewards, setMyRewards] = useState(rewards);

  return (
    <>
        <View style={styles.container}>
            {myRewards.map((item) => {
                return (
                    <View style={styles.rewardContainer} key={item.id}>
                        <Image
                            source={{uri: item.image}}
                            resizeMode="cover" 
                            style={styles.profileImage}
                        />
                        <View style={styles.navColumn}>
                            <Text style={styles.primaryText}>{item.title}</Text>
                            <Text style={styles.secondaryText}>{item.rewardedBy}</Text>
                            <Text style={styles.secondaryText}>{item.time}</Text>
                        </View>
                    </View>
                )
            })}
            <View style={styles.bottomContainer}>
                <TouchableOpacity 
                    onPress={() => {
                        setToName('')
                        setAmount('')
                        setMessage('')
                        onOpen()
                    }}
                >
                    <Image
                        source={{uri: 'https://p7.hiclipart.com/preview/535/334/430/computer-icons-clip-art-add-button.jpg'}}
                        resizeMode="cover" 
                        style={styles.addIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
        <Modalize 
            ref={addRewardModal} 
            modalHeight={500}
            withHandle={false}
            withReactModal={true}
            modalStyle={{backgroundColor: '#000000'}}
            HeaderComponent={
                <Text style={[styles.modalHeader]}>Give Reward</Text>
            }
            FooterComponent={
                <TouchableOpacity
                    style={[styles.closeButton]}
                    onPress={() => {
                        addRewardModal.current.close()
                    }}
                >
                    <Text style={[styles.closeButtonText]}>
                        X
                    </Text>
                </TouchableOpacity>
            }
        >

            <View style={styles.modalContent}>
                <TextInput
                    label="To"
                    placeholder="Ex: XXX"
                    value={toName}
                    onChangeText={(nextText) => {setToName(nextText)}}
                    mode="flat"
                    style={[styles.textInput]}
                    disabled={false}
                    underlineColor={'#EAEAEA'}
                    activeUnderlineColor={'#FFFFFF'}
                    placeholderTextColor={'grey'}
                />
                <TextInput
                    label="Amount"
                    placeholder="Ex: $25"
                    value={amount}
                    onChangeText={(nextText) => {setAmount(nextText)}}
                    mode="flat"
                    style={[styles.textInput]}
                    disabled={false}
                    underlineColor={'#EAEAEA'}
                    activeUnderlineColor={'#FFFFFF'}
                    placeholderTextColor={'grey'}
                />
                <TextInput
                    label="Message"
                    placeholder="Ex: XXX"
                    value={message}
                    onChangeText={(nextText) => {setMessage(nextText)}}
                    mode="flat"
                    style={[styles.textInput]}
                    disabled={false}
                    underlineColor={'#EAEAEA'}
                    activeUnderlineColor={'#FFFFFF'}
                    placeholderTextColor={'grey'}
                />

                <TouchableOpacity
                    style={[styles.button]}
                    onPress={() => {
                        setMyRewards(myRewards => [...myRewards, {id: myRewards.length+1, image: 'https://source.unsplash.com/random/200x200?sig=1', title: message, rewardedBy: `${toName} rewarded by Jane Doe`, time: 'Just Now'}] );
                        addRewardModal.current.close()
                    }}
                >
                    <Text style={[styles.buttonText]}>
                        Give
                    </Text>
                </TouchableOpacity>
            </View>

       

        </Modalize>
    </>
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    rewardContainer: {
      flexDirection: 'row',
      paddingVertical: 16,
      paddingHorizontal: 8,
    },
    navColumn: {
      flexDirection: 'column',
      marginLeft: 8,
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 50/2,
    },
    primaryText: {
      fontSize: 14,
      fontWeight: '700',
      color: '#000000',
      marginBottom: 8,
      paddingRight: 50,
    },
    secondaryText: {
      fontSize: 10,
      fontWeight: '500',
      color: 'grey',
    },
    addIcon: {
        width: 40,
        height: 40,
        borderRadius: 40/2,
        alignSelf: 'flex-end',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 32,
        paddingHorizontal: 16,
        width: '100%',
    },
    modalTop: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalHeader: {
        fontSize: 24, 
        fontWeight: '500',
        color: '#FFFFFF',
        textAlign: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    button: {
        alignSelf: 'center',
        borderRadius: 16,
        width: 200,
        backgroundColor: '#FFFFFF',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        color: '#000000',
    },
    textInput: {
        height: 50,
        borderRadius: 8,
        textTransform: 'capitalize',
        backgroundColor: '#000000',
        marginVertical: 24,
    },
    modalContent: {
        paddingHorizontal: 16,
    },
    closeButton: {
        padding: 20,
        borderRadius: 16,
    },
    closeButtonText: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'right',
        paddingVertical: 12,
        paddingHorizontal: 16,
        color: '#FFFFFF',
    },
});


export default MyRewardsScreen;
