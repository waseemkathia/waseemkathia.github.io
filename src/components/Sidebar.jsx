import React from "react";
import waseem from "../assets/images/Waseem.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenNib } from "@fortawesome/free-solid-svg-icons";
// import { faResearchgate } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
  const [showContacts, setShowContacts] = useState(false);

  const handleShowContacts = () => {
    console.log("Button clicked");
    setShowContacts(!showContacts);
  };
  return showContacts ? (
    <aside class="sidebar active" data-sidebar>
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img
            src={waseem}
            className="rounded-img crop"
            alt="M.Waseem Sabir"
            width="80"
          />
        </figure>

        <div class="info-content">
          <h1 class="name" title="Muhammad Waseem Sabir">
            Muhammad Waseem Sabir
          </h1>

          <p class="title">AI Researcher</p>
        </div>

        <button
          class="info_more-btn"
          data-sidebar-btn
          onClick={handleShowContacts}
        >
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div class="active">
        <div class="sidebar-info_more">
          <div class="separator"></div>

          <ul class="contacts-list">
            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Email</p>

                <a href="mailto:waseemkathia@gmail.com" class="contact-link">
                  waseemkathia@gmail.com
                </a>
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Phone</p>

                <a href="tel:+923126448488" class="contact-link">
                  +923126448488
                </a>
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Location</p>

                <address>Lahore, Pakistan</address>
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Permanent Address</p>

                <address>Sahiwal, Pakistan</address>
              </div>
            </li>
          </ul>

          <div class="separator"></div>

          <ul class="social-list">
            <li class="social-item">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/waseemkathia/"
                class="social-link"
              >
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
              </a>
            </li>

            <li class="social-item">
              <a
                target="_blank"
                href="https://scholar.google.com/citations?user=19dfQ8kAAAAJ&hl=en"
                class="social-link"
              >
                <FontAwesomeIcon icon="fa-brands fa-google-scholar" />
              </a>
            </li>

            <li class="social-item">
              <a
                target="_blank"
                href="https://www.researchgate.net/profile/"
                class="social-link"
              >
                <FontAwesomeIcon icon="fa-brands fa-researchgate" />
              </a>
            </li>
            <li class="social-item">
              <a
                target="_blank"
                href="https://orcid.org/my-orcid?orcid=0009-0002-8031-2743"
                class="social-link"
              >
                <FontAwesomeIcon icon="fa-brands fa-orcid" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  ) : (
    <aside class="sidebar" data-sidebar>
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img
            src={waseem}
            className="rounded-img crop"
            alt="M. Waseem Sabir"
            width="80"
          />
        </figure>

        <div class="info-content">
          <h1 class="name" title="Muhammad Waseem Sabir">
            Muhammad Waseem Sabir
          </h1>

          <p class="title">AI Researcher</p>
        </div>

        <button
          class="info_more-btn"
          data-sidebar-btn
          onClick={handleShowContacts}
        >
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div class="active">
        <div class="sidebar-info_more">
          <div class="separator"></div>

          <ul class="contacts-list">
            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Email</p>

                <a href="mailto:waseemkathia@gmail.com" class="contact-link">
                  waseemkathia@gmail.com
                </a>
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Phone</p>

                <a href="tel:+923126448488" class="contact-link">
                  +923126448488
                </a>
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Location</p>

                <address>Lahore, Pakistan</address>
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Permanent Address</p>

                <address>Sahiwal, Pakistan</address>
              </div>
            </li>
          </ul>

          <div class="separator"></div>

          <ul class="social-list">
            <li class="social-item">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/waseemkathia/"
                class="social-link"
              >
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
              </a>
            </li>

            <li class="social-item">
              <a
                target="_blank"
                href="https://scholar.google.com/citations?user=19dfQ8kAAAAJ&hl=en"
                class="social-link"
              >
                <FontAwesomeIcon icon="fa-brands fa-google-scholar" />
              </a>
            </li>

            <li class="social-item">
              <a
                target="_blank"
                href="https://www.researchgate.net/profile/"
                class="social-link"
              >
                <FontAwesomeIcon icon="fa-brands fa-researchgate" />
              </a>
            </li>
            <li class="social-item">
              <a
                target="_blank"
                href="https://orcid.org/my-orcid?orcid=0009-0002-8031-2743"
                class="social-link"
              >
                <FontAwesomeIcon icon="fa-brands fa-orcid" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
library.add(fab, fas, far);
