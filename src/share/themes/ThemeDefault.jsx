import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600, grey900} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {
    // primary1Color: '#da552f'
  },
  appBar: {
    height: 57,
    color: '#fff',
    textColor: "#da552f"
  },
  raisedButton: {
    primaryColor: '#da552f',
  }
});

export default themeDefault;