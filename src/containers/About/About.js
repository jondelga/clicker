import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

export default class About extends Component {

  render() {
    const styles = require('./About.scss');
    return (
      <div className={styles.container}>
        <h1>About Us</h1>
        <DocumentMeta title="React Redux Example: About Us"/>

        <p>This project was orginally created by Erik Rasmussen
          (<a href="https://twitter.com/erikras" target="_blank">@erikras</a>), but has since seen many contributions
          from the open source community. Thank you to <a
            href="https://github.com/erikras/react-redux-universal-hot-example/graphs/contributors"
            target="_blank">all the contributors</a>.
        </p>


      </div>
    );
  }
}
