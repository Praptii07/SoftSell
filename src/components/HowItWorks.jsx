import React from 'react';

const steps = [
    { icon: '📤', title: 'Upload License', description: 'Easily upload your unused software license documents.' },
    { icon: '📈', title: 'Get Valuation', description: 'Receive a fair market valuation within 24 hours.' },
    { icon: '💸', title: 'Get Paid', description: 'Secure and fast payment directly to your account.' },
];

const HowItWorks = () => (
    <section className="py-5" style={{ backgroundColor: 'var(--bs-body-bg)', color: 'var(--bs-body-color)' }}>
        <div className="container text-center">
            <h2 className="display-6 fw-bold mb-5">How It Works</h2>
            <div className="row justify-content-center">
                {steps.map((step, idx) => (
                    <div key={idx} className="col-md-4 col-sm-8 mb-4">
                        <div
                            className="card h-100 border-0 shadow-sm"
                            style={{
                                backgroundColor: 'var(--bs-card-bg)',
                                color: 'var(--bs-body-color)',
                            }}
                        >
                            <div className="card-body">
                                <div className="fs-1 mb-3" style={{ color: 'var(--bs-primary)' }}>{step.icon}</div>
                                <h5 className="fw-bold mb-2">{step.title}</h5>
                                <p className="text-muted">{step.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default HowItWorks;
