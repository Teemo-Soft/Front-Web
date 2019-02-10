import React, { Component } from 'react';
import { Button, Icon, Grid, Segment, Sidebar, Dropdown, Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from '../routes'



class SidebarVisible extends Component {

  state = {}


  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <Router>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Sidebar.Pushable as={Segment}>
                <Sidebar
                  as={Menu}
                  animation='uncover'
                  icon='labeled'
                  inverted
                  onHide={() => {
                    this.handleSidebarHide()

                  }}
                  vertical
                  visible={visible}
                  width='thin'
                  height='100vh'
                >
                  <Link to="/home">
                    <Menu.Item as='a'>
                      <Icon name='home' />
                      Home
                  </Menu.Item>
                  </Link>
                  <Link to="/ejemplo">
                    <Menu.Item as='a'>
                      <Icon name='gamepad' />
                      ejemplo
                  </Menu.Item>
                  </Link>
                </Sidebar>

                <Sidebar.Pusher>
                  <div>
                    <Menu attached='top'>
                      <Button.Group>
                        <Button icon
                          disabled={visible}
                          onClick={this.handleShowClick}
                          style={{ backgroundColor: 'white' }}
                        >
                          <Icon size='large' name='bars' />
                        </Button>
                      </Button.Group>

                      <Menu.Menu position='right'>
                        <Dropdown item icon='user' simple>
                          <Dropdown.Menu>
                            <Dropdown.Item>Ver perfil</Dropdown.Item>
                            <Dropdown.Item>Logout</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Menu.Menu>
                    </Menu>
                  </div>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.main}
                    />
                  ))}
                </Sidebar.Pusher>
              </Sidebar.Pushable>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Router>
    )
  }
}

export default SidebarVisible
