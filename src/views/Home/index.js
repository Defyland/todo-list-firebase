import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './styles'

import { db } from '../../config/firebase';

class Home extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount = () => {
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Todo List</Text>
      </View>
    )
  }
}

Home.defaultProps = {

}

Home.propTypes = {

}

const mapStateToProps = state => {
  return {
    initial:[]
  }
}

export default connect(mapStateToProps)(Home)