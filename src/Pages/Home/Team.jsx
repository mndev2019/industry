//import React from 'react'

import Heading from "../../Component/Heading"
import team from '../../assets/team.jpg'

const Team = () => {
    return (
        <>
            <section className="py-5 bg-gray team">
                <Heading title="Meet The Team" subtitle="There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer." />
                <div className="container">
                    <div className="row pt-5">
                        {
                            [1, 2, 3, 4].map(() => (
                                <>
                                    <div className="col-md-3 leftcol">
                                        <div className="w-100">
                                            <div className="image position-relative">
                                                <img src={team} alt="image" className="img-fluid" />
                                            </div>
                                            <div className="content">
                                                <h4 className="contenttitle">
                                                    Nashid Martines
                                                </h4>
                                                <span className="contentsubtitle">
                                                    Director
                                                </span>
                                            </div>
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

export default Team