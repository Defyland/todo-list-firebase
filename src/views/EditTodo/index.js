import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'

class EditTodo extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: []
    }
  }

  componentDidMount = () => {
   
  }

  handleSubmit = () => {

  }

  render(){
    const { navigation } = this.props;
    const item = navigation.getParam('task');
    return(
      <View style={styles.container}>
        <TextInput
          value={item.title}
        />
    
        <TextInput
          value={item.description}
        />
    
        <Button
          onPress={this.handleSubmit}
          title="Editar"
        />
    </View>
    )
  }
}

EditTodo.defaultProps = {

}

EditTodo.propTypes = {

}

const mapStateToProps = state => {
  return {
    todo:[]
  }
}

export default connect(mapStateToProps)(EditTodo)