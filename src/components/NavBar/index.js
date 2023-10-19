import { FaBars, FaTimes } from "react-icons/fa";

import { Component } from "react";

import "./index.css";

import { Link } from "react-router-dom";

class NavBar extends Component {
  state = { isClicked: false, headerScroll: false };

  onClickHamburger = () => {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  };

  onScrolling = () => {
    if (window.scrollY >= 100) {
      this.setState({ headerScroll: true });
    } else {
      this.setState({ headerScroll: false });
    }
  };

  render() {
    const { isClicked, headerScroll } = this.state;
    window.addEventListener("scroll", this.onScrolling);
    return (
      <div className={headerScroll ? "nav-header active" : "nav-header"}>
        <Link to="/">
          <h1 className="logo-heading">Anuj Dhanuka</h1>
        </Link>
        <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-li-items">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-li-items">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-li-items">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav-li-items">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger-menu" onClick={this.onClickHamburger}>
          {!isClicked && <FaBars className="hamburger-icon" />}
          {isClicked && <FaTimes className="hamburger-icon" />}
        </div>
      </div>
    );
  }
}

export default NavBar;
