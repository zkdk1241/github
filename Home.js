// import SignUp from "./user/SignUp";
// import SignIn from "./user/SignIn";

let Home = () => {
    return (
        <>
            <main>
                {/* home */}
                <div className="untree_co-hero pb-0" id="home-section">
                    <div className="container">
                        <div className="row">

                            <div className="col-12">
                                {/* <div className="dots"></div> */}
                                <div className="row justify-content-center">
                                    <div className="col-md-7 text-center mb-5">

                                    </div>
                                </div>
                                <div className="row align-items-center">
                                {/* <div className="col-lg-4">
                                    
									<h2><a href="#">Welcome to Yog-A!</a></h2>
									<p>Aenean ornare velit lacus varius enim ullamcorper proin aliquam
									facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
									amet nullam sed etiam veroeros.</p>
								</div> */}
                                    <div className="col-lg-4">
                                        <div className="intro">

                                            <div className="excerpt aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                                <span className="caption">Welcome to Yog-A!</span>
                                                <h1 className="font-weight-bold">Explore The Platform</h1>
                                                <p>This is the greates platform</p>
                                            </div>
                                            <p data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">
                                                <a href="#features-section" className="btn btn-primary smoothscroll mr-1">요가란..</a>
                                                <a href="#pricing-section" className="btn btn-outline-primary smoothscroll">프로그램에 대해</a>
                                            </p>
                                        </div>

                                    </div>
                                    <div className="col-lg-8">
                                        <div className="illustration">
                                        <a href="#" className="image main"> <img src="https://i0.wp.com/worldyogaforum.com/wp-content/uploads/2022/04/34a.png?resize=1024%2C845&ssl=1" alt="" /></a>
                                            {/* <img src="https://i0.wp.com/worldyogaforum.com/wp-content/uploads/2022/04/34a.png?resize=1024%2C845&ssl=1" alt="Image" className="img-fluid" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="illustration">

                    </div>
                </div>

                {/* features */}
                <div className="untree_co-section" id="features-section">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-4">
                                <span className="caption aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">Digital Services</span>
                                <h3 className="heading mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">A complete solution for your business website.</h3>
                                <div className="mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                                    <ul className="list-unstyled ul-check primary">
                                        <li>There live the blind texts</li>
                                        <li>Far far away behind the word</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                <a href="https://untree.co/demos/landing/images/dashboard.jpg" className="btn-video" data-fancybox="">

                                    <span className="wrap-icon-play">
                                        <svg className="bi bi-play-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                                        </svg>
                                    </span>
                                    <img src="images/dashboard.jpg" alt="Image" className="img-fluid img-shadow" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* pricing */}
                <div className="untree_co-section bg-light" id="pricing-section">
                    <div className="container">

                        <div className="row pricing-title">
                            <div className="col-12 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                                <span className="caption">Plans</span>
                                <h2 className="heading">Pricing</h2>
                                <p>Pricing for everyone. Choose your plan now!</p>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="row">
                                    <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                        <div className="pricing">
                                            <div className="body">
                                                <div className="price">
                                                    <span className="price"><sup>$</sup><span>0</span></span>
                                                    <span className="d-block plan mb-4">Free</span>
                                                </div>
                                                <ul className="list-unstyled ul-check primary mb-5">
                                                    <li>There live the blind texts</li>
                                                    <li>Far far away behind the word</li>
                                                    <li>Far from the countries Vokalia and Consonantia</li>
                                                </ul>
                                                <p className="text-center mb-0"><a href="#" className="btn btn-outline-primary">Get Started</a></p>
                                            </div>
                                        </div>
                                    </div> 

                                    <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                        <div className="pricing active">
                                            <div className="body">
                                                <div className="price">
                                                    <span className="price"><sup>$</sup><span>19.99</span></span>
                                                    <span className="d-block plan mb-4">Standard</span>
                                                </div>
                                                <ul className="list-unstyled ul-check primary mb-5">
                                                    <li>There live the blind texts</li>
                                                    <li>Far far away behind the word</li>
                                                    <li>Far from the countries Vokalia and Consonantia</li>
                                                </ul>
                                                <p className="text-center mb-0"><a href="#" className="btn btn-primary">Get Started</a></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                        <div className="pricing">

                                            <div className="body">
                                                <div className="price">
                                                    <span className="price"><sup>$</sup><span>79.99</span></span>
                                                    <span className="d-block plan mb-4">Premium</span>
                                                </div>
                                                <ul className="list-unstyled ul-check primary mb-5">
                                                    <li>There live the blind texts</li>
                                                    <li>Far far away behind the word</li>
                                                    <li>Far from the countries Vokalia and Consonantia</li>
                                                </ul>
                                                <p className="text-center mb-0"><a href="#" className="btn btn-outline-primary">Get Started</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
        </>
    )
}

export default Home;