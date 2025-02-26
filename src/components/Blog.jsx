import React, { useState, useEffect } from "react";
import axios from "axios";
import b1 from "../assets/blog/b1.png";
import b2 from "../assets/blog/b2.png";
import b3 from "../assets/blog/tcl.png";

import About from "./About";
import HigherStudy from "../blogs/HigherStudy";
import ErasmusIfros from "../blogs/ErasmusIfros";
import CareerAdv from "../blogs/CareerAdvForCs";

const Blog = () => {
  const [activeComponent, setActiveComponent] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [mediumPosts, setMediumPosts] = useState([]);

  useEffect(() => {
    fetchMediumPosts();
  }, []);

  const fetchMediumPosts = async () => {
    try {
      console.log('Fetching Medium posts...');
      const response = await axios.get(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@waseem.kathia`
      );

      console.log('API Response:', response.data);

      if (response.data.status === 'ok') {
        console.log('Posts found:', response.data.items.length);
        setMediumPosts(response.data.items);
      } else {
        console.log('API returned non-ok status:', response.data.status);
      }
    } catch (error) {
      console.error('Error fetching Medium posts:', error.response || error);
    }
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "hs":
        return <HigherStudy />;
      case "ei":
        return <ErasmusIfros />;
      case "cs":
        return <CareerAdv />;

      default:
        return null;
    }
  };

  const handleButtonClick = (component) => {
    setIsVisible(false);

    setActiveComponent(component);
  };

  const getImageUrl = (post) => {
    // Try to extract image URL from content
    const imgMatch = post.content.match(/<img.*?src="(.*?)".*?>/);
    return imgMatch ? imgMatch[1] : b1;
  };

  return (
    <div>
      <header>
        <h2 class="h2 article-title">Blogs</h2>
      </header>
      <section class="timeline">
        {renderActiveComponent()}
        {isVisible ? (
          <div class="cards">

            {/* Medium blogs */}
            {mediumPosts.map((post) => (
              <div class="card" key={post.guid}>
                <a
                  className="blog-link img-thumbd"
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={getImageUrl(post)}
                    className="img-thumb"
                    alt={post.title}
                  />
                  <div class="card-item">
                    <div class="title hover-link">{post.title}</div>
                    <div class="year">
                      {post.description.replace(/<[^>]*>?/gm, '').substring(0, 150)}...
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default Blog;
