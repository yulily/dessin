import React from 'react';
import ReactDOM from 'react-dom';
import Header from './view/Header';
import Body from './view/Body';
import Footer from './view/Footer';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

var Index = React.createClass({
  render:function(){
    return (
      <div className="wrap">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
});

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
registerServiceWorker();
