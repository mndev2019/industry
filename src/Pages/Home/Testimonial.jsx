//import React from 'react'

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"
import Heading from "../../Component/Heading"
import testi from '../../assets/testimonial.jpg'

const Testimonial = () => {
    return (
        <>
            <section className='testimonial'>
                <Heading title="What People Are Saying" subtitle="There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer." />
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-4 position-relative pt-5 ">
                            <div className="w-100 testimonialbox">
                                <p className="para">Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.</p>
                                <div className="d-flex align-items-center ">
                                    <div className="icon">
                                      <img src={testi} alt="image" className="img-fluid test-img"/>
                                    </div>
                                    <div className="text">
                                       <span className="textheading">David Matin</span>
                                       <p className="textpara">Student</p>
                                       <RiDoubleQuotesL className="position-absolute orange openquotes" />
                                       <RiDoubleQuotesR className="position-absolute orange closequotes"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 position-relative pt-5">
                            <div className="w-100 testimonialbox">
                                <p className="para">Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.</p>
                                <div className="d-flex align-items-center ">
                                    <div className="icon">
                                      <img src={testi} alt="image" className="img-fluid test-img"/>
                                    </div>
                                    <div className="text">
                                       <span className="textheading">David Matin</span>
                                       <p className="textpara">Student</p>
                                       <RiDoubleQuotesL className="position-absolute orange openquotes" />
                                       <RiDoubleQuotesR className="position-absolute orange closequotes"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 position-relative pt-5">
                            <div className="w-100 testimonialbox">
                                <p className="para">Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.</p>
                                <div className="d-flex align-items-center ">
                                    <div className="icon">
                                      <img src={testi} alt="image" className="img-fluid test-img"/>
                                    </div>
                                    <div className="text">
                                       <span className="textheading">David Matin</span>
                                       <p className="textpara">Student</p>
                                       <RiDoubleQuotesL className="position-absolute orange openquotes" />
                                       <RiDoubleQuotesR className="position-absolute orange closequotes"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial