<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card border-0">
                <div class="card-header" style="background-color: #AB826B; color:white;">
                    <h4 class="text-start text-secondary">
                        <div class="mb-0">
                            <b style="color:white">Thêm Diễn Viên </b>
                        </div>
                    </h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            <label class="text-secondary">Tên Diễn Viên</label>
                            <input type="text" placeholder="Nhập Vào Tên Diễn Viên" class="form-control"
                                v-model="create_dien_vien.name">
                        </div>
                        <div class="col-md-12 mt-3">
                            <label class="text-secondary">Ảnh Diễn Viên</label>
                            <input type="text" placeholder="Nhập Vào Ảnh Diễn Viên" class="form-control"
                                v-model="create_dien_vien.url">
                        </div>
                    </div>


                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary" v-on:click="createActor()">
                        Thêm Mới
                    </button>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card">
                <div class="card-header text-start" style="background-color: #AB826B; color:white;">
                    <h3 class="text-light fw-bold text-start">Danh Sách Diễn Viên </h3>
                </div>
                <div class="card-body">
                    <table class="table table-bordered bg-white">
                        <thead>
                            <tr>
                                <th class="text-center align-middle text-nowrap"
                                    style="background-color: #AB826B; color:white;">
                                    STT
                                </th>
                                <th class="text-center align-middle text-nowrap"
                                    style="background-color: #AB826B; color:white;">
                                    Hình Ảnh
                                </th>
                                <th class="text-center align-middle text-nowrap"
                                    style="background-color: #AB826B; color:white;">
                                    Tên Diễn Viên
                                </th>
                                <th class="text-center align-middle text-nowrap"
                                    style="background-color: #AB826B; color:white;">
                                    Phim Đã Đóng
                                </th>
                                <th class="text-center align-middle text-nowrap"
                                    style="background-color: #AB826B; color:white;">
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
                                        <img v-bind:src="v.url" style="width: 120px; height: 120px; object-fit: cover;"
                                            class="circle p-2 border">
                                    </td>
                                    <td class="text-center align-middle text-nowrap">
                                        <b>
                                            {{ v.name }}
                                        </b>
                                    </td>
                                    <td class="text-center align-middle ">
                                        <b>
                                            {{ v.list_phim }}
                                        </b>
                                    </td>
                                    <td class="text-center text-nowrap align-middle">
                                        <i data-bs-toggle="modal" data-bs-target="#SuaPhim"
                                            class=" me-2 fs-4 text-light fa-solid fa-pen-to-square btn btn-primary"
                                            v-on:click="Object.assign(update_dien_vien, v)"></i>
                                        <i data-bs-toggle="modal" data-bs-target="#XoaPhim"
                                            class="fs-4 text-light fa-solid fa-trash btn btn-danger"
                                            v-on:click="Object.assign(delete_dien_vien, v)"></i>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
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
                            <input type="text" placeholder="Nhập Vào Tên Diễn Viên" class="form-control"
                                v-model="update_dien_vien.name">
                            <label class="text-secondary">Ảnh Diễn Viên</label>
                            <input type="text" placeholder="Nhập Vào Ảnh Diễn Viên" class="form-control"
                                v-model="update_dien_vien.url">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                v-on:click="updateActor()">Xác Nhận</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="XoaPhim" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog bg-white">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-secondary" id="exampleModalLabel">Xóa diễn viên
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center text-secondary">
                            <div class="alert alert-danger" role="alert">
                                Bạn Có Chắc Muốn Xóa <b>{{ delete_dien_vien.actor_name }}</b> Này Chứ
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                v-on:click="deleteActor()">Xóa</button>
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
            list_dien_vien: [],
            create_dien_vien: {},
            delete_dien_vien: {},
            update_dien_vien: {
            },
        }
    },
    mounted() {
        this.loadDataActor();
    },
    methods: {
        loadDataActor() {
            axios
                .post('http://127.0.0.1:8000/api/admin/actor/get-data')
                .then((res) => {
                    this.list_dien_vien = res.data;
                    console.log(res);
                });
        },

        createActor() {
            axios
                .post('http://127.0.0.1:8000/api/admin/actor/create', this.create_dien_vien)
                .then((res) => {
                    if (res.data.status === true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataActor();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },


        deleteActor() {
            axios
                .post('http://127.0.0.1:8000/api/admin/actor/delete', this.delete_dien_vien)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataActor();
                    }
                    else {
                        // console.log(this.delete_khach_hang.id);
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },

        updateActor() {
            // console.log(this.update_dien_vien);
            axios
                .post('http://127.0.0.1:8000/api/admin/actor/update', this.update_dien_vien)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataActor();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },

    },
}
</script>
<style></style>