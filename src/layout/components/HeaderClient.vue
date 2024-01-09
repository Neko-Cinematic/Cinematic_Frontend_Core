<template>
    <!-- Header Section Start -->
    <div class="header-section section" style="background-color:#010408f1; height: 70px; z-index: 11111111111;">
        <!-- Header Bottom Start -->
        <div class="header-bottom header-bottom-one header-sticky">
            <div class="container">
                <div class="row menu-center align-items-center justify-content-between">

                    <div class="col mb-15">
                        <!-- Logo Start -->
                        <router-link to="/">
                            <div class="header-logo">
                                <a href="index.html">
                                    <img src="../../assets/assets_client/images/logo.png"
                                        style="width: 180px; transform: translateY(-5px);" alt="Jadusona">
                                </a>
                            </div><!-- Logo End -->
                        </router-link>
                    </div>

                    <div class="col order-2 order-lg-3" style="transform: translateY(-10px);">
                        <!-- Header Advance Search Start -->
                        <div class="header-shop-links d-flex align-items-center">

                            <router-link to="/search">
                                <button class="search-toggle btn align-middle"><i class="fa-solid fa-magnifying-glass ms-1">
                                    </i>
                                    <b>Tìm Kiếm</b></button>
                            </router-link>
                            <router-link to="/client/auth" v-if="isLogin === false">
                                <button class="btn btn-danger ms-2 me-2"><b>Đăng Nhập</b></button>
                            </router-link>

                            <div class="dropdown border-0" v-if="isLogin === true">
                                <button class="btn border-0 dropdown-toggle text-light fs-4  d-flex align-items-center down"
                                    style="outline: none;" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/JPEG_example_flower.jpg/300px-JPEG_example_flower.jpg"
                                        alt="" width="35" class="rounded-circle">
                                    <span class=" ms-1 fs-6 text-capitalize down"><b>{{ username }}</b></span>
                                </button>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item text-capitalize" href="#">Thông tin cá nhân</a></li>
                                    <li><a class="dropdown-item text-capitalize" href="#">Nạp tiền</a></li>
                                    <li><a class="dropdown-item text-capitalize" href="#" v-on:click="logOut()">Đăng
                                            xuất</a></li>
                                </ul>
                            </div>


                        </div><!-- Header Advance Search End -->
                    </div>

                    <div class="col order-3 order-lg-2" style="transform: translateY(-10px);">
                        <div class="main-menu">
                            <nav>
                                <ul>
                                    <li class="active">
                                        <router-link to="/">
                                            <div href="">HOME</div>
                                        </router-link>
                                    </li>
                                    <li><a href="">THỂ LOẠI</a>
                                        <ul class="sub-menu" style="width: 500px;">
                                            <div class="row d-flex" style="">
                                                <template v-for="(v, k) in list">
                                                    <div class="col-4" style="justify-content: start;">
                                                        <router-link :to="`/movie/${v.id}`">
                                                            <li><a href="" style="width: 100%">{{ v.name }}</a> </li>
                                                        </router-link>
                                                    </div>
                                                </template>
                                            </div>
                                        </ul>
                                    </li>

                                    <li><a href="">CONTACT</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <!-- Mobile Menu -->
                    <div class="mobile-menu order-12 d-block d-lg-none col"></div>

                </div>
            </div>
        </div><!-- Header BOttom End -->
    </div><!-- Header Section End -->
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            isLogin: true,
            getToken: localStorage.getItem("tokenClient"),
            username: localStorage.getItem("username"),
            list: [],
        }
    },
    mounted() {
        this.checkLogin();
        this.getTypes()
    },
    methods: {
        checkLogin() {
            console.log(this.getToken);
            if (this.getToken != null) {
                this.isLogin = true;
            } else {
                this.isLogin = false;
            }
        },
        getTypes() {
            axios
                .post('http://127.0.0.1:8000/api/admin/type/get-data')
                .then((res) => {
                    this.list = res.data.data;
                    console.log(this.list)

                })
                .catch((res) => {

                });
        },
        logOut() {
            localStorage.removeItem("tokenClient");
            location.reload();
        }
    }
}
</script>
<style></style>