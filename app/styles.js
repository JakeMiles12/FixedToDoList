'use strict';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#ffffff',
  },
  item: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
  },
  text: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 2,
    color: '#222222',
    padding: 10,
  },
  hr: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: 1,
    marginLeft: 0,
    marginRight: 0,
  },
  todo: {
    marginTop: 100,
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  saveButton: {
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
  },
  newButton: {
    marginBottom: 0,
    borderRadius: 0,
  },
  pageTitle: {
    color: 'white',
    margin: 10,
    fontSize: 16,
  },
  back: {
    color: 'white',
    margin: 10,
  },
});

module.exports = styles;