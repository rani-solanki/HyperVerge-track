import React, { Fragment } from 'react';

const About = () => {
    return (
        <Fragment>
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossorigin="anonymous"
            />
            
            <link
                href="https://fonts.googleapis.com/css2?family=Catamaran:wght@500&family=Old+Standard+TT:wght@700&display=swap"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <div style={{
                // width: "40%",
                background: "Blue",
                padding: "2%",
                borderRadius: "3%"
            }}>
                <header className="header">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-md-12 text-center">
                                <h1><strong>Welcome to KSRTC (Karnataka State Road Transport Corporation) </strong></h1>
                                <p>
                                    Bangalore (Bengaluru) Bus Tickets
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic est
                                    quis et iure tempora minima similique amet cum commodi id rerum,
                                    in non doloremque veniam accusamus distinctio, at animi ea
                                    ducimus, ad eveniet ipsam esse beatae molestias! Tempore, officia,
                                    vero, unde distinctio tempora natus blanditiis inventore earum ex
                                    officiis excepturi!
                                    The capital city of Karnataka is heavily populated and bus services are an important means of transportation in and around the city.
                                    Besides being one of the biggest IT exporters in the country,
                                    Bengaluru also has many ancient & modern tourist attractions.
                                    Let us see more details about Bengaluru bus services.
                                </p>
                                <button className="btn btn-primary">Start Connecting !</button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
                <div className="cards">
                    <div style={{
                        height: "5%",
                        width: "100%"
                    }}>
                    <section className="message py-5">
                        <div className="container text-center">
                            <h1>We've got what you need!</h1>
                            <div className="content-text">
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic est
                                    quis et iure tempora minima similique amet cum commodi id rerum,
                                    in non doloremque veniam accusamus distinctio, at animi ea
                                </p>
                            </div>
                            <button className="btn btn-primary">Check it out!</button>
                        </div>
                    </section>
                    <section className="services">
                        <div style={{
                            background:"white"
                        }}>
                            <div className="container text-center py-5">
                                <h1>About our services</h1>
                                <div className="row">
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <i className="fa fa-bar-chart myicon"></i>
                                                <h1>Best Explanation</h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Reprehenderit in molestias similique et, perferendis, officiis
                                                    labore harum sequi deleniti itaque rem ea? Labore repellat
                                                    doloribus, beatae perferendis placeat recusandae nam!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <i className="fa fa-braille myicon"></i>
                                                <h1>Best Explanation</h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Reprehenderit in molestias similique et, perferendis, officiis
                                                    labore harum sequi deleniti itaque rem ea? Labore repellat
                                                    doloribus, beatae perferendis placeat recusandae nam!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </section>
                </div>
            </div>

            <section className="message py-5">
                <div style={{
                    background: "White"
                }}>
                <div className="container text-center">
                    <h1>Register and start !!</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic est
                        quis et iure tempora minima similique amet cum commodi id rerum,
                        in non doloremque veniam accusamus distinctio, at animi
                    </p>
                    <button className="btn btn-primary">Register</button>
                    </div>
                </div>
            </section>

            <section className="message py-5">
                <div style={{
                    background: "light"
                }}>
                <div className="container text-center">
                    <h1>Let's Get In Touch!</h1>
                    <p>
                        Ready to start your next project with us? Give us a call or send us an
                        email and we will get back to you as soon as possible!
                    </p>
                    <i className="fa fa-phone myicon text-warning"></i>
                    <i className="fa fa-heart myicon text-danger"></i>
                    <p>+917772074692</p>
                    <p>ranisolanki044@gmail.com</p>
                    </div>
                </div>
                </section>
            <div style={{
                background: "pink"
            }}>
            <section className="message py-5">
                <div className="container text-center">
                    <h1>Importants Links</h1>
                    <div className="container">

                        <div className="col-md-12">
                            <p>https://www.facebook.com/Ranisolanki</p>

                            <p>https://www.instagram.com/Ranisolanki</p>

                            <p>https://www.google.com/Ranisolanki</p>

                            <p>https://www.twitter.com/Ranisolanki</p>

                        </div>
                    </div>
                    <button className="btn btn-primary">Contact Us</button>
                </div>
                </section>
                </div>
            <section className="footer bg-dark">
                <div className="container py-5 text-white text-center">
                    <p>Copyright © 2021 - BaljeetVerse Pvt Ltd.</p>
                </div>
            </section>

        </Fragment>
    )
}

export default About