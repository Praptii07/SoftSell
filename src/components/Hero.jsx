import React from 'react';

const Hero = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="text-center py-5 bg-primary text-white">
            <h1 className="display-4 fw-bold mb-3">Turn Unused Licenses Into Cash</h1>
            <p className="lead mb-4">Resell your software licenses easily with SoftSell.</p>
            <button
                className="btn btn-light text-primary fw-semibold"
                onClick={scrollToContact}
            >
                Sell My Licenses
            </button>
        </section>
    );
};

export default Hero;
