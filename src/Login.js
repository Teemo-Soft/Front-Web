import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import logo from './assets/img/logo.png';
import './Login.css'




class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: ''
    };

    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChangeUser(event) {
    this.setState({ user: event.target.value });
  }

  handleChangePass(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    const { password, user } = this.state
    console.log(user);
    console.log(password);
    event.preventDefault();
  }



  responseGoogle = (response) => {
    console.log(response);
  }

  responseFacebook = (response) => {
    console.log(response);
  }

  render() {
    return (
        <div className='login-form'>
          <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
          <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src={logo} /> Inicia sesión con tu cuenta
          </Header>
              <Form size='large' onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input
                    fluid icon='user'
                    iconPosition='left'
                    placeholder='E-mail o Usuario'
                    value={this.state.user}
                    onChange={this.handleChangeUser}
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Contraseña'
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChangePass}
                  />
                  <Grid columns='3' padded>
                    <Grid.Column className="Without-padding">
                      <Button color='teal' fluid size='large'>
                        Login
                    </Button>
                    </Grid.Column>

                    <Grid.Column className="Without-padding">
                      <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_ID}
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        className="google"
                      />
                    </Grid.Column>
                    <Grid.Column className="Without-padding">
                      <FacebookLogin
                        appId={process.env.REACT_APP_FACEBOOK_ID}
                        icon="fa-facebook"
                        textButton="Login"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={this.responseFacebook}
                        callback={this.responseFacebook}
                        size='small'
                        // cssClass="my-facebook-button-class"
                        buttonStyle={{ borderRadius: 5, width: 123, height: 42, paddingRight: 7, backgroundColor: '#4C69BA', color: 'white' }}
                      />
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Form>
              <Message>
                ¿No eres Usuario? Registrate Ahora---<a href='#'>Registrarse</a>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Login;
