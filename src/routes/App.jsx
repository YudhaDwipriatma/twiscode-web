import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { StickyContainer, Sticky } from "react-sticky";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { route } = this.props;
    return (
      <Fragment>
        <StickyContainer>
          <Sticky topOffset={500}>
            {({
              style,
              isSticky

              // the following are also available but unused in this example
            }) => <Header style={style} isSticky={isSticky} />}
          </Sticky>
          {renderRoutes(route.routes)}
          <Footer />
        </StickyContainer>
      </Fragment>
    );
  }
}

export default App;
