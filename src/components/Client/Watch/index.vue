<template>
    <div class="product-section section mt-5 " style="background-color: #06080f ; border-radius: 10px; padding: 20px">
        <div class="row">
            <div class="col-md-8" style="height: 435px; padding-right: 5px !important;">
                <div class="video" style=" height: 100%;">
                    <Artplayer @get-instance="getInstance" :option="option" :style="style" />
                </div>
                <div class="mt-3 text-center">
                    <a href="" class="btn btn-danger ">
                        <i class="fa-solid fa-forward-step me-1"></i> Tập tiếp</a>
                    <a href="" class="btn btn-danger ms-1"><i class="fa-solid fa-clock-rotate-left"></i> Lịch sử xem</a>
                </div>
                <div class="episodes mt-2">
                    <div class="title">
                        <i class="fa-solid fa-bars fs-5" style="color:white"></i><span class="ms-2 fs-6"
                            style="color:white">Số tập</span>
                    </div>
                    <div class="items-episodes mt-2">
                        <div class="row">
                            <div class="col">
                                <div class="btn btn-secondary me-2 mt-2" style="font-weight: bold;">01</div>
                                <div class="btn btn-secondary me-2 mt-2" style="font-weight: bold;">02</div>
                                <div class="btn btn-secondary me-2 mt-2" style="font-weight: bold;">03</div>
                                <div class="btn btn-secondary me-2 mt-2" style="font-weight: bold;">04</div>
                                <div class="btn btn-secondary me-2 mt-2" style="font-weight: bold;">05</div>
                                <div class="btn btn-secondary me-2 mt-2" style="font-weight: bold;">06</div>
                                <div class="btn btn-secondary me-2 mt-2" style="font-weight: bold;">07</div>
                                <div class="btn btn-secondary me-2 mt-2" style="font-weight: bold;">08</div>
                                <div class="btn btn-secondary me-2 mt-2" style="font-weight: bold;">09</div>
                                <div class="btn btn-secondary me-2 mt-2" style="font-weight: bold;">10</div>
                                <div class="btn btn-secondary me-2 mt-2" style="font-weight: bold;">11</div>
                                <div class="btn btn-secondary me-2 mt-2" style="font-weight: bold;">12</div>
                                <div class="btn btn-secondary me-2 mt-2" style="font-weight: bold;">13</div>
                                <div class="btn btn-secondary me-2 mt-2" style="font-weight: bold;">14</div>
                                <div class="btn btn-secondary me-2 mt-2" style="font-weight: bold;">15</div>
                                <div class="btn btn-secondary me-2 mt-2" style="font-weight: bold;">16</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4" style="margin-top: 5px">
                <div class="row" style="margin-bottom: 19px;">
                    <div class="col-md-12">
                        <div class="" style="background-color: #282C2E; ">
                            <div class="card-body">
                                <section class="Wdgt">
                                    <div class="Title" style="text-transform: uppercase"><b>Hôm nay xem gì?</b></div>
                                    <div class="process my-2"></div>
                                    <p>Nếu bạn buồn phiền không biết xem gì hôm nay. Hãy để chúng tôi chọn cho bạn</p>
                                    <a href="" class="btn btn-danger"><i
                                            class="fa-solid fa-caret-right fs-6 align-middle"></i><span
                                            class="align-middle">Xem Ngẫu Nhiên Phim Mới</span></a>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="" style="background-color: #282C2E; ">
                            <div class="card-body">
                                <div class="title d-flex justify-content-between">
                                    <a href="" style="font-weight: bold; text-transform: uppercase;">PHIM HOT TRONG TUẦN
                                        NÀY</a>
                                </div>
                                <div class="process my-2"></div>
                                <ul class="MovieList">
                                    <li class="mb-2">
                                        <a rel="bookmark" href="#" class="d-flex" style="width: 100%;">
                                            <div class="Image me-3">
                                                <figure class="Objf TpMvPlay AAIco-play_arrow"><img width="55" height="85"
                                                        src="https://cdn.animevietsub.fan/data/poster/2022/02/14/animevsub-SOESV0gsCC.jpg"
                                                        class="attachment-img-mov-sm size-img-mov-sm wp-post-image"
                                                        alt="Jujutsu Kaisen 2nd Season - Jujutsu Kaisen SS2, Chú Thuật Hồi Chiến Mùa 2, Sorcery Fight, JJK 2">
                                                </figure>
                                            </div>
                                            <div class="body">
                                                <span style="font-weight: bold;">Jujutsu Kaisen 2nd Season</span>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="Vote AAIco-star me-2"><i class="fa-solid fa-star"
                                                            style="color:#B5E745"></i>
                                                        9.5
                                                    </span>
                                                    <span class="Time AAIco-access_time me-2"><i
                                                            class="fa-solid fa-clock"></i> 23/23
                                                    </span>
                                                    <span class="Date AAIco-date_range me-2"><i
                                                            class="fa-regular fa-calendar"></i> 2023
                                                    </span>
                                                    <span class="me-2"
                                                        style="background-color: red; padding: 3px 13px; border-radius: 20px;">HD
                                                    </span>
                                                </div>
                                                <div class="view-screen">

                                                </div>
                                            </div>
                                        </a>

                                    </li>
                                    <li class="mb-1">
                                        <a rel="bookmark" href="#" class="d-flex" style="width: 100%;">
                                            <div class="Image me-3">
                                                <figure class="Objf TpMvPlay AAIco-play_arrow"><img width="55" height="85"
                                                        src="https://cdn.animevietsub.fan/data/poster/2022/02/14/animevsub-SOESV0gsCC.jpg"
                                                        class="attachment-img-mov-sm size-img-mov-sm wp-post-image"
                                                        alt="Jujutsu Kaisen 2nd Season - Jujutsu Kaisen SS2, Chú Thuật Hồi Chiến Mùa 2, Sorcery Fight, JJK 2">
                                                </figure>
                                            </div>
                                            <div class="body">
                                                <span style="font-weight: bold;">Jujutsu Kaisen 2nd Season</span>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="Vote AAIco-star me-2"><i class="fa-solid fa-star"
                                                            style="color:#B5E745"></i>
                                                        9.5
                                                    </span>
                                                    <span class="Time AAIco-access_time me-2"><i
                                                            class="fa-solid fa-clock"></i> 23/23
                                                    </span>
                                                    <span class="Date AAIco-date_range me-2"><i
                                                            class="fa-regular fa-calendar"></i> 2023
                                                    </span>
                                                    <span class="me-2"
                                                        style="background-color: red; padding: 3px 13px; border-radius: 20px;">HD
                                                    </span>
                                                </div>
                                                <div class="view-screen">

                                                </div>
                                            </div>
                                        </a>

                                    </li>
                                    <li class="mb-1">
                                        <a rel="bookmark" href="#" class="d-flex" style="width: 100%;">
                                            <div class="Image me-3">
                                                <figure class="Objf TpMvPlay AAIco-play_arrow"><img width="55" height="85"
                                                        src="https://cdn.animevietsub.fan/data/poster/2022/02/14/animevsub-SOESV0gsCC.jpg"
                                                        class="attachment-img-mov-sm size-img-mov-sm wp-post-image"
                                                        alt="Jujutsu Kaisen 2nd Season - Jujutsu Kaisen SS2, Chú Thuật Hồi Chiến Mùa 2, Sorcery Fight, JJK 2">
                                                </figure>
                                            </div>
                                            <div class="body">
                                                <span style="font-weight: bold;">Jujutsu Kaisen 2nd Season</span>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="Vote AAIco-star me-2"><i class="fa-solid fa-star"
                                                            style="color:#B5E745"></i>
                                                        9.5
                                                    </span>
                                                    <span class="Time AAIco-access_time me-2"><i
                                                            class="fa-solid fa-clock"></i> 23/23
                                                    </span>
                                                    <span class="Date AAIco-date_range me-2"><i
                                                            class="fa-regular fa-calendar"></i> 2023
                                                    </span>
                                                    <span class="me-2"
                                                        style="background-color: red; padding: 3px 13px; border-radius: 20px;">HD
                                                    </span>
                                                </div>
                                                <div class="view-screen">

                                                </div>
                                            </div>
                                        </a>

                                    </li>
                                    <li class="mb-1">
                                        <a rel="bookmark" href="#" class="d-flex" style="width: 100%;">
                                            <div class="Image me-3">
                                                <figure class="Objf TpMvPlay AAIco-play_arrow"><img width="55" height="85"
                                                        src="https://cdn.animevietsub.fan/data/poster/2022/02/14/animevsub-SOESV0gsCC.jpg"
                                                        class="attachment-img-mov-sm size-img-mov-sm wp-post-image"
                                                        alt="Jujutsu Kaisen 2nd Season - Jujutsu Kaisen SS2, Chú Thuật Hồi Chiến Mùa 2, Sorcery Fight, JJK 2">
                                                </figure>
                                            </div>
                                            <div class="body">
                                                <span style="font-weight: bold;">Jujutsu Kaisen 2nd Season</span>
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <span class="Vote AAIco-star me-2"><i class="fa-solid fa-star"
                                                            style="color:#B5E745"></i>
                                                        9.5
                                                    </span>
                                                    <span class="Time AAIco-access_time me-2"><i
                                                            class="fa-solid fa-clock"></i> 23/23
                                                    </span>
                                                    <span class="Date AAIco-date_range me-2"><i
                                                            class="fa-regular fa-calendar"></i> 2023
                                                    </span>
                                                    <span class="me-2"
                                                        style="background-color: red; padding: 3px 13px; border-radius: 20px;">HD
                                                    </span>
                                                </div>
                                                <div class="view-screen">
                                                </div>
                                            </div>
                                        </a>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
</template>
<script>
import Artplayer from "../VideoPlayer/index.vue";

export default {
    data() {
        return {
            option: {
                url: "https://artplayer.org/assets/sample/video.mp4",
            },
            style: {
                width: "753px",
                height: "435px",

            },
        };
    },
    components: {
        Artplayer,
    },
    methods: {
        getInstance(art) {
            console.info(art);
        },
        onReady(art) {
            this.play()
        },
    },
};
</script>
<style></style>