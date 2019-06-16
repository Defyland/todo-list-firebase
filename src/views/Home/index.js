import React, { Component } from 'react'
import { View, Text, Image, Button } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './styles'
import { db } from '../../config/firebase';
import { Creators as TodoActions } from '../../redux/reducers/todo';

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount = () => {
    this.props.getTodoList()
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

const mapStateToProps = state => (
  {
    data: []
  }
)

export default connect(mapStateToProps, TodoActions)(Home)