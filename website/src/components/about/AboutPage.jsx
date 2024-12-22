import React from "react";
import { CoreValue } from "./components/CoreValue";
import { FeatureCard } from "./components/FeatureCard";
import { StatCard } from "./components/StatCard";
import styles from "./styles/AboutPage.module.css";

const coreValues = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/46d9652fef0b6911c713f9918629a7bbef3b3df2a70e1cb2c2e7c5af8b6f07c7?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Quick follow up, no Nonsense",
    description:
      "ICG Chemicals represents a commitment to uncompromising efficiency.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/6fb1cb58448c3416a644cdce78142de57eeb49ef08e8f762305b64932e316ee3?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Long term partnerships",
    description:
      "We pride ourselves on cultivating long-term partnerships, with a specific emphasis on specific needs.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/99812100a9847b191704e294225c5dd66e2aa61c2860e7ea447ea9679cbb33dc?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Offering the alternative",
    description:
      "We source and create partner-based solutions, products, and services.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/03e10ab258556627caa3a55a22aa8bd8b03214891d13b49cafc9fd0375e88a4d?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Low(est) price guarantee",
    description: "we believe in keeping our company lean and competitive",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/c4f534ce3636165471ee5cf1b33bcc139c384c23deb533ee9eed3cc1f070366f?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Local stock",
    description:
      "local stock ensures that all our top-performing products are readily available",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/8e97fe40a6835dae878e00b68e53c41f66f8bc23b89e957df7f36658d1d91e07?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Global Presence",
    description:
      "Our global presence allows us to handle business directly from our Utrecht headquarters or through local distributors",
  },
];

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/44c97a5064d198f4e4c03ebc7a1ee07fe28b00fad70470d22c5664c34f11d8b3?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Market Leadership",
    description:
      "ICG Chemicals offers innovative and eco-friendly chemical solutions for industries worldwide, focusing on Masterbatch, Compounding, Inks, and Coatings.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/1b0d1215d6a63d76172179b389fc5aa4ddac3936d5f812b1608119a0565e961d?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Cost & Process Leadership",
    description:
      "At ICG Chemicals, we streamline and innovate processes, enhancing supply chain efficiency and energy use to deliver cost-effective, sustainable solutions.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/dbfd8188b8662f3293d3a91924429756df28000a5e53de8c85b9d75e6532f937?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Energy Transition",
    description:
      "ICG Chemicals aims for carbon neutrality by 2050, leveraging sustainability to boost profitability and secure a competitive, greener future.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/811e3c4c523e1158783c5fd36837feb924a783ef6935390b0d18cf1b20ec1bb4?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&",
    title: "Cost Discipline",
    description:
      "At ICG Chemicals, capital discipline and strategic cash management drive value creation, safeguard investments, and ensure consistent returns, supporting sustainable growth.",
  },
];

const stats = [
  { value: "+1k", label: "Satisfied Clients" },
  { value: "+100", label: "Projects Completed" },
];

function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.heroSection}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/bdd5fe055b605da2e47fc160d9cca7e3e1b075840cc5340153e177fa3622737e?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
          alt="ICG Chemicals hero background"
          className={styles.heroBackground}
        />
        <h1 className={styles.heroTitle}>
          About <span className={styles.highlight}>ICG</span>
        </h1>
      </section>

      <section className={styles.whyUsSection}>
        <div className={styles.whyUsContent}>
          <h2 className={styles.sectionTitle}>
            Why <span className={styles.highlight}>us?</span>
          </h2>
          <div className={styles.whyUsDescription}>
            <strong>Our Commitment</strong> to Innovation Innovations is at the
            heart of what we do. Our cutting-edge research and development
            efforts have consistently led the industry, delivering superior
            products that define market standards.
            <br />
            <br />
            <strong>Sustainable Practices</strong> We take pride in our
            sustainable manufacturing processes. Our commitment to the
            environment is demonstrated through our innovative approaches that
            ensure minimal impact on the planet.
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b7572a66cb246d79e0c407d9ccc5b29/2758c8d922757ef0df46946afdc8d78415506a44d71d0706bc6618720937689d?apiKey=5b7572a66cb246d79e0c407d9ccc5b29&"
          alt="Why choose ICG Chemicals"
          className={styles.whyUsImage}
        />
      </section>

      <div className="card-container">
        {/* Sustainable Growth Section */}

        {/* Strategic Priorities Section */}
      </div>

      <section className={styles.statsSection}>
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      <section className={styles.coreValuesSection}>
        <h2 className={styles.coreValuesTitle}>OUR CORE VALUES</h2>
        <div className={styles.coreValuesGrid}>
          {coreValues.map((value, index) => (
            <CoreValue key={index} {...value} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
