import React from "react";
import styles from "./Career.module.css";
import { BulletPoint } from "./BulletPoint";
import { JobSummaryItem } from "./JobSummaryItem";

const requirements = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Nullam dictum ligula a gravida porta.",
  "Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.",
  "Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.",
  "Nulla non enim eu quam rutrum dictum in non urna.",
  "Integer et felis a purus convallis condimentum nec vel eros.",
  "Vestibulum porta libero nec aliquet blandit.",
  "Duis pretium sapien vitae felis tincidunt lobortis vel et urna",
  "Cras ut erat eu ante suscipit rutrum.",
];

const summaryItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/8e66f00219ef94551ce9643ae4b510de9efb03d8d0c6204726ebd652fa5c2380?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    label: "Location",
    value: "Islamabad, Pakistan",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/95564a4759674a80ed868bc582805f880663b9666a0608732006d1464066a669?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    label: "Job Type",
    value: "Full Time",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/3781b36f658c330d3dc7706fe4f9edda142ca6f833697c0ee2c5b2ac7767a63d?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    label: "Date posted",
    value: "posted 1 month ago",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/ed4c788f0060a0b6ea35457492c03906faf0bed8cfe8b3ba14f86ac913a570e8?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    label: "Experience",
    value: "Experience: 1-3 year",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/db3dd822bb83732bede5a52e34d3a8d38ef543e786c7f93f64afcf10db4e6446?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    label: "Working Hours",
    value: "9 AM - 6 PM",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/f657fa7efcaa8f935e61654db1febf966456af144098add2849f6fce94f16586?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    label: "Working Days",
    value: "Weekly:5days",
    additionalValue: "Weekend: Saturday,Sunday",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/1b62c23d0cdfaa1d09833ae423d98cf543125366fb184609abf20471c674ce2e?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    label: "Vacancy",
    value: "No.of Vacancy:3",
  },
];

export const Career = () => {
  return (
    <div className={styles.career}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/6b96931f5d36cf9ad5042680b7903dd0f862def5f3bde21d2084a6fa10b9972e?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
            alt="Career background"
            className={styles.headerBg}
          />
          <h1 className={styles.title}>ICG Career</h1>
          <div className={styles.decorativeBox} />
        </div>

        <div className={styles.content}>
          <div className={styles.mainContent}>
            <div className={styles.jobDetails}>
              <h2 className={styles.jobTitle}>Lab Technician</h2>

              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Who Are We Looking For</h3>
                {requirements.map((req, index) => (
                  <BulletPoint key={index} text={req} />
                ))}
              </section>

              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>What You Will Be Doing</h3>
                {requirements.map((req, index) => (
                  <BulletPoint key={index} text={req} />
                ))}
              </section>

              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Educational Requirement</h3>
                <p className={styles.description}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going
                </p>
              </section>

              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Salary</h3>
                <BulletPoint text="Salary: 18,000 to 35,000 BDT (Depends on Skill and Experience)" />
              </section>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.summaryCard}>
              <button className={styles.applyButton}>Apply Now</button>
              <h3 className={styles.summaryTitle}>Job Summary</h3>

              {summaryItems.map((item, index) => (
                <JobSummaryItem key={index} {...item} />
              ))}

              <button className={styles.viewAllButton}>View all job</button>
            </div>
          </aside>
        </div>

        <footer className={styles.footer}>
          <BulletPoint text="Salary Review: Yearly" />
          <h3 className={styles.sectionTitle}>Working Hours</h3>
          <BulletPoint text="8 AM – 5 PM" />
          <h3 className={styles.sectionTitle}>Working Days</h3>
          <BulletPoint text="Weekly: 5 days." />
          <BulletPoint text="Weekend: Friday.Saturday" />
        </footer>
      </div>
    </div>
  );
};
