import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    // Apply/remove 'dark-mode' class on body tag
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <div
            className="min-vh-100"
            style={{
                backgroundColor: 'var(--bs-body-bg)',
                color: 'var(--bs-body-color)',
                transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
        >
            <header className="d-flex align-items-center justify-content-between py-3 border-bottom px-4">
                <a href="/" className="d-flex align-items-center text-decoration-none">
                    <img
                        src="/logo.svg"
                        alt="SoftSell Logo"
                        style={{ height: '40px', cursor: 'pointer' }}
                    />
                    <span
                        className="ms-2 fw-bold fs-4"
                        style={{ color: 'var(--bs-body-color)' }}
                    >
            SoftSell
          </span>
                </a>
                <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>

            <Hero />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <ContactForm />

            <footer
                className="text-center py-4 border-top mt-5"
                style={{ borderColor: 'var(--bs-border-color)' }}
            >
                <small>© 2025 SoftSell Inc.</small>
            </footer>
        </div>
    );
}

export default App;
