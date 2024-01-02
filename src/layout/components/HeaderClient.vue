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
                        <div class="header-shop-links">

                            <router-link to="/search">
                                <button class="search-toggle btn align-middle"><i class="fa-solid fa-magnifying-glass ms-1">
                                    </i>
                                    <b>Tìm Kiếm</b></button>
                            </router-link>
                            <router-link to="/auth">
                                <button class="btn btn-danger ms-2 me-2"><b>Đăng Nhập</b></button>
                            </router-link>
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
                                                <div class="col-4 ">
                                                    <router-link to="/movie">
                                                        <li><a href="" style="width: 100%">Tình Cảm</a></li>
                                                    </router-link>
                                                </div>
                                                <div class="col-4 ">
                                                    <router-link to="/movie">
                                                        <li><a href="" style="width: 100%">Hành Động</a></li>
                                                    </router-link>
                                                </div>
                                                <div class="col-4 ">
                                                    <router-link to="/movie">
                                                        <li><a href="" style="width: 100%">Kinh Dị</a></li>
                                                    </router-link>
                                                </div>
                                                <div class="col-4 ">
                                                    <router-link to="/movie">
                                                        <li><a href="" style="width: 100%">Trinh Thám</a></li>
                                                    </router-link>
                                                </div>
                                                <div class="col-4 ">
                                                    <router-link to="/movie">
                                                        <li><a href="" style="width: 100%">Bí Ẩn</a></li>
                                                    </router-link>
                                                </div>
                                                <div class="col-4 " style="justify-content: start;">
                                                    <router-link to="/movie">
                                                        <li><a href="" style="width: 100%">Truyền Hình</a></li>
                                                    </router-link>
                                                </div>
                                                <div class="col-4 ">
                                                    <router-link to="/movie">
                                                        <li><a href="" style="width: 100%">Tài Liệu</a></li>
                                                    </router-link>
                                                </div>
                                                <div class="col-4 ">
                                                    <router-link to="/movie">
                                                        <li><a href="" style="width: 100%">Chiến Tranh</a></li>
                                                    </router-link>
                                                </div>
                                                <div class="col-4 " style="justify-content: start;">
                                                    <router-link to="/movie">
                                                        <li><a href="" style="width: 100%">Viễn Tưởng</a> </li>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li><a href="#">LỊCH CHIẾU</a>
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
export default {

}
</script>
<style></style>