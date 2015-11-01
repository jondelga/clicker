import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';

const title = 'Clicker Game';

const meta = {
  title,
  meta: {
    charSet: 'utf-8',
    property: {
      'og:site_name': title,
      'og:locale': 'en_US',
      'og:title': title
    }
  }
};

const NavbarLink = ({to, children}) => (
  <Link to={to} activeStyle={{
    color: 'red'
  }}>
    {children}
  </Link>
);

// @connect(state => ({user: state.auth.user}),
//  {logout, pushState})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  static fetchData(getState, dispatch) {
    const promises = [];
    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    return Promise.all(promises);
  }


  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <DocumentMeta {...meta}/>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <div className={styles.brand}/>
              Clicker Home
            </Link>

            <ul className="nav navbar-nav">
              <li><NavbarLink to="/about">About Us</NavbarLink></li>
            </ul>
          </div>
        </nav>
        <div className={styles.appContent}>
          {this.props.children}
        </div>

        <div className="well text-center">
          Footer
        </div>
      </div>
    );
  }
}
