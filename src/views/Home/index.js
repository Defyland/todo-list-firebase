import React, { Component } from 'react'
import { View, Text, TouchableHighlight, FlatList} from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'
import { Creators as TodoActions } from '../../redux/reducers/todo';

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      loading: false
    }
  }

  componentDidMount = () => {
    this.props.getTodoList()
    // var data = {
    //   id: "8SfIovFYKHpu6hTivqNK",
    //   title: Math.random() + "Allan ALlan",
    //   description: "desc nasausahusahuas",
    //   completed: false
    // }
    // this.props.addTodo(data)
    // this.props.updateTodo(data)
    // this.props.removeTodo(data.id)
  }

  goToEdit = (item) => {
    // go to detail
    this.props.navigation.navigate('EditTodo', {task: item})
  }

  renderItem = ({item}) => (
    <TouchableHighlight 
      style={styles.listItem} 
      activeOpacity={0} 
      underlayColor={'#EEE'} 
      onPress={() => this.goToEdit(item)}
    >
      <Text>{item.title}</Text>
    </TouchableHighlight>
  )

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={styles.list}
          data={this.props.todoList}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
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