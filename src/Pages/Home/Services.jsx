//import React from 'react'

import Heading from "../../Component/Heading"
import mechanical from "../../assets/mechanical.png"

const Services = () => {
    return (
        <>
            <section className="py-5 bg-gray service">
                <Heading title="Our Services" subtitle="There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer." />
                <div className="container">
                    <div className="row pt-5">
                        {
                            [1, 2, 3, 4, 5, 6].map(() => (
                                <>
                                    <div className="col-md-4">
                                        <div className="w-100  servicebox">
                                            <img src={mechanical} alt="image" className="serviceimg" />
                                            <h2 className="servicedinheading">
                                                Mechanical Works
                                            </h2>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ))
                        }

                    </div>
                </div>


            </section>

        </>
    )
}

export default Services