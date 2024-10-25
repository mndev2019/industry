//import React from 'react'
import rightcol from '../../assets/actionrightcol.png'

const Actionbox = () => {
    return (
        <>
            <section className="actionbox overlay-black-dark position-relative ">
                <div className="container">
                    <div className="row position-relative align-items-center">
                        <div className="col-md-8">
                            <h2 className="actionboxheading">A company involved in service, maintenance</h2>
                            <div className="d-flex align-items-center">
                                <div className="text">
                                    <h3 className="number">
                                        123-456-7890
                                    </h3>
                                </div>
                                <div className="button">
                                    <button>
                                        Get Appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 rightcol">
                            <img src={rightcol} alt='image' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Actionbox