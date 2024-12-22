import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance"; // Import the axios instance
import styles from "./MediaRelease.module.css";

const MediaRelease = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("newReleases");
  const [data, setData] = useState({
    newReleases: [],
    blogs: [],
    articles: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/articles");
        const articles = response.data.data.articles.map((article) => ({
          id: article._id,
          title: article.title,
          description: article.description,
          type: "Articles",
          img: article.banner[0], // Assuming the first banner image is used
        }));
        setData((prevData) => ({ ...prevData, articles }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleTabClick = (tab) => setActiveTab(tab);
  const handleCardClick = (id) => {
    navigate(`/media-details/${id}`);
  };

  const getBannerInfo = () => {
    switch (activeTab) {
      case "blogs":
        return {
          image: 'url("/path-to-blogs-banner.jpg")',
          heading: "Our Blogs",
        };
      case "articles":
        return {
          image: 'url("/path-to-articles-banner.jpg")',
          heading: "Latest Articles",
        };
      default:
        return {
          image: 'url("/path-to-new-releases-banner.jpg")',
          heading: "New Releases",
        };
    }
  };

  const bannerInfo = getBannerInfo();

  return (
    <div className={styles.mediaRelease}>
      <div
        className={styles.banner}
        style={{ backgroundImage: bannerInfo.image }}
      >
        <h1>{bannerInfo.heading}</h1>
      </div>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === "newReleases" ? styles.activeTab : ""}`}
          onClick={() => handleTabClick("newReleases")}
        >
          New Releases
        </button>
        <button
          className={`${styles.tab} ${activeTab === "blogs" ? styles.activeTab : ""}`}
          onClick={() => handleTabClick("blogs")}
        >
          Blogs
        </button>
        <button
          className={`${styles.tab} ${activeTab === "articles" ? styles.activeTab : ""}`}
          onClick={() => handleTabClick("articles")}
        >
          Articles
        </button>
      </div>
      <div className={styles.cards}>
        {data[activeTab].map((item) => (
          <div
            key={item.id}
            className={styles.card}
            onClick={() => handleCardClick(item.id)}
          >
            <img src={item.img} alt={item.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <span className={styles.cardType}>{item.type}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <button className={styles.readMore}>Read More</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <button className={styles.seeAllButton}>SEE ALL BLOGS</button>
      </div>
    </div>
  );
};

export default MediaRelease;
