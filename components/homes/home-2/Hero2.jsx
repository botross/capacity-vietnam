// components/Hero.jsx
import Image from 'next/image';
import styles from './Hero2.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/girl-bubble.jpg" // Replace with your actual girl image path
              alt="Woman with arms outstretched looking up at the sky"
              width={600}
              height={400}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
        
        <div className={styles.contentSection}>
          <h1 className={styles.title}>
            Building Your Inner Strength Together
          </h1>
          
          <p className={styles.description}>
            Empowering individuals, families and workplaces through counselling, practical workshops, insightful trainings that understand your journey.
          </p>
          
          <button className={styles.ctaButton}>
            Connect with us
          </button>
        </div>
        
        {/* Decorative Shapes Image */}
      </div>
        <div className={styles.shapesSection}>
          <Image
            src="/images/shapes.png" // Replace with your actual shapes image path
            alt="Decorative geometric shapes"
            width={300}
            height={300}
            className={styles.shapesImage}
          />
        </div>
    </section>
  );
};

export default Hero;