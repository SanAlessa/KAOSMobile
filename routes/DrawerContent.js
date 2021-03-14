import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Title, Drawer, } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import userAction from '../redux/actions/userAction';
import { color } from 'react-native-reanimated';


function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{backgroundColor:'black', marginTop:40}}>
        <View style={{  flexDirection: 'column' }}>
            <Title style={styles.title}>{!props.loggedUser ? 'Hello!' : 'Welcome ' + props.loggedUser.response.firstname + '!'}</Title>
          </View>
      </View>
        
        
    
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            
          <DrawerItem style={{backgroundColor:'#2296f3'}}
              label="HOME"
              labelStyle={{color:'white'}}
              onPress={() => { props.navigation.navigate('Home') }}
            />

           
           
            {!props.loggedUser &&
              <>
              <DrawerItem style={{backgroundColor:'#2296f3'}}
              label="WELCOME"
              labelStyle={{color:'white'}}
              onPress={() => { props.navigation.navigate('PortadaHome') }}
            />
              
                <DrawerItem style={{backgroundColor:'#2296f3'}}
                 labelStyle={{color:'white'}}
                  label="SIGN UP"
                  onPress={() => { props.navigation.navigate('Register') }}
                />
                <DrawerItem style={{backgroundColor:'#2296f3'}}
                  labelStyle={{color:'white'}}
                  label="LOGIN"
                  onPress={() => { props.navigation.navigate('Login') }}
                />
              </>
            }
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      {props.loggedUser &&
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem style={{backgroundColor:'#2296f3'}}
                 labelStyle={{color:'white'}}
              label="SHOP"
              onPress={() => { props.navigation.navigate('AllProducts') }}
            />
            <DrawerItem style={{backgroundColor:'#2296f3'}}
                 labelStyle={{color:'white'}}
              label="SHOP CART"
              onPress={() => { props.navigation.navigate('ShopCart') }}
            />
          <DrawerItem style={{backgroundColor:'#2296f3'}}
                 labelStyle={{color:'white'}}
            label="LOG OUT"
            onPress={() => props.logOut()}
          />
           
        </Drawer.Section>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
   
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    marginLeft: 10,
    textTransform:'uppercase'
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
});

const mapStateToProps = (state) => {
  return {
    loggedUser: state.userR.loggedUser
  }
}

const mapDispatchToProps = {
  logOut: userAction.disconnectUser
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)