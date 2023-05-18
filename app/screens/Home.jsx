import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyRewardsScreen from './MyRewards';
import FeedScreen from './Feed';

const Tab = createMaterialTopTabNavigator();


const HomeScreen = ({

}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navContainer}>
        <Image
          source={require('../images/Altir_Profile.jpeg')}
          resizeMode="cover" 
          style={styles.profileImage}
        />
        <View style={styles.navColumn}>
          <Text style={styles.primaryText}>Jane Doe</Text>
          <Text>Given <Text style={styles.secondaryText}>$100</Text>  /  Received <Text style={styles.secondaryText}>$250</Text></Text>
        </View>
      </View>
      <Tab.Navigator
       screenOptions={{
        tabBarStyle: {
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
        },
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontSize: 14,
        },
      }}
      >
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="My Rewards" component={MyRewardsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    navContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 20, 
      paddingVertical: 24,
    },
    navColumn: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginLeft: 12,
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 80/2,
    },
    primaryText: {
      fontSize: 16,
      color: '#000000',
      fontWeight: '800',
    },
    secondaryText: {
      fontSize: 16,
      color: '#000000',
      fontWeight: '700',
    },
});


export default HomeScreen;
