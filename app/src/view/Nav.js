import React, { Component } from 'react';

var NavList = React.createClass({
render: function(){
    var listNodes = this.props.data.map(function(index) {
        return (
          <li key={index.keyName}>
            <a href={index.link}>{index.name}</a>
          </li>
        );
    });
    return (
			<ul className="NavList">
				{listNodes}
			</ul>
		);
  }
});

class Nav extends Component {
  constructor(props) {
        super(props);
        this.list = [
            {
              name: 'top',
              keyName: 'nav-top',
              link: '/top'
            },
            {
              name: 'draw',
              keyName: 'nav-draw',
              link: '/draw'

            },
            {
              name: 'about',
              key: 'nav-about',
              link: '/about'
            }
      ];
  }
  render() {
      return (
        <div className="Nav">
          <NavList data={this.list}/>
        </div>
      );
  }
}

export default Nav;
