import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNav from "./SiteNav";
import snack1 from "./Assets/snack-1.png";
import snack2 from "./Assets/snack-2.png";
import snack3 from "./Assets/snack-3.png";
import snack4 from "./Assets/snack-4.png";
import salad1 from "./Assets/salad - 1.png";
import salad2 from "./Assets/salad-2.png";
import salad3 from "./Assets/salad-3.png";
import salad4 from "./Assets/salad-4.png";
import burger1 from "./Assets/burger-1.png";
import burger2 from "./Assets/burger-2.png";
import burger3 from "./Assets/burger-3.png";
import burger4 from "./Assets/burger-4.png";
import drink1 from "./Assets/drink-1.png";
import drink2 from "./Assets/drink-2.png";
import drink3 from "./Assets/drink-3.png";
import drink4 from "./Assets/drink-4.png";
import drink5 from "./Assets/drink-5.png";
import drink6 from "./Assets/drink-6.png";
import untitled1 from "./Assets/Untitled design - 1.png";
import untitled2 from "./Assets/Untitled design - 2.png";
import untitled3 from "./Assets/Untitled design - 3.png";
import untitled4 from "./Assets/Untitled design - 4.png";
import untitled5 from "./Assets/Untitled design - 5.png";
import untitled6 from "./Assets/Untitled design - 6.png";

const menuSections = [
  {
    title: "Snacks",
    items: [
      { image: snack1, name: "Crispy Onion Rings", price: "6.00" },
      { image: snack2, name: "Mozarella Sticks", price: "6.00" },
      { image: snack3, name: "Fried Potatoes", price: "5.00" },
      { image: snack4, name: "Fried Chicked", price: "7.00" },
    ],
  },
  {
    title: "Salads",
    items: [
      { image: salad1, name: "Grilled Chicken Salad", price: "10.00" },
      { image: salad2, name: "Mediterranean Salad", price: "9.00" },
      { image: salad3, name: "Shrimp Salad", price: "15.00" },
      { image: salad4, name: "Healthy Salad", price: "8.00" },
    ],
  },
  {
    title: "Burgers",
    items: [
      { image: burger1, name: "Classic Burger", price: "12.00" },
      { image: burger2, name: "BBQ and Ranch Burger", price: "13.00" },
      { image: burger3, name: "Double Burger", price: "16.00" },
      { image: burger4, name: "Hot Burger", price: "13.00" },
    ],
  },
  {
    title: "Drinks",
    items: [
      { image: drink1, name: "Lemonade", price: "4.00" },
      { image: drink2, name: "Cider", price: "5.00" },
      { image: drink3, name: "Detox", price: "7.00" },
      { image: drink4, name: "Latte", price: "6.00" },
      { image: drink5, name: "Turkish Coffee", price: "7.00" },
      { image: drink6, name: "Soda", price: "4.00" },
    ],
  },
  {
    title: "Snacks",
    items: [
      { image: untitled1, name: "Crispy Onion Rings", price: "6.00" },
      { image: untitled2, name: "Mozarella Sticks", price: "6.00" },
      { image: untitled3, name: "Fried Potatoes", price: "5.00" },
      { image: untitled4, name: "Fried Chicked", price: "7.00" },
    ],
  },
  {
    title: "Soups",
    items: [
      { image: untitled5, name: "Tomato Soup", price: "5.00" },
      { image: untitled6, name: "Pumpkin Soup", price: "5.00" },
    ],
  },
];

function Snacks({ image, name, price }) {
  const [sent, setSent] = useState(false);
  const [snackLink, setSnackLink] = useState(false);

  return (
    <>
      <motion.article
        className="menu-card"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <button
          className="menu-card__image-button"
          type="button"
          onClick={() => setSnackLink(true)}
          aria-label={`View ${name} details`}
        >
          <img className="menu-card__image" src={image} alt={name} />
        </button>
        <div className="menu-card__body">
          <h3 className="menu-card__name">{name}</h3>
          <span className="menu-card__price">${price}</span>
        </div>
        <div className="menu-card__action">
          {!sent ? (
            <button
              className="menu-card__button"
              onClick={() => setSent(true)}
              type="button"
            >
              Add to Cart
            </button>
          ) : (
            <span className="menu-card__added" role="status">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              Added to cart
            </span>
          )}
        </div>
      </motion.article>

      <AnimatePresence>
        {snackLink && (
          <motion.div
            className="menu-drawer-backdrop"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSnackLink(false)}
          >
            <motion.aside
              className="menu-drawer"
              role="dialog"
              aria-modal="true"
              aria-label={`${name} details`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="menu-drawer__close"
                type="button"
                onClick={() => setSnackLink(false)}
              >
                <span aria-hidden="true">×</span> Close
              </button>
              <img className="menu-drawer__image" src={image} alt={name} />
              <div className="menu-drawer__summary">
                <span>{name}</span>
                <strong>${price}</strong>
              </div>
              <div className="menu-drawer__actions">
                <Link className="menu-drawer__order" to="/Order">
                  Order
                </Link>
                {!sent ? (
                  <button
                    className="menu-drawer__button"
                    onClick={() => setSent(true)}
                    type="button"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <span className="menu-card__added" role="status">
                    Added to cart
                  </span>
                )}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Order() {
  return (
    <main className="checkout-page">
      <SiteNav />
      <motion.section
        className="checkout-main"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="page-intro">
          <span className="eyebrow">Almost there</span>
          <h1 className="page-intro__title">Checkout</h1>
          <p className="page-intro__copy">
            Add your details below to complete your order.
          </p>
        </div>
        <Userform />
      </motion.section>
    </main>
  );
}

export function Userform() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });
  const [error, setError] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!name.firstName.trim()) newErrors.firstName = "Firstname is required";
    if (!name.lastName.trim()) newErrors.lastName = "Lastname is required";
    if (!name.address.trim()) newErrors.address = "Address is required";
    if (!name.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(name.email)) {
      newErrors.email = "Email is invalid";
    }

    return newErrors;
  };

  const subHandler = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      setError({});
      alert(
        `Hello ${name.firstName} ${name.lastName} your order has been sent. You will receive your package within 24hours`
      );
    }
  };

  const updateField = (field, value) => {
    setName((currentName) => ({ ...currentName, [field]: value }));
    setError((currentErrors) => ({ ...currentErrors, [field]: "" }));
  };

  return (
    <motion.form
      className="checkout-form"
      onSubmit={subHandler}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {[
        { key: "firstName", label: "First Name", type: "text" },
        { key: "lastName", label: "Last Name", type: "text" },
        { key: "email", label: "Email", type: "email" },
        { key: "address", label: "Address", type: "text" },
      ].map((field) => (
        <motion.div
          className="form-field"
          key={field.key}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <label htmlFor={`checkout-${field.key}`}>{field.label}</label>
          <input
            id={`checkout-${field.key}`}
            type={field.type}
            name={field.key}
            value={name[field.key]}
            onChange={(event) => updateField(field.key, event.target.value)}
            aria-invalid={Boolean(error[field.key])}
            aria-describedby={error[field.key] ? `${field.key}-error` : undefined}
          />
          {error[field.key] && (
            <p className="form-error" id={`${field.key}-error`}>
              {error[field.key]}
            </p>
          )}
        </motion.div>
      ))}
      <motion.button className="reservation-submit" type="submit">
        Submit order
      </motion.button>
    </motion.form>
  );
}

export default function Menu() {
  return (
    <main className="menu-page">
      <SiteNav />
      <motion.header
        className="page-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Fresh from our kitchen</span>
        <h1 className="page-intro__title">Our Menu</h1>
        <p className="page-intro__copy">
          Explore the dishes, drinks, and comforting classics prepared for you.
        </p>
      </motion.header>
      <div className="menu-content">
        {menuSections.map((section, sectionIndex) => (
          <motion.section
            className="menu-section"
            key={`${section.title}-${sectionIndex}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="menu-section__title">{section.title}</h2>
            <div className="menu-grid">
              {section.items.map((item, itemIndex) => (
                <Snacks
                  key={`${sectionIndex}-${item.name}-${itemIndex}`}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}
