'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
var styles = require('../styles');
class ToDoList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {txt: 'Read a book', complete: false},
        {txt: 'Take a walk', complete: true}
      ]),
    };
  }

  render() {
    return (
    <View style={{flex:1}}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <View>
            <TouchableHighlight
              onPress={this.gotoEdit.bind(this)}>
              <View sytle={styles.item}>
                <Text style={styles.text}>
                  {rowData.txt}
                  </Text>
              </View>
            </TouchableHighlight>
            <View style={styles.hr}/>
          </View>
        }
        style={styles.list}/>
        <TouchableHighlight
          style={[styles.button, styles.newButton]}
          underlayColor='#99d9f4'
          onPress={this.gotoNew.bind(this)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
    </View>
    );
  }

  gotoEdit() {
    this.props.navigator.push({
      id: 'ToDoEdit',
      name: 'Edit ToDo',
    });
  }

  gotoNew() {
    this.props.navigator.push({
      id: 'ToDoEdit',
      name: 'New ToDo',
    });
  }
}

module.exports = ToDoList;