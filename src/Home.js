import React, { Component } from 'react';
import { Header, Image,Card, Icon, Container } from 'semantic-ui-react'
import './Login.css'


class Home extends Component {

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Container text>
          <Header as='h2'>Home</Header>
          <h1>Hola mundo este es el home</h1>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
            </a>
            </Card.Content>
          </Card>
        </Container>
      </div>
    )
  }
}

export default Home;
