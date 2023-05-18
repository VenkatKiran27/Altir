import { View, Text, StyleSheet, Image } from 'react-native';

const FeedScreen = ({

}) => {

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

  return (
    <View style={styles.container}>
        {rewards.map((item) => {
            return (
                <View style={styles.rewardContainer} key={item.id}>
                    <Image
                        source={{uri: item.image}}
                        resizeMode="cover" 
                        style={styles.profileImage}
                    />
                    <View style={styles.navColumn}>
                        <Text style={styles.primaryText}>{item.rewardedBy}</Text>
                        <Text style={styles.secondaryText}>{item.time}</Text>
                    </View>
                </View>
            )
        })}
    </View>
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
    },
    secondaryText: {
      fontSize: 10,
      fontWeight: '500',
      color: 'grey',
    },
});


export default FeedScreen;
