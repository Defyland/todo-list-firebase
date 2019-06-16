import React, { Component } from 'react'
import { View, Text, Image, Button } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './styles'

class NewTodo extends Component {

  static navigationOptions = {
    headerTitle: "Lista de Tarefas",
    // headerLeft: (
    //   <Button
    //     onPress={() => alert('This is a button!')}
    //     title="Info"
    //     color="#fff"
    //   />
    // ),
    // headerStyle: {
    //   backgroundColor: '#f4511e',
    // },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
  };


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
    initial:[]
  }
}

export default connect(mapStateToProps)(NewTodo)