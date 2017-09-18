require('./css/styles.css');
import injectTapEventPlugin from 'react-tap-event-plugin';
import ThemeProvider from './components/ThemeProvider';
import {
  List,
  ListItem
} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import Avatar from 'material-ui/Avatar';
if (window.alreadyInjected) {
  injectTapEventPlugin();
}
export {
  ThemeProvider,
  FlatButton,
  List,
  ListItem,
  RaisedButton,
  Paper,
  AppBar,
  AutoComplete,
  Avatar
};