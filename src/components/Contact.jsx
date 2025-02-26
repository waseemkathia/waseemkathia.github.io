import React, { useState } from "react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a FormData object
    const formDataObj = new FormData();
    formDataObj.append("entry.32576204", formData.name);
    formDataObj.append("entry.925179000", formData.email);
    formDataObj.append("entry.1794803877", formData.subject);
    formDataObj.append("entry.1501879573", formData.message);

    //     entry.226204025: Javeed Ishaq
    // entry.1813335916: zafrishahid3@gmail.com
    // entry.1326728130: Test by Zafri Shahid
    // entry.1041349872: this is an otyher

    // <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSekPYZ9mb3QDWRh38ja7pcYJRAAVVZ87lfCWzvFtyJ7BXUS0A/viewform?embedded=true" width="640" height="856" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    try {
      // Submit to Google Form

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSeHUj6P-G6eV9SmEsS9ouF0aJtZhrtT45DvcHBsf5ZIChymfQ/formResponse",
        {
          method: "POST",
          mode: "no-cors", // This is important for CORS policy
          body: formDataObj
        }
      );

      // Clear form and show success message
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27219.505179071937!2d74.32392324999999!3d31.48463845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904106691c4c7%3A0xfb24ddaf1e7bc6c2!2sModel%20Town%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1739304865911!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="location-map"
          />
        </figure>
      </section>

      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSekPYZ9mb3QDWRh38ja7pcYJRAAVVZ87lfCWzvFtyJ7BXUS0A/viewform?embedded=true" width="640" height="856" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}

      <section className="contact-form">
        {formSubmitted && (
          <div className="alert" role="alert">
            <h4 className="alert-heading">Thank you!</h4>
            <p>Your message has been sent successfully.</p>
            <p className="mb-0">I'll get back to you as soon as possible.</p>
          </div>
        )}

        <div>
          <h3 className="h3 form-title">Send me a message</h3>

          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Full name"
                required
                data-form-input
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Email address"
                required
                data-form-input
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="form-input"
              style={{ marginBottom: "25px" }}
              placeholder="Subject"
              required
              data-form-input
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Your Message"
              required
              data-form-input
            />

            <button
              className="form-btn"
              type="submit"
              data-form-btn
              disabled={isSubmitting}
            >
              <ion-icon name="paper-plane" />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
