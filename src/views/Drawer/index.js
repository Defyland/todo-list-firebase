import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

class Drawer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> SideMenu </Text>
      </View>
    )
  }
}

export default Drawer;