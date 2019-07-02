import React from 'react';
import { withRouter } from 'react-router-dom';

interface PrevProps {
  location: { pathname: string };
}

class ScrollToTop extends React.Component<any, {}> {
  componentDidUpdate(prevProps: PrevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
