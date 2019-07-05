import React from 'react';
import { withRouter } from 'react-router-dom';

// tslint:disable-next-line: interface-name
interface PrevProps {
  location: { pathname: string };
}

// tslint:disable-next-line: no-any
class ScrollToTop extends React.Component<any, {}> {
  public componentDidUpdate(prevProps: PrevProps) {
    // tslint:disable-next-line: no-unsafe-any
    const { pathname }: { pathname: string } = this.props.location;
    if (pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  public render() {
    return this.props.children;
  }
}

// tslint:disable-next-line: no-default-export
export default withRouter(ScrollToTop);
