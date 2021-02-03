import React from 'react';
import {View, ActivityIndicator, Alert} from 'react-native';
import md5 from 'md5';
import {Image, Icon} from 'react-native-elements';
import {
  DrawerItem,
  DrawerContentScrollView,
  // DrawerItemList,
} from '@react-navigation/drawer';
import {connect} from 'react-redux';

/**
 * how to generate avatar: https://en.gravatar.com/site/implement/
 */
function _CustomDrawerContent(props) {
  const {loginData, navigation} = props;

  const emailMD5 = md5('someone@something.com');

  const handleLogout = () => {
    Alert.alert('logout');
    navigation.closeDrawer();
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{alignSelf: 'center'}}>
          <Image
            source={{
              uri: `https://www.gravatar.com/avatar/${emailMD5}?s=200&d=robohash`,
            }}
            style={{width: 200, height: 200}}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>

        {/* <DrawerItem
          label="Profile"
          onPress={() => navigation.navigate('Profile')}
          icon={() => <Icon name="account-box" />}
        /> */}

        {/* <DrawerItemList {...props} /> */}
      </DrawerContentScrollView>

      {loginData && (
        <DrawerItem
          label="Logout"
          onPress={handleLogout}
          icon={() => <Icon name="logout" />}
        />
      )}
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    loginData: state.loginData,
  };
};

export default connect(mapStateToProps, {})(_CustomDrawerContent);
