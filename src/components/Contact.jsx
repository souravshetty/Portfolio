import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setError("");
    setSent(false);
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          setSent(true);
        },
        (error) => {
          setError("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="max-w-xl mx-auto mb-10 px-4">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
        <input name="user_name" type="text" placeholder="Your Name" required className="border rounded px-3 py-2" />
        <input name="user_email" type="email" placeholder="Your Email" required className="border rounded px-3 py-2" />
        <textarea name="message" placeholder="Your Message" required className="border rounded px-3 py-2" rows={4} />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Send</button>
        {sent && <p className="text-green-600">Message sent successfully!</p>}
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </section>
  );
};

export default Contact; 