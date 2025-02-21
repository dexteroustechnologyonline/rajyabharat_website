"use client";
import styles from "./header.module.css";
import style from "./Search.module.css";

import "./temp.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Header = () => {
  const { allCategorys } = useSelector((store) => store.category);

  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handlescrolltop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      const topBar = document.getElementById("top-bar");
      const header = document.getElementById("myHeader");

      if (!topBar || !header) return;

      const topBarBottom = topBar.getBoundingClientRect().bottom; // Distance from viewport top to #top-bar's bottom

      if (topBarBottom <= 0) {
        header.classList.add("sticky", "d-block"); // Show header when #top-bar is out of view
      } else {
        header.classList.remove("sticky", "d-block"); // Hide header when #top-bar is visible
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Topbar Start */}
      <div id="top-bar" className="top-bar d-none d-lg-block">
        <div className="container">
          <div
            className={`row align-items-center py-2 ${styles.navbarContainer}`}
          >
            {/* Left Side - Logo */}
            <div className="col-md-2 d-flex align-items-center">
              <Link href="/">
                <img
                  src="/assets/images/transpimg.png"
                  className="img-fluid"
                  style={{ maxHeight: "60px", width: "auto" }}
                  alt="Alikidi Logo"
                />
              </Link>
            </div>

            {/* Center - Navbar */}
            <div className="col-md-8">
              <nav className="navbar navbar-expand-xl navbar-dark">
                <ul className={`navbar-nav ${styles.navbarCenter}`}>
                  {[
                    { href: "/category/education", label: "Education" },
                    { href: "/category/sports", label: "Sports" },
                    { href: "/category/health", label: "Health" },
                    { href: "/category/entertainment", label: "Entertainment" },
                    { href: "/category/politics", label: "Politics" },
                    { href: "/category/crime", label: "Crime" },
                    { href: "/category/breaking-news", label: "Breaking news" },
                    { href: "/category/news", label: "News" },
                    { href: "/about", label: "About Us" },
                    { href: "/contact", label: "Contact Us" },
                  ].map((item, index) => (
                    <li className="nav-item" key={index}>
                      <Link
                        href={item.href}
                        className={`nav-link ${styles.navItem}`}
                      >
                        <span className={styles.navItemText}>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right Side - Social Media Icons */}
            <div className="col-md-2  text-md-end">
              <ul className={`list-inline mb-0 ${styles.socialLinks}`}>
                {[
                  {
                    href: "https://www.facebook.com/profile.php?id=100092603236788",
                    icon: "fa-facebook",
                    title: "Facebook",
                    style: styles.facebook,
                  },
                  {
                    href: "https://twitter.com/alikidinews",
                    icon: "fa-twitter",
                    title: "Twitter",
                    style: styles.twitter,
                  },
                  {
                    href: "mailto:alikidinews@gmail.com",
                    icon: "fa-google-plus",
                    title: "Google+",
                    style: styles.google,
                  },
                  {
                    href: "https://instagram.com/alikidinews?igshid=ZGUzMzM3NWJiOQ==",
                    icon: "fa-instagram",
                    title: "Instagram",
                    style: styles.instagram,
                  },
                  {
                    href: "https://www.youtube.com/@alikidinews",
                    icon: "fa-youtube",
                    title: "YouTube",
                    style: styles.youtube,
                  },
                ].map((social, index) => (
                  <li className="list-inline-item" key={index}>
                    <Link
                      href={social.href}
                      title={social.title}
                      target="_blank"
                      className={`${styles.socialIcon} ${social.style}`}
                    >
                      <i className={`fa ${social.icon} fa-lg`}></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Main Nav Start */}
      <div
        className={`utf_main_nav_area clearfix utf_sticky d-none`}
        id="myHeader"
      >
        <div className="container mobilehedercontainer py-3 shadow-lg navbar-dark navbar-custom navbar-expand-lg">
          <div className="row align-items-center">
            <nav className="navbar col">
              <div className="container-fluid">
                {/* Mobile Toggle Button */}
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={() => setShow(!show)}
                >
                  {!show ? (
                    <Link href="/">
                      <h4 className="mt-0" style={{ color: "#fff" }}>
                        X
                      </h4>
                    </Link>
                  ) : (
                    <Link href="/mobile-category">
                      <span className="navbar-toggler-icon" />
                    </Link>
                  )}
                </button>

                {/* Navbar Links */}
                <div
                  className={`collapse navbar-collapse  d-none d-lg-block ${
                    show ? "show" : ""
                  }`}
                >
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <Link href="/" className="nav-link">
                        <span style={{ color: "#ffffffd5", fontWeight: 500 }}>
                          Home
                        </span>
                      </Link>
                    </li>

                    {allCategorys.map((categ) => (
                      <li className="nav-item" key={categ._id}>
                        <Link
                          className="nav-link"
                          style={{ cursor: "pointer" }}
                          href={`/category/${categ.slugUrl}`}
                        >
                          <span style={{ color: "#ffffffd5", fontWeight: 500 }}>
                            {categ.name}
                          </span>
                        </Link>
                      </li>
                    ))}

                    <li className="nav-item">
                      <Link href="/about" className="nav-link">
                        <span style={{ color: "#ffffffd5", fontWeight: 500 }}>
                          {" "}
                          About Us{" "}
                        </span>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/contact" className="nav-link">
                        <span style={{ color: "#ffffffd5", fontWeight: 500 }}>
                          Contact Us
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/youtubevideo" className="nav-link">
                        <span style={{ color: "#ffffffd5", fontWeight: 500 }}>
                          Videos{" "}
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <>
              <div className={style.searchContainer}>
                <input
                  type="search"
                  className={style.searchInput}
                  placeholder="Search..."
                />
                <button type="button" className={style.searchBtn}>
                  🔍
                </button>
              </div>
            </>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          {showButton && (
            <div id="back-to-top" className="back-to-top">
              <button
                className="btn btn-primary"
                onClick={handlescrolltop}
                title="Back to Top"
              >
                <i className="fa fa-angle-up" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
