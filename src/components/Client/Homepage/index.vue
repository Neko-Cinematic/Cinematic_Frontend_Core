<template>
    <div class="product-section section mt-5 " style="background-color: #06080f ; border-radius: 10px; padding: 30px 10px;">
        <div class="container">
            <div class="row">
                <div class="banner"></div>
            </div>
            <div class="row" style="">
                <div class="banner-section section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12 mb-10">
                                <div class="banner banner-1 content-left content-middle">
                                    <a href="#" class="image"><img
                                            src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABc75Mwi3MXMaS8FD7obpXI0STHHnDeD8XCv6uwMI9qL_nTa6_Ceu6END9ALWu3jj1BEBtFICTon0jbRI2xm2jUdeJbWc-baxYNfG.jpg?r=a93"
                                            alt="Banner Image"></a>
                                    <div class="content text-white">
                                        <h2 class="text-white">PHIM MỚI<br>MY DEMON <br>COMMING SOON !</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="tab-content" id="myaccountContent">
                                    <!-- Single Tab Content Start -->
                                    <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
                                        <div class="myaccount-content" style="height: 195px;">
                                            <img src="../../../assets/assets_client/images/neko_logo.png"
                                                style="width: 350px; transform: translate(-5px, -10px)" alt="">
                                            <div class="welcome">
                                                <p>Xin chào bạn, <strong>Alex Tuntuni</strong>
                                                </p>
                                            </div>
                                            <p class="mb-0">
                                                Chào mừng bạn đến với Neko Family Cinematic tự hào là nơi tập trung đa dạng
                                                các bộ phim hấp dẫn, từ những bộ phim bom tấn đình đám đến các tác phẩm nghệ
                                                thuật độc đáo và mới lạ.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row p-3">
                <div class="../../../assets/assets_client/images/My Demon/1.png">
                    <div id="carouselExampleFade" class="carousel slide carousel-fade">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="../../../assets/assets_client/images/My Demon/1.png" class="d-block w-100"
                                    alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="../../../assets/assets_client/images/My Demon/4.png" class="d-block w-100"
                                    alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="../../../assets/assets_client/images/My Demon/2.png" class="d-block w-100"
                                    alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="../../../assets/assets_client/images/My Demon/3.png" class="d-block w-100"
                                    alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="row mt-2 p-3">
                <swiper-container class="mySwiper" watch-slides-progress="true" slides-per-view="5" space-between="5"
                    style="z-index: 0">
                    <template v-for="(v, k) in movies">
                        <swiper-slide class="me-3" style="z-index: -1">
                            <router-link :to="`/detail/${v.id}`">
                                <div class="">
                                    <div class="product-item">
                                        <div class="product-inner">
                                            <div class="image">
                                                <img style="width: 200px; height: 250px" :src="v.url" alt="">
                                                <div class="image-overlay">
                                                    <div class="action-buttons">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="content" style="height: 180px">
                                                <div class="content-inner d-flex flex-column w-100">
                                                    <h4
                                                        class="title text-center align-items-center d-flex flex-column text-center justify-content-center">
                                                        <div href="single-product.html"
                                                            style="transform: translateY(-10px);"
                                                            class="text-center m-auto">{{ v.original_name }}
                                                        </div>
                                                    </h4>
                                                    <div class="ratting ms-1 fs-6 text-center mt-2"
                                                        style="transform: translateY(-15px);">
                                                        <i class="fa fa-star text-danger"></i>
                                                        <i class="fa fa-star text-danger"></i>
                                                        <i class="fa fa-star text-danger"></i>
                                                        <i class="fa fa-star-o text-danger"></i>
                                                        <i class="fa fa-star-o text-danger"></i>
                                                    </div>
                                                    <h5 class="size mt-3">Quốc Gia: {{ v.country_name }}
                                                    </h5>
                                                    <h5 class="color">
                                                        Thể loại: <b class="ms-1"> {{ v.list_type }}</b>
                                                    </h5>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </swiper-slide>
                    </template>
                </swiper-container>
            </div>
            <div class="row p-3">
                <div class="col-8">
                    <div class="../../../assets/assets_client/images/My Demon/1.png">
                        <div id="carouselExampleFade" class="carousel slide carousel-fade">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="../../../assets/assets_client/images/slide/1.png" class="d-block w-100"
                                        alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="../../../assets/assets_client/images/slide/4.png" class="d-block w-100"
                                        alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="../../../assets/assets_client/images/slide/2.png" class="d-block w-100"
                                        alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="../../../assets/assets_client/images/slide/3.png" class="d-block w-100"
                                        alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div style="background-color: rgba(153, 137, 137, 0.379); height:478px; border: 1px solid #eee;">
                        <div class="tab-content" id="myaccountContent">
                            <!-- Single Tab Content Start -->
                            <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
                                <div class="myaccount-content1">
                                    <img src="../../../assets/assets_client/images/neko_logo.png"
                                        style="width: 300px; transform: translate(-5px, -10px)" alt="">
                                    <div class="welcome">
                                        <p class="text-center"
                                            style="text-transform: uppercase; font-size: 15px; font-weight: bold;">Phim Mới
                                            Cập Nhật</p>
                                    </div>
                                    <div class="row mt-2 mb-3">
                                        <div class="col-md-12">
                                            <div class="process"></div>
                                        </div>
                                    </div>
                                    <p class="mt-1">
                                        <template v-for="(v, k) in movies">
                                            <a href="" class=" hover-title-film py-1">
                                                <div class="row">
                                                    <div class="col-md-10 w-100" style="margin-left: 0px;">
                                                        <span class="hidden-one-text title-film "
                                                            style="font-size: 12px; color:#D992A0">{{ v.original_name
                                                            }}</span>
                                                    </div>
                                                    <div class="col-md-2 text-end "
                                                        style="font-size: 12px; font-style: italic; color:rgb(159, 138, 138)">
                                                        Full</div>
                                                </div>
                                            </a>
                                        </template>
                                    </p>
                                </div>
                            </div>
                            <!-- Single Tab Content End -->

                            <!-- Single Tab Content Start -->
                            <div class="tab-pane fade" id="orders" role="tabpanel">
                                <div class="myaccount-content">
                                    <h3>Orders</h3>

                                    <div class="myaccount-table table-responsive text-center">
                                        <table class="table table-bordered">
                                            <thead class="thead-light">
                                                <tr>
                                                    <th>No</th>
                                                    <th>Name</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Total</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Moisturizing Oil</td>
                                                    <td>Aug 22, 2018</td>
                                                    <td>Pending</td>
                                                    <td>$45</td>
                                                    <td><a href="cart.html" class="btn btn-dark btn-round">View</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Katopeno Altuni</td>
                                                    <td>July 22, 2018</td>
                                                    <td>Approved</td>
                                                    <td>$100</td>
                                                    <td><a href="cart.html" class="btn btn-dark btn-round">View</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Murikhete Paris</td>
                                                    <td>June 12, 2017</td>
                                                    <td>On Hold</td>
                                                    <td>$99</td>
                                                    <td><a href="cart.html" class="btn btn-dark btn-round">View</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!-- Single Tab Content End -->

                            <!-- Single Tab Content Start -->
                            <div class="tab-pane fade" id="download" role="tabpanel">
                                <div class="myaccount-content">
                                    <h3>Downloads</h3>

                                    <div class="myaccount-table table-responsive text-center">
                                        <table class="table table-bordered">
                                            <thead class="thead-light">
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Date</th>
                                                    <th>Expire</th>
                                                    <th>Download</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>Moisturizing Oil</td>
                                                    <td>Aug 22, 2018</td>
                                                    <td>Yes</td>
                                                    <td><a href="#" class="btn btn-dark btn-round">Download File</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Katopeno Altuni</td>
                                                    <td>Sep 12, 2018</td>
                                                    <td>Never</td>
                                                    <td><a href="#" class="btn btn-dark btn-round">Download File</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!-- Single Tab Content End -->

                            <!-- Single Tab Content Start -->
                            <div class="tab-pane fade" id="payment-method" role="tabpanel">
                                <div class="myaccount-content">
                                    <h3>Payment Method</h3>

                                    <p class="saved-message">You Can't Saved Your Payment Method yet.</p>
                                </div>
                            </div>
                            <!-- Single Tab Content End -->

                            <!-- Single Tab Content Start -->
                            <div class="tab-pane fade" id="address-edit" role="tabpanel">
                                <div class="myaccount-content">
                                    <h3>Billing Address</h3>
                                    <address>
                                        <p><strong>Alex Tuntuni</strong></p>
                                        <p>1355 Market St, Suite 900 <br>
                                            San Francisco, CA 94103</p>
                                        <p>Mobile: (123) 456-7890</p>
                                    </address>

                                    <a href="#" class="btn btn-dark btn-round d-inline-block"><i class="fa fa-edit"></i>Edit
                                        Address</a>
                                </div>
                            </div>
                            <!-- Single Tab Content End -->

                            <!-- Single Tab Content Start -->
                            <div class="tab-pane fade" id="account-info" role="tabpanel">
                                <div class="myaccount-content">
                                    <h3>Account Details</h3>

                                    <div class="account-details-form">
                                        <form action="#">
                                            <div class="row">
                                                <div class="col-lg-6 col-12 mb-30">
                                                    <input id="first-name" placeholder="First Name" type="text">
                                                </div>

                                                <div class="col-lg-6 col-12 mb-30">
                                                    <input id="last-name" placeholder="Last Name" type="text">
                                                </div>

                                                <div class="col-12 mb-30">
                                                    <input id="display-name" placeholder="Display Name" type="text">
                                                </div>

                                                <div class="col-12 mb-30">
                                                    <input id="email" placeholder="Email Address" type="email">
                                                </div>

                                                <div class="col-12 mb-30">
                                                    <h4>Password change</h4>
                                                </div>
                                                <div class="col-12 mb-30">
                                                    <input id="current-pwd" placeholder="Current Password" type="password">
                                                </div>
                                                <div class="col-lg-6 col-12 mb-30">
                                                    <input id="new-pwd" placeholder="New Password" type="password">
                                                </div>
                                                <div class="col-lg-6 col-12 mb-30">
                                                    <input id="confirm-pwd" placeholder="Confirm Password" type="password">
                                                </div>
                                                <div class="col-12">
                                                    <button class="btn btn-dark btn-round btn-lg">Save
                                                        Changes</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">

            <div class="row">
                <div class="section-title text-center col mb-30 text-light mt-25">
                    <h1 class="text-light">Phim Được Ưa Thích Nhất</h1>
                    <p>Phim Hot Mùa Đông Năm 2023</p>
                </div>
            </div>

            <div class="row mbn-40">
                <template v-for="(v, k) in movies">
                    <div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-40">
                        <div class="">
                            <div class="product-item">
                                <div class="product-inner">
                                    <div class="image">
                                        <img style="width: 270px; height: 320px" :src="v.url" alt="">
                                        <div class="image-overlay">
                                            <div class="action-buttons">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content" style="height: 180px">
                                        <div class="content-inner d-flex flex-column w-100">
                                            <h4
                                                class="title text-center align-items-center d-flex flex-column text-center justify-content-center">
                                                <div href="single-product.html" style="transform: translateY(-10px);"
                                                    class="text-center m-auto">{{ v.original_name }}
                                                </div>
                                            </h4>
                                            <div class="ratting ms-1 fs-6 text-center mt-2 "
                                                style="transform: translateY(-15px);">
                                                <i class="fa fa-star text-danger"></i>
                                                <i class="fa fa-star text-danger"></i>
                                                <i class="fa fa-star text-danger"></i>
                                                <i class="fa fa-star text-danger"></i>
                                                <i class="fa fa-star-o text-danger"></i>
                                            </div>
                                            <h5 class="size mt-3">Quốc Gia: {{ v.country_name }}
                                            </h5>
                                            <h5 class="color">
                                                Thể loại: <b class="ms-1"> {{ v.list_type }}</b>
                                            </h5>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>


            </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            movies: []
        }
    },
    async mounted() {
        await this.getMovie();
    },
    methods: {
        async getMovie() {
            await axios
                .post('http://127.0.0.1:8000/api/admin/movie/get-data')
                .then((res) => {
                    this.movies = res.data.data;
                })
        }
    }
}
</script>
<style></style>