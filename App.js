import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate('About')}
        title=" go back to About"
      />
    </View>
  );
};
const CustomDrawerComponent = (props) => (
  <SafeAreaView>
  <View style={{height:150}}>
    <Image
      style={{
        width: 66,
        height: 66,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 90,
        borderRadius: 60,
        marginTop: 45,
      }}
      source={require('./image/mark.jpg')}
    />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);
const AboutScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>About</Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go back home"
      />
    </View>
  );
};

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    About: {
      screen: AboutScreen,
    },
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerIcon: () => <Icon name="home" size={24} color="black" />,
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  },
);
const Stackcontainer = createStackNavigator(
  {
    defaultscreen: DrawerNavigator,
  },
  {
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: ({navigation}) => {
      return {
        title: 'Home',
        headerLeft: (
          <Icon
            style={{marginLeft: 10}}
            name="grid"
            size={30}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          marginLeft: 130,
        },
      };
    },
  },
);
export default createAppContainer(Stackcontainer);
