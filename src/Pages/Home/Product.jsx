//import React from 'react'
import play from '../../assets/play.png'
import happyclient from '../../assets/happy-client.png'

const Product = () => {
    return (
        <>
            <section className="product overlay-black-dark">
                <div className="container">
                    <div className="row position-relative align-items-center">
                        <div className="col-md-4 leftcol">
                            <div className="w-100">
                                <div className="d-flex align-items-center">
                                    <div className="playbtn">
                                        <img src={play} alt="image" className='img-fluid' />
                                    </div>
                                    <div className="text">
                                        <span>
                                            Play Now
                                        </span>
                                    </div>
                                </div>
                                <h2 className='py-3'>
                                    We're thriving and building better products
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-8 rightcol">
                            <div className="w-100">
                                <div className="row">
                                    {
                                        [1, 2, 3].map(() => (
                                            <>
                                                <div className="col-md-4">
                                                    <div className="w-100 rightcolinner">
                                                        <img src={happyclient} alt='image' className='img-fluid' />
                                                        <div className="content">
                                                            <div className="line"></div>
                                                            <h2 className='mb-3'>1226</h2>
                                                            <p>
                                                                Happy Client
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product