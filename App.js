import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height'

import Button from './src/components/Button'
import Display from './src/components/Display'


export default class App extends React.Component {

  state = {
    displayValue: '10',
  }

  componentDidMount(){
    StatusBar.setBarStyle('light-content')
    StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.6)')
  }

  addDigit = n => {
    this.setState({displayValue: n})
  }

  clearMemory = () => {
    this.setState({displayValue : '0'})
  }

  setOperation = operation => {

  }

  render(){
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue}/>
        <View style={styles.buttons}>
          <Button label="AC" triple onClick={this.clearMemory}/>
          <Button label="/" operation onClick={this.setOperation}/>
          <Button label="7" onClick={this.addDigit}/>
          <Button label="8" onClick={this.addDigit}/>
          <Button label="9" onClick={this.addDigit}/>
          <Button label="*" operation onClick={this.setOperation}/>
          <Button label="4" onClick={this.addDigit}/>
          <Button label="5" onClick={this.addDigit}/>
          <Button label="6" onClick={this.addDigit}/>
          <Button label="-" operation onClick={this.setOperation}/>
          <Button label="1" onClick={this.addDigit}/>
          <Button label="2" onClick={this.addDigit}/>
          <Button label="3" onClick={this.addDigit}/>
          <Button label="+" operation onClick={this.setOperation}/>
          <Button double label="0" onClick={this.addDigit}/>
          <Button label="." onClick={this.addDigit}/>
          <Button operation label="=" onClick={this.setOperation}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons : {
    flexDirection : 'row',
    flexWrap : 'wrap'
  }
});
