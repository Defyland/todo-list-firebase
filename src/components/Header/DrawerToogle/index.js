import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const DrawerToggle = props => (
  <TouchableOpacity
    testID={'menuToggleButton'}
    onPress={() => props.navigation.toggleDrawer()}
  >
    <Icon name="menu" style={{ color: 'white', marginLeft: 16 }} size={24} />
  </TouchableOpacity>
)

export default DrawerToggle