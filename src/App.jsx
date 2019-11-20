import React, { Component } from 'react';
import './styles.scss';
import './media.scss';
import { Header, Sidebar, Main } from './components';

export default class App extends Component {
  state = {
    name: 'Каталог',
    scroll: false,
    scrollMobile: false,
    burgerMenuOpened: false
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (document.body.scrollHeight >= 1080) {
        const { scroll, scrollMobile } = this.state;
        if (window.pageYOffset >= 80 && !scroll) {
          this.setState({ scroll: true });
          if (document.documentElement.clientWidth <= 330 && !scrollMobile) {
            this.setState({ scrollMobile: true });
          }
        }
        if (window.pageYOffset < 10 && scroll) {
          this.setState({ scroll: false });
          this.setState({ scrollMobile: false });
        }
        if (document.documentElement.clientWidth >= 350 && scrollMobile) {
          this.setState({ scrollMobile: false });
        }
      }
    });
  }

  changeFilter = e => {
    if (e.currentTarget.name) {
      e.preventDefault();
      this.setState({ name: e.currentTarget.name });
    }
  };

  openBurgerMenu = e => {
    const { burgerMenuOpened } = this.state;
    if (e.target.getAttribute('name') === 'sidebar') {
      if (burgerMenuOpened) {
        this.setState({ burgerMenuOpened: false });
      } else {
        this.setState({ burgerMenuOpened: true });
      }
    }
  };

  render() {
    const { name, scroll, scrollMobile, burgerMenuOpened } = this.state;
    return (
      <div className="container">
        <Header
          name={name}
          scroll={scroll}
          scrollMobile={scrollMobile}
          burgerMenuOpened={burgerMenuOpened}
        />
        <Sidebar
          name={name}
          changeFilter={this.changeFilter}
          openBurgerMenu={this.openBurgerMenu}
          burgerMenuOpened={burgerMenuOpened}
        />
        <Main />
      </div>
    );
  }
}
