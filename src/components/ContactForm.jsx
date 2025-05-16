import React, { useState } from 'react';

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        if (form.name && form.email && form.license && form.message) {
            setSubmitted(true);
        }
    };

    return (
        <section className="py-5 text-center" id="contact">
            <h2 className="display-6 fw-bold mb-4">Contact Us</h2>
            {submitted ? (
                <p className="text-success fw-semibold">Thanks for reaching out! We'll get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
                    <div className="mb-3">
                        <input name="name" placeholder="Name" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <input name="email" type="email" placeholder="Email" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <input name="company" placeholder="Company" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <select name="license" className="form-select" onChange={handleChange} required>
                            <option value="">Select License Type</option>
                            <option value="Windows">Windows</option>
                            <option value="Adobe">Adobe</option>
                            <option value="AutoDesk">AutoDesk</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <textarea name="message" placeholder="Message" rows="4" className="form-control" onChange={handleChange} required></textarea>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            )}
        </section>
    );
};

export default ContactForm;