import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import Page1 from './components/Page1';
// import Page2 from './components/Page2'; //We only need them without code splitting
// import Page3 from './components/Page3';

import AsyncComponent from './components/AsyncComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null
    }
  }
  // ===================================================================
  /* If you open the console you can see that chunks of js get downloaded only on certain pages (where they're needed) */
  //====================================================================
  onRouteChange = (route) => {
    //No code splitting
    this.setState({route: route});

    //With code splitting (DYNAMIC IMPORT - asynchronous loading for components)
  //   if (route === 'page1') {
  //     this.setState({ route: route})
  //   } else if (route === 'page2') {
  //     import('./components/Page2').then((Page2) => {
  //       console.log(Page2);
  //       this.setState({route: route, component: Page2.default })
  //     })
  //   } else if (route === 'page3') {
  //     import('./components/Page3').then((Page3) => {
  //       this.setState({ route: route, component: Page3.default })
  //     })
  // }
}

  render() {
    if (this.state.route === 'page1') {
      return  <Page1 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'page2') {
      const AsyncPage2 = AsyncComponent(() => import('./components/Page2'));
      return <AsyncPage2 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'page3') {
      const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));
      return <AsyncPage3 onRouteChange={this.onRouteChange} />
    }

    //CODE SPLITTING
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange} />
    // }
  }
}

export default App;
