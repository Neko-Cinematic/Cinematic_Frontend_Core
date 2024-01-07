<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" style="background-color: white;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                <h4 class="text-secondary">
                                    Thêm Mới Nhân Viên
                                </h4>
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-start">
                            <label class="text-secondary">Tên Nhân Viên</label>
                            <input class="form-control" type="text" placeholder="Nhập Vào Tên Nhân Viên">
                            <label class="text-secondary">Email</label>
                            <input class="form-control" type="mail" placeholder="Nhập Email">
                            <label class="text-secondary">Mật Khẩu</label>
                            <input class="form-control" type="password" placeholder="Nhập Vào Mật Khẩu">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác Nhận</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="d-flex justify-content-between">
                            <h2 class="text-start">
                                <div class="">
                                    <b class="text-start text-secondary">
                                        Quản Lý Nhân Viên
                                    </b>

                                </div>
                            </h2><button type="button text-end" data-bs-toggle="modal" data-bs-target="#addModal"
                                class="btn btn-outline-primary">Thêm Mới Nhân Viên</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered bg-white">
                        <thead class="table-light">
                            <tr>
                                <th class="text-center align-middle" style="background-color: #AB826B; color:white;">
                                    STT
                                </th>
                                <th class="text-center align-middle" style="background-color: #AB826B; color:white;">
                                    Tên Nhân Viên
                                </th>
                                <th class="text-center align-middle" style="background-color: #AB826B; color:white;">
                                    Email
                                </th>
                                <th class="text-center align-middle" style="background-color: #AB826B; color:white;">
                                    Mật Khẩu
                                </th>
                                <th class="text-center align-middle" style="background-color: #AB826B; color:white;">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v, k) in list_nhan_vien">
                                <tr>
                                    <td class="text-center align-middle">
                                        {{ k + 1 }}
                                    </td>
                                    <td class="text-center align-middle">
                                        {{ v.ten_nhan_vien }}
                                    </td>
                                    <td class="text-center align-middle">
                                        {{ v.email }}
                                    </td>
                                    <td class="text-center align-middle">
                                        {{ v.password }}
                                    </td>
                                    <td class="text-center text-nowrap align-middle">
                                        <i data-bs-toggle="modal" data-bs-target="#SuaNhanVien"
                                            class=" me-2 fa-2x text-info fa-solid fa-pen-to-square"></i>
                                        <i data-bs-toggle="modal" data-bs-target="#XoaNhanVien"
                                            class="fa-2x text-danger fa-solid fa-trash"></i>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                        <div class="modal fade" id="SuaNhanVien" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog bg-white">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-secondary" id="exampleModalLabel">Cập Nhật Nhân
                                            Viên</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <label class="text-secondary">Tên Nhân Viên</label>
                                        <input class="form-control" type="text" placeholder="Nhập Vào Tên Nhân Viên">
                                        <label class="text-secondary">Email</label>
                                        <input class="form-control" type="mail" placeholder="Nhập Email">
                                        <label class="text-secondary">Mật Khẩu</label>
                                        <input class="form-control" type="password" placeholder="Nhập Vào Mật Khẩu">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Thay Đổi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="XoaNhanVien" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog bg-white">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-secondary" id="exampleModalLabel">Xóa Nhân Viên
                                        </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show">
                                            <div class="text-white">Bạn có muốn xóa
                                                <!-- {{ delete_nhan_vien.ten_nhan_vien }} -->
                                                Này Không!!
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </table>
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
            list_nhan_vien: [
                {
                    'ten_nhan_vien': "Võ Quốc Triệu",
                    'email': "quoctrieuzxc@gmail.com",
                    'password': "123123"
                },
                {
                    'ten_nhan_vien': "Khánh Trần",
                    'email': "khanhtran@gmail.com",
                    'password': "01283321221"
                },
                {
                    'ten_nhan_vien': "Văn Trọng",
                    'email': "vantrongtk@gmail.com",
                    'password': "0988009115"
                },
                {
                    'ten_nhan_vien': "Quang Huy",
                    'email': "quanghuy@gmail.com",
                    'password': "0911991223"
                },
                {
                    'ten_nhan_vien': "Minh Tuấn",
                    'email': "minhtuan@gmail.com",
                    'password': "0911134542"
                },
            ],
            delete_nhan_vien: {},
            create_nhan_vien: {},
            update_nhan_vien: {},
        }
    },
    mounted() {

    },
    methods: {


    },
}
</script>
<style></style>