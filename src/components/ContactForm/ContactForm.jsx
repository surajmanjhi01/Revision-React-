import Button from "../Button/Button";
import "./ContactForm.css";
import { MdMessage, MdCall, MdEmail } from "react-icons/md";

const ContactForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log("Name:", formData.get("name"));
    console.log("Subject:", formData.get("subject"));
    console.log("Email:", formData.get("email"));
    console.log("Form submitted");
  };

  return (
    <section className="container">
      <div className="contact_form">
        <div className="top-btn">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />

          <Button
            text="VIA CALL"
            icon={<MdCall fontSize="24px" />}
          />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className="form_control">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "20px",
            }}
          >
            <button type="submit" className="primary-btn">
              SUBMIT BUTTON
            </button>
          </div>
        </form>
      </div>

      <div className="contact_image">
        <img src="/contact.svg" alt="Contact" />
      </div>
    </section>
  );
};

export default ContactForm;