'use strict';
const React = require('react');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class App extends React.Component {
    handleClick () {
      alert('Hi ' + this.props.foo);
    }

    render () {

        return (
        <MuiThemeProvider>
          <div>
              <h1>Foo: ({this.props.foo})</h1>
              { (this.props.isLoggedIn === false) &&
              <div>
                <TextField
                  hintText="Email Field"
                  floatingLabelText="Email"
                  type="email"
                />
                <TextField
                  hintText="Password Field"
                  floatingLabelText="Password"
                  type="password"
                />
                <RaisedButton label="Login"/>
              </div>
              }

              <button onClick={this.handleClick.bind(this)}>Event test</button>
          </div>
          </MuiThemeProvider>
        );
    }
}


module.exports = App;
