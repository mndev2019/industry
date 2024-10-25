/* eslint-disable react/prop-types */
//import React from 'react'

const Heading = (props) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="title">
                            {props.title}
                        </h2>
                        <p className="subtitle">
                            {props.subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heading