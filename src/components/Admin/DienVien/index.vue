<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header text-secondary">
                    <h4 class="text-start text-secondary">
                        <div class="mt-3">

                            <b>Quản lý đơn hàng</b>

                        </div>
                    </h4>
                </div>
                <div class="card-body">
                    <label class="text-secondary">Tên Diễn Viên</label>
                    <input type="text" placeholder="Nhập Vào Tên Diễn Viên" class="form-control">
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary">
                        Thêm Mới
                    </button>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="table-responsive">
                <table class="table table-bordered bg-white">
                    <thead>
                        <tr>
                            <th class="text-center align-middle text-nowrap">
                                STT
                            </th>
                            <th class="text-center align-middle text-nowrap">
                                Hình Ảnh
                            </th>
                            <th class="text-center align-middle text-nowrap">
                                Tên Diễn Viên
                            </th>
                            <th class="text-center align-middle text-nowrap">
                                Phim Đã Đóng
                            </th>
                            <th class="text-center align-middle text-nowrap">
                                Tình Trạng
                            </th>
                            <th class="text-center align-middle text-nowrap">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(v, k) in list_dien_vien">
                            <tr>
                                <td class="text-center align-middle text-nowrap">
                                    {{ k + 1 }}
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <img v-bind:src="v.hinh_anh" style="width: 120px;" class="circle p-2 border">
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <b>
                                        {{ v.ten_dien_vien }}
                                    </b>
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <b>
                                        {{ v.phim_da_dong }}
                                    </b>
                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <b>
                                        {{ v.tinh_trang }}
                                    </b>
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
                <div class="modal fade" id="SuaPhim" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog bg-white">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5 text-secondary" id="exampleModalLabel">Thêm Ngôn Ngữ
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label class="text-secondary">Tên Diễn Viên</label>
                                <input type="text" placeholder="Nhập Vào Tên Diễn Viên" class="form-control">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Xác Nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="XoaPhim" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog bg-white">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5 text-secondary" id="exampleModalLabel">Thêm Ngôn Ngữ
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-center text-secondary">
                                <div class="alert alert-danger" role="alert">
                                    Bạn Có Chắc Muốn Xóa <b><!-- {{ delete_dien_vien.ten_dien_vien }} --></b> Này Chứ
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            list_dien_vien: [
                {
                    'hinh_anh': 'https://th.bing.com/th/id/R.1a2336b68ed6f18a28aea8937467e412?rik=v043%2b4fPQZArQg&riu=http%3a%2f%2fcinemahok.com%2fwp-content%2fuploads%2f2021%2f03%2fphim-2021-chieu-rap-1037x1536.jpg&ehk=9l1IdhDNnZRrQDWlaLTopyNGet2U8YV6xELBsiGZu%2bQ%3d&risl=&pid=ImgRaw&r=0',
                    'ten_dien_vien': 'Trấn Thành',
                    'phim_da_dong': 'Tết Nhà Bà Nữ, Vợ Chồng Thằng Đậu',
                },
                {
                    'hinh_anh': 'https://th.bing.com/th/id/R.89ae29c6c4475f86b75d5309ee73127a?rik=Dz1RPieCCLf7kQ&riu=http%3a%2f%2fnguoi-noi-tieng.com%2fphoto%2ftruong-giang-sam-vai-chinh-ten-dong-trong-bo-phim-hai-49-ngay-2353.jpg&ehk=XVuvLg4qSgpb12q3P5Nd563AL4SH3FcnkCeuyzRKyxI%3d&risl=&pid=ImgRaw&r=0',
                    'ten_dien_vien': 'Trường Giang',
                    'phim_da_dong': 'Tết Nhà Bà Nữ, Vợ Chồng Thằng Đậu',
                },
                {
                    'hinh_anh': 'https://th.bing.com/th/id/R.6605b3e3c2d95dc99984f0cb66080e3b?rik=G1BZ0lSMOwxx8A&pid=ImgRaw&r=0',
                    'ten_dien_vien': 'Minh Tuấn',
                    'phim_da_dong': 'Tết Nhà Bà Nữ, Vợ Chồng Thằng Đậu',
                },
                {
                    'hinh_anh': 'https://th.bing.com/th/id/OIP.RstCRmTo3MuzD0kGO9koAAHaKn?rs=1&pid=ImgDetMain',
                    'ten_dien_vien': 'Mười Khó',
                    'phim_da_dong': 'Tết Nhà Bà Nữ, Vợ Chồng Thằng Đậu',
                },
            ],
        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>
<style></style>