import React from 'react';

const reasons = [
    { icon: '🔒', title: 'Secure Transactions' },
    { icon: '⏱️', title: 'Fast Turnaround' },
    { icon: '💰', title: 'Best Market Prices' },
    { icon: '🧑‍💼', title: 'Expert Support' },
];

const WhyChooseUs = () => (
    <section className="py-5 text-center" style={{ backgroundColor: 'var(--bs-body-bg)', color: 'var(--bs-body-color)' }}>
        <div className="container">
            <h2 className="display-6 fw-bold mb-5">Why Choose Us</h2>
            <div className="row justify-content-center">
                {reasons.map((reason, idx) => (
                    <div key={idx} className="col-md-3 col-sm-6 mb-4">
                        <div
                            className="px-4 py-5 h-100 rounded shadow-sm"
                            style={{
                                backgroundColor: 'var(--bs-card-bg)',
                                color: 'var(--bs-body-color)',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <div className="fs-1 mb-3" aria-hidden="true">{reason.icon}</div>
                            <p className="fw-semibold fs-5">{reason.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default WhyChooseUs;
