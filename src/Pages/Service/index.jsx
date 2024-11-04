import React from 'react';


const services = [
    {
        title: "Radiography Testing",
        description: [
            "Specialized in Radiography Testing using Iridium-192 (Ir-192) and Selenium-75 (Se-75) sources.",
            "Skilled technicians provide accurate imaging results.",
            "Ensures compliance with AERB guidelines for safety and effectiveness.",
        ],
        image: "radiography.jpg", // Replace with actual image URLs
    },
    {
        title: "Consultancy Services",
        description: [
            "Offers ASNT Level 3, ASNT Level 2, PCN, ISO, and CSWIP certified inspectors for job supervision.",
            "Provides impartial third-party inspections.",
            "Senior officials with over 20 years of extensive experience.",
        ],
        image: "consultancy.jpg",
    },
    {
        title: "Ultrasonic Testing",
        description: [
            "Includes services such as Phased Array Ultrasonic Testing (PAUT), Corrosion Mapping, TOFD, and TFM.",
            "Uses advanced tools like Omniscan MX2, X3, and Cobra scanner.",
        ],
        image: "ultrasonic.jpg",
    },
    {
        title: "Eddy Current Tube Inspection",
        description: [
            "Inspection for heat exchangers and boiler tubes.",
            "Techniques include IRIS, MFL, RFT, NFT, and Eddy Current Array (ECA).",
        ],
        image: "eddy_current.jpg",
    },
    {
        title: "Heat Treatment",
        description: [
            "Offers Resistance Heating, Low Voltage Heating, and Induction Heating.",
        ],
        image: "heat_treatment.jpg",
    },
    {
        title: "Additional Services",
        description: [
            "Includes Oxide Scale Measurement, Positive Material Identification (PMI), Hardness Testing (UCI type), Holiday Testing, and more.",
        ],
        image: "additional_services.jpg",
    },
];

const ServicePage = () => {
    return (
        <div className="container my-5">
            {services.map((service, index) => (
                <div className="row align-items-center mb-5" key={index}>
                    {index % 2 === 0 ? (
                        <>
                            <div className="col-md-6">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                            <div className="col-md-6">
                                <h3>{service.title}</h3>
                                <ul>
                                    {service.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-md-6 order-md-2">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                            <div className="col-md-6 order-md-1">
                                <h3>{service.title}</h3>
                                <ul>
                                    {service.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ServicePage;
