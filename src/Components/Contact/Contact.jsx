import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EnvelopePaper, Send, CheckCircle } from "react-bootstrap-icons";
import ContactGlobe from "./ContactGlobe";
import "./Contact.css";

const Contact = () => {
	const form = useRef();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

   emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_PUBLIC_ID)
      .then(() => {
        emailjs.sendForm(
					process.env.REACT_APP_SERVICE,
					process.env.REACT_APP_TEMPLATE_SEND_ME,
					form.current,
					process.env.REACT_APP_PUBLIC_ID
				);

        setLoading(false);
        setSuccess(true);
        alert("Email Sent Successfully");
        form.current.reset();
        setTimeout(() => setSuccess(false), 5000);
      }, (error) => {
        setLoading(false);
        console.error(error);
        alert("Failed to send message. Please check your connection.");
      });
  };

	return (
		<section id="contact" className="contact-section">
			{/* Section Header */}
			<motion.div
				className="contact-header"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}>
				<h2 className="contact-title">
					Have an <span className="highlight">Enquiry?</span>
				</h2>
				<p className="contact-subtitle">
					I am currently open to new opportunities and collaborations.
				</p>
			</motion.div>

			<div className="contact-content">
				{/* Left: 3D Globe */}
				<motion.div
					className="contact-visuals"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}>
					<ContactGlobe />
				</motion.div>

				{/* Right: Glassmorphism Form */}
				<motion.div
					className="contact-form-container"
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}>
					<div className="form-header">
						<EnvelopePaper className="form-icon" />
						<h3>Send a Message</h3>
					</div>

					<form ref={form} onSubmit={sendEmail} className="contact-form">
						<div className="input-group">
							<label>Name</label>
							<input
								type="text"
								name="user_name"
								placeholder="Your Name"
								required
							/>
						</div>

						<div className="input-group">
							<label>Email</label>
							<input
								type="email"
								name="user_email"
								placeholder="your@email.com"
								required
							/>
						</div>

						<div className="input-group">
							<label>Message</label>
							<textarea
								name="message"
								rows="5"
								placeholder="How can I help you?"
								required></textarea>
						</div>

						<button
							type="submit"
							className="submit-btn"
							disabled={loading}>
							{loading
								? "Sending..."
								: success
								? "Message Sent!"
								: "Send Message"}
							{!loading && !success && <Send className="btn-icon" />}
							{success && <CheckCircle className="btn-icon" />}
						</button>
					</form>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
