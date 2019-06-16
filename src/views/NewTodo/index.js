import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'

class NewTodo extends Component {

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

NewTodo.defaultProps = {

}

NewTodo.propTypes = {

}

const mapStateToProps = state => {
  return {
    todo:[]
  }
}

export default connect(mapStateToProps)(NewTodo)