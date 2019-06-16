import React, { Component } from 'react'
import { View, Text, Image, Button, FlatList } from 'react-native'
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
    var data = {
      id: "8SfIovFYKHpu6hTivqNK",
      title: Math.random() + "Allan ALlan",
      description: "desc nasausahusahuas",
      completed: false
    }
    this.props.addTodo(data)
    // this.props.updateTodo(data)
    // this.props.removeTodo(data.id)
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={this.props.todoList}
          renderItem={({item, index}) => <Text key={index}>{item.title}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

Home.defaultProps = {
  todoList: []
}

Home.propTypes = {
}

const mapStateToProps = state => {
  return {
    todoList: state.todo.data,
    isLoading: state.todo.loading,
    error: state.todo.error
  }
}

export default connect(mapStateToProps, TodoActions)(Home)