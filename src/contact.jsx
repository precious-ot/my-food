import { useState } from "react";
import { motion } from "framer-motion";
import home1 from "./Assets/home-img.png";
import lastimg from "./Assets/last-image.jpeg";
import SiteNav from "./SiteNav";

const openingHours = [
  ["Sunday", "Closed"],
  ["Monday", "9am - 10pm"],
  ["Tuesday", "9am - 10pm"],
  ["Wednesday", "9am - 10pm"],
  ["Thursday", "9am - 10pm"],
  ["Friday", "9am - 10pm"],
  ["Saturday", "9am - 2pm"],
];

const locations = [
  "LA, Galuxy, Ave 122",
  "New york, Ave 122",
  "Colorado, Ave 122",
  "Washington, Ave 122",
];

export default function Contact() {
  return (
    <main className="contact-page">
      <SiteNav />
      <div className="contact-main">
        <motion.header
          className="page-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">We would love to hear from you</span>
          <h1 className="page-intro__title">Get In Touch</h1>
          <p className="page-intro__copy">
            Make a reservation and join us for an unforgettable meal.
          </p>
        </motion.header>

        <div className="contact-layout">
          <motion.section
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <h2 className="contact-section-title">Make A Reservation</h2>
            <p className="contact-section-copy">
              Book a table and let us take care of the rest.
            </p>
            <h3 className="menu-section__title">Book a Table</h3>
            <Userform />
          </motion.section>

          <motion.section
            className="hours-card"
            style={{ backgroundImage: `url(${home1})` }}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <h2 className="hours-card__title">Opening Hours</h2>
            {openingHours.map(([day, hours]) => (
              <div className="hours-row" key={day}>
                <span className="hours-row__day">{day}</span>
                <span className="hours-row__line" />
                <span className="hours-row__time">{hours}</span>
              </div>
            ))}
          </motion.section>
        </div>

        <motion.section
          className="contact-story"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={lastimg}
            alt="A freshly prepared burger from our kitchen"
            className="contact-story__image"
          />
          <div>
            <span className="eyebrow">Come dine with us</span>
            <h2 className="contact-section-title">Where It All Begins</h2>
            <h3 className="hours-card__title">Locations</h3>
            <div className="location-grid">
              {locations.map((location) => (
                <div className="location-item" key={location}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <span>{location}</span>
                </div>
              ))}
            </div>
            <p className="contact-story__copy">
              Sit amet purus gravida quis blandit turpis cursus in hac.
              Adipiscing bibendum est ultricies integer quis auctor elit.
              Hendrerit dolor magna eget est lorem ipsum dolor sit amet.
            </p>
          </div>
        </motion.section>
      </div>
      <footer className="site-footer">
        &copy; {new Date().getFullYear()} The Luxury Restaurant. All rights
        reserved.
      </footer>
    </main>
  );
}

export function Userform() {
  const [name, setName] = useState({
    surName: "",
    date: "",
    email: "",
    number: "",
    person: "",
    time: "",
  });
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [input, setInput] = useState(true);

  const validate = () => {
    const newErrors = {};

    if (!name.surName.trim()) newErrors.surName = "Name is required";
    if (!name.date) newErrors.date = "Date is required";
    if (!name.number.trim()) newErrors.number = "Number is required";
    if (!name.person.trim()) newErrors.person = "Persons is required";
    if (!name.time) newErrors.time = "Time is required";
    if (!name.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(name.email)) {
      newErrors.email = "Email is invalid";
    }

    return newErrors;
  };

  const updateField = (field, value) => {
    setName((currentName) => ({ ...currentName, [field]: value }));
    setError((currentErrors) => ({ ...currentErrors, [field]: "" }));
  };

  const subHandler = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      setSuccess(false);
    } else {
      setError({});
      setSuccess(true);
      setInput(false);
    }
  };

  const fields = [
    { key: "surName", label: "Name", type: "text" },
    { key: "email", label: "Email", type: "email" },
    { key: "number", label: "Number", type: "tel" },
    { key: "person", label: "Person", type: "number", min: 1 },
    { key: "date", label: "Date", type: "date" },
    { key: "time", label: "Time", type: "time" },
  ];

  return (
    <div>
      {input && (
        <motion.form
          className="reservation-form"
          onSubmit={subHandler}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {fields.map((field) => (
            <motion.div
              className="form-field"
              key={field.key}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <label htmlFor={`reservation-${field.key}`}>{field.label}</label>
              <input
                id={`reservation-${field.key}`}
                name={field.key}
                type={field.type}
                min={field.min}
                value={name[field.key]}
                onChange={(event) => updateField(field.key, event.target.value)}
                aria-invalid={Boolean(error[field.key])}
                aria-describedby={
                  error[field.key] ? `${field.key}-error` : undefined
                }
              />
              {error[field.key] && (
                <p className="form-error" id={`${field.key}-error`}>
                  {error[field.key]}
                </p>
              )}
            </motion.div>
          ))}
          <motion.button className="reservation-submit" type="submit">
            Submit reservation
          </motion.button>
        </motion.form>
      )}
      <AnimateSuccess success={success} name={name} />
    </div>
  );
}

function AnimateSuccess({ success, name }) {
  return (
    <motion.div
      className="reservation-success"
      initial={false}
      animate={
        success
          ? { opacity: 1, height: "auto", marginTop: 30 }
          : { opacity: 0, height: 0, marginTop: 0 }
      }
      transition={{ duration: 0.3 }}
      aria-live="polite"
      style={{ overflow: "hidden" }}
    >
      {success && (
        <>
          {name.surName} you have successfully booked a table with {name.person}{" "}
          people at The Luxury Restaurant on {name.date} by {name.time}, an
          email will be sent to {name.email}. Thank you for your reservation
        </>
      )}
    </motion.div>
  );
}
