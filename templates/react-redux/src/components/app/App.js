import React from 'react'
import './App.scss'
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import {Redirect, Route, Switch} from 'react-router'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {defaultPath} from '../../configurations/routes'
import {GithubLink} from '../github-link/GithubLink'

export function App({routes, navigate, currentLocation, name}) {
    const isCurrentRoute = (path) => currentLocation && currentLocation.pathname === path;
    const clickMenuItem = ({path}) => {
        if (!isCurrentRoute(path)) {
            navigate(path);
        }
    };

    return (
        <div className="App">
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                                <span
                                    className="App-title"
                                    onClick={() => clickMenuItem(routes[0])}
                                >
                                    {name}
                                </span>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    {routes.map((route, i) => (
                        <NavItem
                            key={`menu-item-${i}`}
                            eventKey={1}
                            href={`#${route.path}`}
                            active={isCurrentRoute(route.path)}
                            onClick={() => clickMenuItem(route)}
                        >
                            {route.menu}
                        </NavItem>
                    ))}
                </Nav>
                <GithubLink/>
            </Navbar>
            <section className="App-contents">
                <div className="container">
                    <Switch>
                        {routes.map((route, i) => (
                            <Route
                                exact
                                key={`route-item-${i}`}
                                path={route.path}
                                component={route.component}
                            />
                        ))}
                        <Redirect exact from="/" to={defaultPath}/>
                    </Switch>
                </div>
            </section>
            <footer>
                <GithubLink/>
            </footer>
        </div>
    );
}

App.defaultProps = {
    routes: [],
    navigate: () => {
    },
};

App.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string,
        component: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.object
        ]),
        menu: PropTypes.string,
        navigate: PropTypes.func,
    })),
    navigate: PropTypes.func,
    name: PropTypes.string,
    currentLocation: PropTypes.shape({
        pathname: PropTypes.string
    }),
};

function mapStateToProps(state) {
    return {
        routes: state.app.routes,
        name: state.app.name,
        currentLocation: state.router.location
    }
}

function mapDispatchToProps(dispatch) {
    return {
        navigate: path => dispatch(push(path))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
