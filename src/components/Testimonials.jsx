import React from 'react';

const testimonials = [
    {
        name: 'Jane Doe',
        role: 'IT Director',
        company: 'TechCorp',
        quote: 'SoftSell made it so easy to recoup value from unused licenses!',
    },
    {
        name: 'John Smith',
        role: 'Ops Manager',
        company: 'SoftWave',
        quote: 'Fast, efficient, and transparent. Highly recommend SoftSell.',
    },
];

const Testimonials = () => (
    <section
        className="py-5 text-center"
        style={{
            backgroundColor: 'var(--bs-body-bg)',
            color: 'var(--bs-body-color)',
        }}
    >
        <div className="container">
            <h2 className="display-6 fw-bold mb-4">Customer Testimonials</h2>
            <p className="text-muted mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
                Real stories from professionals who turned unused software into value with SoftSell.
            </p>

            <div className="row justify-content-center">
                {testimonials.map((t, idx) => (
                    <div key={idx} className="col-md-5 col-sm-8 mb-4">
                        <div
                            className="card h-100 p-4 shadow-sm border-0 rounded-4 text-start"
                            style={{
                                backgroundColor: 'var(--bs-card-bg)',
                                color: 'var(--bs-body-color)',
                            }}
                        >
                            <h5 className="fw-bold mb-1">{t.name}</h5>
                            <p className="text-muted mb-2">
                                {t.role}, {t.company}
                            </p>
                            <hr className="my-3" style={{ borderColor: 'var(--bs-border-color)' }} />
                            <p className="fst-italic mb-0" style={{ fontSize: '1.05rem', color: 'var(--bs-secondary-color)' }}>
                <span style={{ color: '#0d6efd', fontSize: '1.5rem', marginRight: '0.3rem' }}>
                  &ldquo;
                </span>
                                {t.quote}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="mt-5 text-secondary" style={{ fontSize: '1rem', maxWidth: '700px', margin: '0 auto' }}>
                Join hundreds of satisfied customers who’ve transformed idle licenses into real returns. With SoftSell, it’s simple and secure.
            </p>
        </div>
    </section>
);

export default Testimonials;
