import React from 'react'


const Product = () => {

    const photo1: any = 'https://picsum.photos/800/600?random=1';
    const photo2: any = 'https://picsum.photos/800/600?random=2';
    const photo3: any = 'https://picsum.photos/800/600?random=3';
    const photo4: any = 'https://picsum.photos/800/600?random=4';
    const photo5: any = 'https://picsum.photos/800/600?random=5';
    const photo6: any = 'https://picsum.photos/800/600?random=6';
    const photo7: any = 'https://picsum.photos/800/600?random=7';
    const photo8: any = 'https://picsum.photos/800/600?random=8';
    const photo9: any = 'https://picsum.photos/800/600?random=9';
    const photo10: any = 'https://picsum.photos/800/600?random=10';
    const photo11: any = 'https://picsum.photos/800/600?random=11';
    const photo12: any = 'https://picsum.photos/800/600?random=12';

    return (
        <section className="sup_kzezbz" id="productContainer">
            <div className="container bie_lnjbae">

                <div className="pricing-header pt-3 pb-1 pb-md-2 mx-auto text-center">
                    <h1 className="display-4 fw-normal">Features</h1>
                    <p className="fs-5">Featuring our modern and responsive pages</p>
                </div>


                <div className="py-5">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 p-3">
                            <div className="col">

                                <span data-bs-toggle="tooltip" data-bs-title="Click me to show more">
                                    <a type="button" className="card gah_ilnfff" data-bs-toggle="modal"
                                        data-bs-target="#webDevModal">
                                        <img src={photo1} className="card-img-top" alt="Cover Image"
                                            loading="lazy" />
                                        <div className="card-body">
                                            <h5 className="card-title">Cover</h5>
                                        </div>
                                        <span className="epy_twvghn">
                                            PNG Preview
                                        </span>
                                    </a>
                                </span>
                            </div>
                            <div className="col">
                                <div className="card gah_ilnfff">
                                    <img src={photo2} className="card-img-top" alt="..."
                                        loading="lazy" />
                                    <div className="card-body">
                                        <h5 className="card-title">Blog</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card gah_ilnfff">
                                    <img src={photo3} className="card-img-top" alt="..."
                                        loading="lazy" />
                                    <div className="card-body">
                                        <h5 className="card-title">About</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card gah_ilnfff">
                                    <img src={photo4} className="card-img-top" alt="..."
                                        loading="lazy" />
                                    <div className="card-body">
                                        <h5 className="card-title">Contact</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card gah_ilnfff">
                                    <img src={photo5} className="card-img-top" alt="..."
                                        loading="lazy" />
                                    <div className="card-body">
                                        <h5 className="card-title">Dashboard</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card gah_ilnfff">
                                    <img src={photo6} className="card-img-top" alt="..."
                                        loading="lazy" />
                                    <div className="card-body">
                                        <h5 className="card-title">Pricing</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card gah_ilnfff">
                                    <img src={photo7} className="card-img-top" alt="..."
                                        loading="lazy" />
                                    <div className="card-body">
                                        <h5 className="card-title">Signin</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card gah_ilnfff">
                                    <img src={photo8} className="card-img-top" alt="..."
                                        loading="lazy" />
                                    <div className="card-body">
                                        <h5 className="card-title">Checkout</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className=" container-fluid oiq_wqqnwp">
                    <div className="iux_iwuglz d-none d-lg-block"></div>
                    <div className=" container col-xxl-10 px-4 py-5 zql_trobsy">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col col-lg-6 gwg_xnucaa">
                                <div id="bookkeeperCarousel" className="carousel slide" data-bs-ride="true"
                                    data-bs-touch="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#bookkeeperCarousel"
                                            data-bs-slide-to="0" className="active" aria-current="true"
                                            aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#bookkeeperCarousel"
                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#bookkeeperCarousel"
                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#bookkeeperCarousel"
                                            data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-bs-interval="3000">
                                            <img src={photo9} className="d-block w-100"
                                                alt="..." />
                                            <div
                                                className="carousel-caption d-none d-md-block bg-dark bg-gradient p-2 text-light bg-opacity-50">
                                                <h5>Financial Statement</h5>
                                                <p>Setup your financial statement from scratch.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item" data-bs-interval="3000">
                                            <img src={photo10} className="d-block w-100"
                                                alt="..." />
                                            <div
                                                className="carousel-caption d-none d-md-block bg-dark bg-gradient p-2 text-light bg-opacity-50">
                                                <h5>Excel Expert</h5>
                                                <p>Setup financial position in excel or spreadsheet.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item" data-bs-interval="3000">
                                            <img src={photo11} className="d-block w-100"
                                                alt="..." />
                                            <div
                                                className="carousel-caption d-none d-md-block bg-dark bg-gradient p-2 text-light bg-opacity-50">
                                                <h5>Tech-savvy</h5>
                                                <p>Knowledgeable in using accounting application such as QBO</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item" data-bs-interval="3000">
                                            <img src={photo12}
                                                className="d-block w-100" alt="Financial & Accounting Analysis Image" />
                                            <div
                                                className="carousel-caption d-none d-md-block bg-dark bg-gradient p-2 text-light bg-opacity-50">
                                                <h5>Financial & Accounting Analysis</h5>
                                                <p>Knowledgeable in using accounting, costing and other Finance and
                                                    Accounting tools and methodology.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button"
                                        data-bs-target="#bookkeeperCarousel" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button"
                                        data-bs-target="#bookkeeperCarousel" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold lh-1 mb-3">Accounting made by Expert for Business
                                    Aspirant</h1>
                                <p className="lead fw-bold">Handling your business financial and accounting has never
                                    been easy.</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" className="my-button-primary btn-lg px-4 me-md-2">Learn
                                        More</button>

                                    <button type="button" className="my-button-secondary-outline btn-lg px-4"
                                        data-bs-toggle="modal" data-bs-target="#contactModal">Book
                                        Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product