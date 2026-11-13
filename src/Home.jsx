import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import background from "./Assets/background.jpg";
import SiteNav from "./SiteNav";

export default function Home() {
  return (
    <main className="home-page" style={{ backgroundImage: `url(${background})` }}>
      <SiteNav />
      <section className="home-hero">
        <motion.div
          className="home-hero__content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">A dining experience to remember</span>
          <h1 className="home-hero__title">
            The Luxury <em>Restaurant</em>
          </h1>
          <p className="home-hero__tagline">
            Adventure of Good Food &amp; Great Vibes!
          </p>
          <p className="home-hero__description">
            Join us in our cozy dining room and experience the essence of
            farm-to-table dining in every bite. Welcome to The Luxury
            restaurant - where every meal is a celebration of the harvest.
          </p>
          <div className="home-hero__actions">
            <Link className="button-primary" to="/menu">
              Explore the menu <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button-secondary" to="/contact">
              Make a reservation
            </Link>
          </div>
        </motion.div>
      </section>
      <footer className="site-footer">
        &copy; {new Date().getFullYear()} The Luxury Restaurant. All rights
        reserved.
      </footer>
    </main>
  );
}
