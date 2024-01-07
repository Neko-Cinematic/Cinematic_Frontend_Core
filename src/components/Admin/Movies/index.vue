<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="d-flex justify-content-between">
                    <h2 class="text-start">
                        <div class=""><b class="text-start text-secondary"> Quản Lý Phim</b></div>
                    </h2><button type="button text-end" data-bs-toggle="modal" data-bs-target="#themPhim"
                        class="btn btn-outline-primary">Thêm Mới Phim</button>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th class="text-center align-middle text-nowrap"
                                style="background-color: #AB826B; color:white;">#</th>
                            <th class="text-center align-middle text-nowrap"
                                style="background-color: #AB826B; color:white;">Tên Phim</th>
                            <th class="text-center align-middle text-nowrap"
                                style="background-color: #AB826B; color:white;">Hình Ảnh</th>
                            <th class="text-center align-middle text-nowrap"
                                style="background-color: #AB826B; color:white;">Ngày</th>
                            <th class="text-center align-middle text-nowrap"
                                style="background-color: #AB826B; color:white;">Ngôn Ngữ Gốc</th>
                            <th class="text-center align-middle text-nowrap"
                                style="background-color: #AB826B; color:white;">Tác Giả</th>
                            <th class="text-center align-middle text-nowrap"
                                style="background-color: #AB826B; color:white;">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="text-center align-middle text-nowrap">1</th>
                            <td class="align-middle text-nowrap text-center">Conan</td>
                            <td class="align-middle text-nowrap text-center">
                                <img src="https://upload.wikimedia.org/wikipedia/vi/6/63/Nhan_vat_Tham_tu_lung_danh_Conan.jpg"
                                    alt="" style="width: 80px" class="img-thumbnail ">
                            </td>
                            <td class="align-middle text-nowrap text-center">30/11/2021</td>
                            <td class="text-center align-middle text-nowrap text-center">Tiếng Nhật </td>
                            <td class="text-center align-middle text-nowrap text-center">Aoyama Gōshō</td>
                            <td class="text-center align-middle text-nowrap text-center">
                                <button class="btn btn-success " data-bs-toggle="modal" data-bs-target="#episode">Quản Lý
                                    Tập Phim</button>
                                <button class="btn btn-primary ms-1" data-bs-toggle="modal" data-bs-target="#capNhat">Cập
                                    Nhật</button>
                                <button class="btn btn-danger ms-1" data-bs-toggle="modal"
                                    data-bs-target="#xoaPhim">Xoá</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- modal quản lý phim -->
    <div class="modal fade" id="episode" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="mb-0 text-center align-middle" style="color: #AB826B;">
                        <b>DANH SÁCH TẬP PHIM</b>
                    </h3>
                    <button type="button" class="btn-close mt-1" style="transform: translateX(-10px)"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="card" style="border-bottom: 5px solid  #AB826B;">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th class="text-center align-middle text-nowrap"
                                                        style="background-color: #AB826B; color:white;">
                                                        Số Tập
                                                    </th>
                                                    <th class="text-center align-middle text-nowrap"
                                                        style="background-color: #AB826B; color:white;">Path
                                                    </th>
                                                    <th class="text-center align-middle text-nowrap"
                                                        style="background-color: #AB826B; color:white;">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <template v-for="(v, k) in episode">
                                                    <tr>
                                                        <th class="text-center align-middle text-nowrap">{{ description }}
                                                        </th>
                                                        <td class="align-middle text-nowrap text-center">
                                                            https://www.youtube.com/watch?v=HmmBJTqvefY</td>
                                                        <td class="text-center align-middle text-nowrap text-center">
                                                            <button class="btn btn-danger">Cập Nhật</button>
                                                            <button class="btn btn-success ms-1"
                                                                data-bs-toggle="modal">Xoá</button>
                                                        </td>
                                                    </tr>
                                                </template>
                                                <tr>
                                                    <th class="text-center align-middle text-nowrap"><input type="text"
                                                            class="form-control"></th>
                                                    <td class="align-middle text-nowrap text-center"><input type="file"
                                                            class="form-control"></td>
                                                    <td class="text-center">
                                                        <div style="width: 70px;" class="me-2 btn btn-success "><i
                                                                class="fa-solid fa-plus"></i></div>
                                                        <div style="width: 70px;" class="me-2 btn btn-danger"><i
                                                                class="fa-solid fa-trash-can"></i></div>
                                                        <div style="width: 70px;"
                                                            class="me-2 btn btn-primary justify-content-center"><i
                                                                class="fa-regular fa-pen-to-square"></i></div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end quản lý phim -->

    <!-- modal xóa -->
    <div class="modal fade" id="xoaPhim" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header ">
                    <h3 class="modal-title text-dark fw-bold" id="exampleModalLabel">
                        <p style="color: #AB826B;">Xóa Phim</p>
                    </h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-secondary">
                    <div class="alert alert-danger" role="alert">
                        Bạn Có Muốn Xóa
                        <!-- <b> {{ xoa_phim.original_name }} </b> -->
                        Này
                        Không!!!
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button data-bs-dismiss="modal" type="button" class="btn btn-danger"
                        v-on:click="deleteClient();">Xóa</button>
                </div>
            </div>
        </div>
    </div>
    <!-- end modal xóa -->

    <!-- modal cập nhật -->
    <div class="modal fade" id="capNhat" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header ">
                    <h3 class="modal-title fw-bold" id="exampleModalLabel" style="color:#AB826B">Cập nhật phim</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card">
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th class="text-center align-middle text-nowrap"
                                                style="background-color: #AB826B; color:white;">#</th>
                                            <th class="text-center align-middle text-nowrap"
                                                style="background-color: #AB826B; color:white;">Tên Phim</th>
                                            <th class="text-center align-middle text-nowrap"
                                                style="background-color: #AB826B; color:white;">Hình Ảnh</th>
                                            <th class="text-center align-middle text-nowrap"
                                                style="background-color: #AB826B; color:white;">Ngày</th>
                                            <th class="text-center align-middle text-nowrap"
                                                style="background-color: #AB826B; color:white;">Ngôn Ngữ Gốc</th>
                                            <th class="text-center align-middle text-nowrap"
                                                style="background-color: #AB826B; color:white;">Tác Giả</th>
                                            <th class="text-center align-middle text-nowrap"
                                                style="background-color: #AB826B; color:white;">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th class="text-center align-middle text-nowrap">1</th>
                                            <td class="align-middle text-nowrap text-center">Conan</td>
                                            <td class="align-middle text-nowrap text-center">
                                                <img src="https://upload.wikimedia.org/wikipedia/vi/6/63/Nhan_vat_Tham_tu_lung_danh_Conan.jpg"
                                                    alt="" style="width: 80px" class="img-thumbnail ">
                                            </td>
                                            <td class="align-middle text-nowrap text-center">30/11/2021</td>
                                            <td class="text-center align-middle text-nowrap text-center">Tiếng Nhật </td>
                                            <td class="text-center align-middle text-nowrap text-center">Aoyama Gōshō</td>
                                            <td class="text-center align-middle text-nowrap text-center">
                                                <button class="btn btn-success " data-bs-toggle="modal"
                                                    data-bs-target="#episode">Quản Lý
                                                    Tập Phim</button>
                                                <button class="btn btn-primary ms-1" data-bs-toggle="modal"
                                                    data-bs-target="#capNhat">Cập Nhật</button>
                                                <button class="btn btn-danger ms-1" data-bs-toggle="modal"
                                                    data-bs-target="#xoaPhim">Xoá</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Cập nhật</button>
                </div>
            </div>
        </div>
    </div>
    <!-- end modal cập nhật -->
    <!-- modal thêm  -->
    <div class="modal fade" id="themPhim" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" style="background-color: white;">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <h3 class="fw-bold" style="color:#AB826B; ">
                            Thêm Mới Phim
                        </h3>
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-start">
                    <div class="row">
                        <div class="col-md-4 my-2">
                            <label class="text-secondary">Tên Phim</label>
                            <input class="form-control" type="text" placeholder="Nhập Vào Tên Nhân Viên">
                        </div>
                        <div class="col-md-4 my-2">
                            <label class="text-secondary">Hình Ảnh</label>
                            <input class="form-control" type="text" placeholder="Nhập Vào Tên Nhân Viên">
                        </div>
                        <div class="col-md-4 my-2">
                            <label class="text-secondary">Ngày Khởi Chiếu</label>
                            <input class="form-control" type="text" placeholder="Nhập Vào Tên Nhân Viên">
                        </div>
                        <div class="col-md-4 my-2">
                            <label class="text-secondary">Ngôn ngữ gốc</label>
                            <input class="form-control" type="text" placeholder="Nhập Vào Tên Nhân Viên">
                        </div>
                        <div class="col-md-4 my-2">
                            <label class="text-secondary">Tác giả</label>
                            <input class="form-control" type="text" placeholder="Nhập Vào Tên Nhân Viên">
                        </div>
                       
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác Nhận</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            temp: 0, // Nếu bằng 0 là đang thêm mới thông tin phim, 1 là diễn viên va 2 là thể loại
            list_tai_len: {},
            list_tac_gia: {},
            list_ngon_ngu: {},
            list_movies: [
                {
                    "ten_phim": "alo alo",
                    "hinh_anh": "https://th.bing.com/th/id/R.bfb5b03813234a21967d5d04a129fcd4?rik=PMma3nGg2TGsng&pid=ImgRaw&r=0",
                    "danh_gia": 3,
                    "ngay": "03/01/2024",
                    "quoc_gia": "",
                    "tac_gia": "",
                    "so_thich": 121,
                    "nguoi_tai_len": "",
                    "ngon_ngu_goc": "",
                    "luot_xem": 1000
                },
            ],
            list_quoc_gia: {},
            them_moi: {},
            sua_phim: {},
            xoa_phim: {},
        }
    },
    mounted() {

    }, methods: {

    },
}
</script>
<style></style>