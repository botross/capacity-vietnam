"use client"
import Image from 'next/image';
import styles from './Hero2.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Hero = () => {
  const router = useRouter();
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.backgroundShapes}>
            <div className={styles.circleShape}></div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/girl.png" // Replace with your actual girl image path
            alt="Woman with arms outstretched looking up at the sky"
            fill
            className={styles.heroImage}
            priority
          />
        </div>

        <div style={{ zIndex: 100 }} className={styles.contentSection}>
          <h1 className={styles.title}>
            Building Your Inner <br />Strength Together
          </h1>

          <p className={styles.description}>
            Empowering individuals, families and workplaces through counselling, practical workshops, insightful trainings that understand your journey.
          </p>

          <Link
            href="/contact"
            style={{ zIndex: 1000 }}
            className={styles.ctaButton}>
            Connect with us
          </Link>
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