import React, { Component } from "react";
import "./Nav.css";
import Logo from "./Logo.png";
import LogoScroll from "./Logo-scroll.png";
import Icon from "@mdi/react";
import { mdiLinkedin } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";

// const menu = document.querySelector("header li a");
// menu.forEach(element => {

// });

class Nav extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY;
      const nav = document.getElementById("nav");
      const menu = document.querySelectorAll("header li a");
      const Logo = document.querySelector(".logo");
      const LogoScroll = document.querySelector(".logoScroll");
      const scialDefault = document.querySelector(".social-default");
      const scialScroll = document.querySelector(".social-scroll");
      menu.forEach(element => {
        if (isTop > 50) {
          element.classList.add("newMenu");
        }
        if (isTop < 50) {
          element.classList.remove("newMenu");
        }
      });

      if (isTop > 50) {
        nav.classList.add("scrolled");
        Logo.classList.add("logo-default");
        LogoScroll.classList.add("logo-scroll");
        scialDefault.classList.add(".social-default-1");
        scialScroll.classList.add(".social-scroll-1");
      }
      if (isTop < 50) {
        nav.classList.remove("scrolled");
        Logo.classList.remove("logo-default");
        LogoScroll.classList.remove("logo-scroll");
        scialDefault.classList.remove(".social-default-1");
        scialScroll.classList.remove(".social-scroll-1");
      }

    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    return (
      <header id="nav" className="Nav">
        <div className="brand">
          <a href="https://www.mohamud.dev/">
            <img className="logo" src={Logo} alt="logo" />
            <img className="logoScroll" src={LogoScroll} alt="logo" />
          </a>
        </div>
        {/* menu */}
        <nav>
          <ul>
            <li>
              <a className="menu" href="https://www.mohamud.dev/">
                Services
              </a>
            </li>
            <li>
              <a className="menu" href="https://www.mohamud.dev/">
                About
              </a>
            </li>
            <li>
              <a className="menu" href="https://www.mohamud.dev/">
                Pricing
              </a>
            </li>

            <li>
              <a className="menu" href="https://www.mohamud.dev/">
                Project
              </a>
            </li>
            <li>
              <a className="menu" href="https://www.mohamud.dev/">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="social-default">
          <a href="https://www.linkedin.com/" title="linkedIn">
            <Icon path={mdiLinkedin} size={1} color="#ffff" />
          </a>
          <a href="https://www.linkedin.com/" title="Facebook">
            <Icon path={mdiFacebook} size={1} color="#ffff" />
          </a>
          <a href="https://www.linkedin.com/" title="Twitter">
            <Icon path={mdiTwitter} size={1} color="#ffff" />
          </a>
          <a href="https://www.linkedin.com/" title="Instagram">
            <Icon path={mdiInstagram} size={1} color="#ffff" />
          </a>
        </div>
        <div className="social-scroll">
          <a href="https://www.linkedin.com/" title="linkedIn">
            <Icon path={mdiLinkedin} size={1} color="#0077B5" />
          </a>
          <a href="https://www.linkedin.com/" title="Facebook">
            <Icon path={mdiFacebook} size={1} color="#3B5998" />
          </a>
          <a href="https://www.linkedin.com/" title="Twitter">
            <Icon path={mdiTwitter} size={1} color="#1DA1F2" />
          </a>
          <a href="https://www.linkedin.com/" title="Instagram">
            <Icon path={mdiInstagram} size={1} color="#A92EB9" />
          </a>
        </div>
        <div className="toggle">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
    );
  }
}

export default Nav;
