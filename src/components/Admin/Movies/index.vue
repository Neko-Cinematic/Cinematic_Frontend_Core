<template>
    <div class="card">
        <div class="card-body text-end">
            <div class="row mb-4">
                <div class="col-6">
                    <h2 class="text-start text-secondary">
                        <div class="m">
                            <b>QUẢN LÝ PHIM</b>
                        </div>
                    </h2>
                </div>
                <div class="col-6">
                    <button class="btn btn-danger text-end" data-bs-toggle="modal" data-bs-target="#themmoiModal">Thêm Mới
                        Phim</button>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead class="table-light">
                        <tr>
                            <th class="text-center text-nowrap" style="background-color: #AB826B; color:white;">STT</th>
                            <th class="text-center text-nowrap" style="background-color: #AB826B; color:white;">Tên Phim
                            </th>
                            <th class="text-center text-nowrap" style="background-color: #AB826B; color:white;">Hình Ảnh
                            </th>
                            <th class="text-center text-nowrap" style="background-color: #AB826B; color:white;">Quốc Gia
                            </th>
                            <th class="text-center text-nowrap" style="background-color: #AB826B; color:white;">Tác Giả</th>
                            <th class="text-center text-nowrap" style="background-color: #AB826B; color:white;">Sở Thích
                            </th>
                            <th class="text-center text-nowrap" style="background-color: #AB826B; color:white;">Người Tải
                                Lên</th>
                            <th class="text-center text-nowrap" style="background-color: #AB826B; color:white;">Diễn Viên
                            </th>
                            <th class="text-center text-nowrap" style="background-color: #AB826B; color:white;">Mô Tả</th>
                            <th class="text-center text-nowrap" style="background-color: #AB826B; color:white;">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(v, k) in list_movies">
                            <tr>
                                <td class="text-center align-middle">
                                    {{ k + 1 }}
                                </td>
                                <td class="text-center align-middle">
                                    {{ v.ten_phim }}
                                </td>
                                <td class="text-center align-middle">
                                    <img v-bind:src="v.hinh_anh" style="width: 150px;">
                                </td>


                                <td class="text-center align-middle">
                                    <!-- {{ v.quoc_gia }} -->
                                </td>
                                <td class="text-center align-middle">
                                    <!-- {{ v.tac_gia }} -->
                                </td>
                                <td class="text-center align-middle">
                                    {{ v.so_thich }}
                                </td>
                                <td class="text-center align-middle">
                                    {{ v.nguoi_tai_len }}
                                </td>
                                <td class="text-center align-middle">
                                    <i data-bs-toggle="modal" data-bs-target="#dienvienModal"
                                        class="fa-sharp fa-solid fa-person fa-2x text-info"></i>
                                </td>
                                <td class="text-center align-middle">
                                    <i data-bs-toggle="modal" data-bs-target="#motaPhim"
                                        class="fa-solid fa-circle-info fa-2x text-info"></i>
                                </td>

                                <td class="text-center text-nowrap align-middle">
                                    <i data-bs-toggle="modal" data-bs-target="#SuaPhim"
                                        class=" me-2 fa-2x text-info fa-solid fa-pen-to-square"></i>
                                    <i data-bs-toggle="modal" data-bs-target="#XoaPhim"
                                        class="fa-2x text-danger fa-solid fa-trash"></i>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
                <div class="modal fade" id="dienvienModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg" style="background-color: white;">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    <h4 class="text-secondary">
                                        Diễn Viên
                                    </h4>
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row text-start">
                                    <div class="col-3 text-secondary">
                                        <b>
                                            Võ Quốc Triệu
                                        </b>
                                        <p>Hwang Min Chu</p>
                                    </div>
                                    <div class="col-3 text-secondary">
                                        <b>
                                            Nguyễn Trần Duy Khánh
                                        </b>
                                        <p>Hwang Min Son</p>
                                    </div>
                                    <div class="col-3 text-secondary">
                                        <b>
                                            Đoàn Võ Văn trọng
                                        </b>
                                        <p>Hwang Min Su</p>
                                    </div>
                                    <div class="col-3 text-secondary">
                                        <b>
                                            Nguyễn Văn Tuấn
                                        </b>
                                        <p>Kim Cho In</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="themmoiModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-xl" style="background-color: white;">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    <h4 class="text-secondary">
                                        Thêm Mới Phim
                                    </h4>
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-start">
                                <template v-if="temp == 0">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="mb-1">
                                                <label class="form-label text-secondary">Tên Phim</label>
                                                <input type="text" placeholder="Nhập Vào Tên phim" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="mb-1">
                                                <label class="form-label text-secondary">Ngôn Ngữ</label>
                                                <select class="form-control">
                                                    <template v-for="(v, k) in list_ngon_ngu">
                                                        <option>
                                                            <!-- {{ v.ten_ngon_ngu }} -->
                                                        </option>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="mb-1">
                                                <label class="form-label text-secondary">Hình Ảnh</label>
                                                <input type="text" class="form-control" placeholder="Nhập Vào Link Ảnh">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="mb-1">
                                                <label class="form-label text-secondary">Tên Người Tải Lên</label>
                                                <select class="form-control">
                                                    <template v-for="(v, k) in list_tai_len">
                                                        <option>
                                                            <!-- {{ v.nguoi_tai_len }} -->
                                                        </option>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="mb-1">
                                                <label class="form-label text-secondary">Tác Giả</label>
                                                <select class="form-control">
                                                    <template v-for="(v, k) in list_tac_gia">
                                                        <option>
                                                            <!-- {{ v.ten_tac_gia }} -->
                                                        </option>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="mb-1">
                                                <label class="form-label text-secondary">Ngày</label>
                                                <input class="form-control" type="datetime-local">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="mb-1">
                                                <label class="form-label text-secondary">Quốc Gia</label>
                                                <select class="form-control">
                                                    <template v-for="(v, k) in list_quoc_gia">
                                                        <option>
                                                            <!-- {{ v.ten_quoc_gia }} -->
                                                        </option>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-1">
                                        <label class="form-label text-secondary">Mô Tả</label>
                                        <textarea class="form-control" placeholder="Nhập Vào Mô Tả" cols="30"
                                            rows="7"></textarea>
                                    </div>
                                </template>
                                <template v-if="temp == 1">
                                    <div class="row">
                                        <div class="col-4">
                                            <table class="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td colspan="100%">
                                                            <div class="input-group mb-1">
                                                                <input type="text" class="form-control"
                                                                    placeholder="Recipient's username"
                                                                    aria-label="Recipient's username"
                                                                    aria-describedby="basic-addon2">
                                                                <button class="input-group-text btn btn-secondary"><i
                                                                        class="fa-solid fa-magnifying-glass"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr class="text-center text-nowrap align-middle">
                                                        <th>Tên Diễn Viên</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    <tr class="text-nowrap align-middle">
                                                        <td>
                                                            lorem-ipsum is a JavaScript module
                                                        </td>
                                                        <td>
                                                            <input class="form-check-input ml-3" type="checkbox"
                                                                value="id_dien_vien"
                                                                aria-label="Checkbox for following text input">
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="col-8">
                                            <div class="input-group mb-3">
                                                <input type="text" placeholder="Nhập Vào Tên Diễn Viên"
                                                    class="form-control">
                                                <button class=" btn btn-primary">
                                                    Thêm Mới
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template v-if="temp == 2">
                                    <div class="row">
                                        <div class="col-6">
                                            <table class="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td colspan="100%">
                                                            <div class="input-group mb-3">
                                                                <input type="text" class="form-control"
                                                                    placeholder="Recipient's username"
                                                                    aria-label="Recipient's username"
                                                                    aria-describedby="basic-addon2">
                                                                <button class="input-group-text btn btn-secondary"><i
                                                                        class="fa-solid fa-magnifying-glass"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr class="text-center text-nowrap align-middle">
                                                        <th>Thể Loại</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    <tr class="text-nowrap align-middle">
                                                        <td>
                                                            lorem-ipsum is a JavaScript module
                                                        </td>
                                                        <td>
                                                            <input class="form-check-input ml-3" type="checkbox"
                                                                value="id_dien_vien"
                                                                aria-label="Checkbox for following text input">
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="col-6">
                                        </div>
                                    </div>
                                </template>
                            </div>
                            <div class="modal-footer">
                                <button v-on:click="temp = 1" type="button" class="btn btn-primary">Thêm
                                    Diễn Viên</button>
                                <button v-on:click="temp = 2" type="button" class="btn btn-info">Thêm
                                    Thể Loại</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" disabled>Thêm
                                    Mới</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="SuaPhim" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl" style="background-color: white;">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    <h4 class="text-secondary">
                                        Thêm Mới Phim
                                    </h4>
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-start">
                                <template v-if="temp == 0">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="mb-1">
                                                <label class="form-label text-secondary">Tên Phim</label>
                                                <input type="text" placeholder="Nhập Vào Tên phim" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="mb-1">
                                                <label class="form-label text-secondary">Ngôn Ngữ</label>
                                                <select class="form-control">
                                                    <template v-for="(v, k) in list_ngon_ngu">
                                                        <option>
                                                            <!-- {{ v.ten_ngon_ngu }} -->
                                                        </option>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="mb-1">
                                                <label class="form-label text-secondary">Hình Ảnh</label>
                                                <input type="text" class="form-control" placeholder="Nhập Vào Link Ảnh">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="mb-1">
                                                <label class="form-label text-secondary">Tên Người Tải Lên</label>
                                                <select class="form-control">
                                                    <template v-for="(v, k) in list_tai_len">
                                                        <option>
                                                            <!-- {{ v.nguoi_tai_len }} -->
                                                        </option>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="mb-1">
                                                <label class="form-label text-secondary">Tác Giả</label>
                                                <select class="form-control">
                                                    <template v-for="(v, k) in list_tac_gia">
                                                        <option>
                                                            <!-- {{ v.ten_tac_gia }} -->
                                                        </option>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="mb-1">
                                                <label class="form-label text-secondary">Ngày</label>
                                                <input class="form-control" type="datetime-local">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="mb-1">
                                                <label class="form-label text-secondary">Quốc Gia</label>
                                                <select class="form-control">
                                                    <template v-for="(v, k) in list_quoc_gia">
                                                        <option>
                                                            <!-- {{ v.ten_quoc_gia }} -->
                                                        </option>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-1">
                                        <label class="form-label text-secondary">Mô Tả</label>
                                        <textarea class="form-control" placeholder="Nhập Vào Mô Tả" cols="30"
                                            rows="7"></textarea>
                                    </div>
                                </template>
                                <template v-if="temp == 1">
                                    <div class="row">
                                        <div class="col-4">
                                            <table class="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td colspan="100%">
                                                            <div class="input-group mb-1">
                                                                <input type="text" class="form-control"
                                                                    placeholder="Recipient's username"
                                                                    aria-label="Recipient's username"
                                                                    aria-describedby="basic-addon2">
                                                                <button class="input-group-text btn btn-secondary"><i
                                                                        class="fa-solid fa-magnifying-glass"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr class="text-center text-nowrap align-middle">
                                                        <th>Tên Diễn Viên</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    <tr class="text-nowrap align-middle">
                                                        <td>
                                                            lorem-ipsum is a JavaScript module
                                                        </td>
                                                        <td>
                                                            <input class="form-check-input ml-3" type="checkbox"
                                                                value="id_dien_vien"
                                                                aria-label="Checkbox for following text input">
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="col-8">
                                            <div class="input-group mb-3">
                                                <input type="text" placeholder="Nhập Vào Tên Diễn Viên"
                                                    class="form-control">
                                                <button class=" btn btn-primary">
                                                    Thêm Mới
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template v-if="temp == 2">
                                    <div class="row">
                                        <div class="col-6">
                                            <table class="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td colspan="100%">
                                                            <div class="input-group mb-3">
                                                                <input type="text" class="form-control"
                                                                    placeholder="Recipient's username"
                                                                    aria-label="Recipient's username"
                                                                    aria-describedby="basic-addon2">
                                                                <button class="input-group-text btn btn-secondary"><i
                                                                        class="fa-solid fa-magnifying-glass"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr class="text-center text-nowrap align-middle">
                                                        <th>Thể Loại</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    <tr class="text-nowrap align-middle">
                                                        <td>
                                                            lorem-ipsum is a JavaScript module
                                                        </td>
                                                        <td>
                                                            <input class="form-check-input ml-3" type="checkbox"
                                                                value="id_dien_vien"
                                                                aria-label="Checkbox for following text input">
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="col-6">
                                        </div>
                                    </div>
                                </template>
                            </div>
                            <div class="modal-footer">
                                <button v-on:click="temp = 1" type="button" class="btn btn-primary">Thêm
                                    Diễn Viên</button>
                                <button v-on:click="temp = 2" type="button" class="btn btn-info">Thêm
                                    Thể Loại</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" disabled>Thêm
                                    Mới</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="modal fade" id="XoaPhim" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" style="background-color: white;">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    <h4 class="text-secondary">
                                        Xóa Phim
                                    </h4>
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-center">
                                <div class="alert alert-danger" role="alert">
                                    Bạn Có Chắc Muốn Xóa <!-- {{ delete.ten_phim }} --> Phim Này !!!
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="motaPhim" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" style="background-color: white;">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    <h4 class="text-secondary">
                                        Mô Tả Phim
                                    </h4>
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-start text-dark ">
                                <textarea disabled name="" id="" cols="100" rows="5">Mô tả: "Trapped in a dystopian future, a lone hero must navigate a world plagued by
                                    corruption and chaos. Faced with moral dilemmas and unexpected allies, they embark on a
                                    thrilling journey to uncover the truth and bring about change. Packed with suspense and
                                    unexpected twists, this film explores the resilience of the human spirit in the face of
                                    adversity."</textarea>
                                <hr>
                                <!-- {{ update_phim.mo_ta }} -->
                                <div class="row">
                                    <div class="col-3">
                                        <b>
                                            <p> <i class="fa-solid fa-calendar-days"></i> Ngày Phát Hành: </p>
                                        </b>
                                        <hr>
                                        <b>
                                            <p> <i class="fa-solid fa-language"></i> Ngôn Ngữ Gốc: </p>
                                        </b>
                                        <hr>
                                        
                                    </div>
                                    <div class="col-6">
                                        <b>
                                            a
                                            <!-- <p> {{ v.ngay }} </p> -->
                                        </b>
                                        <hr>
                                        <b>
                                            z
                                            <!-- <p> {{v.ngon_ngu_goc}} </p> -->
                                        </b>
                                        <hr>
                                        
                                    </div>
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            </div>
                        </div>
                    </div>
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
            list_tai_len     :   {},
            list_tac_gia     :   {},
            list_ngon_ngu    :   {},
            edit_movie       :   {},

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
        doiTrangThai(v) {
            axios
                    .post('http://127.0.0.1:8000/api/admin/nhan-vie/doi-trang-thai-nhan-vien', v)
                    .then((res) =>  {
                        if(res.data.status == true) {
                            this.loadDataNhanVien();
                        }
                        else{
                            toaster.error(res.data.message);

                        }
                    });
        }
    },
}
</script>
<style></style>