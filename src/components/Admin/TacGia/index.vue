<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card" >
                <div class="card-header" >
                    <div class="row">
                        <div class="d-flex justify-content-between">
                            <div class="align-middle mt-2 text-secondary">
                                <h3 class="text-start">
                                    <div class="">
                                        <b class="text-start text-secondary">
                                            Quản Lý Tác Giả
                                        </b>

                                    </div>
                                </h3>
                            </div> <button type="button text-end" data-bs-toggle="modal" data-bs-target="#addModal"
                                class="btn btn-outline-primary">Thêm Tác Giả</button>
                        </div>
                    </div>
                </div>
                <div class="card-body" style="background-color: white;">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th class="text-center align-middle text-nowrap" style="background-color: #AB826B; color:white;">
                                    STT
                                </th>
                                <th class="text-center align-middle text-nowrap" style="background-color: #AB826B; color:white;">
                                    Ảnh Tác Giả
                                </th>
                                <th class="text-center align-middle text-nowrap" style="background-color: #AB826B; color:white;">
                                    Tên Tác Giả
                                </th>
                                <th class="text-center align-middle text-nowrap" style="background-color: #AB826B; color:white;">
                                    Phim Đã Làm
                                </th>
                                <th class="text-center align-middle text-nowrap" style="background-color: #AB826B; color:white;">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v, k) in list_tac_gia">
                                <tr>
                                    <td class="text-center align-middle">
                                        {{ k + 1 }}
                                    </td>
                                    <td class="text-center align-middle" style="width: 100px;">
                                        <img v-bind:src="v.url" alt="" style="width: 100%; height: 100%;">
                                    </td>
                                    <td class="text-center align-middle">
                                        {{ v.name }}
                                    </td>
                                    <td class="text-center align-middle">
                                        {{ v.original_name }}
                                    </td>
                                    <td class="text-center text-nowrap align-middle">
                                        <i data-bs-toggle="modal" data-bs-target="#SuaTacGia"
                                            class=" me-2 fa-2x text-info fa-solid fa-pen-to-square" v-on:click="Object.assign(update_tac_gia,v)"></i>
                                        <i data-bs-toggle="modal" data-bs-target="#XoaTacGia"
                                            class="fa-2x text-danger fa-solid fa-trash" v-on:click="Object.assign(delete_tac_gia, v); console.log(delete_tac_gia)" ></i>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                        <div class="modal fade" id="XoaTacGia" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog bg-white">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-secondary" id="exampleModalLabel">Xóa Tác Giả</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show">
                                            <div class="text-white">Bạn Có Muốn Xóa Tác Giả 
                                               <b class="text-capitalize"> {{ delete_tac_gia.name }} </b>
                                                Này Không!!!!
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button data-bs-dismiss="modal" type="button" class="btn btn-primary">Chỉnh
                                            Sửa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog bg-white">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-secondary" id="exampleModalLabel">Thêm Tác Giả</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <label>Tên Tác Giả</label>
                                        <input class="form-control" type="text" placeholder="Nhập Vào Tên Tác Giả"
                                            v-model="create_tac_gia.name">
                                        <label>Ảnh tác giả</label>
                                        <input class="form-control" type="text" placeholder="Nhập Vào Ảnh tác giả"
                                            v-model="create_tac_gia.url">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" data-bs-dismiss="modal" class="btn btn-primary" v-on:click="createAuthor()">Thêm mới</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="SuaTacGia" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog bg-white">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-secondary" id="exampleModalLabel">Cập Nhật Tác Giả
                                        </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <label>Tên Tác Giả</label>
                                        <input class="form-control" type="text" placeholder="Nhập Vào Tên Tác Giả" v-model="update_tac_gia.name">
                                        <label>Ảnh Tác Giả</label>
                                        <input class="form-control" type="text" placeholder="Nhập Vào Ảnh Tác Giả" v-model="update_tac_gia.url">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" class="btn btn-primary" v-on:click="updateAuthor()">Cập nhật</button>
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
            list_tac_gia: [],
            create_tac_gia: {},
            delete_tac_gia: {},
            update_tac_gia: {},
        }
    },
    mounted() {
        this.loadDataAuthor();
    },
    methods: {
        loadDataAuthor() {
            axios
                .post('http://127.0.0.1:8000/api/admin/author/get-data')
                .then((res) => {
                    this.list_tac_gia = res.data.data;
                    console.log(res.data);
                });
        },
        
        createAuthor() {
            axios
                .post('http://127.0.0.1:8000/api/admin/author/create', this.create_tac_gia)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                    }
                });
        },
        deleteAuthor() {
            axios
                .post('http://127.0.0.1:8000/api/admin/author/delete', this.delete_dien_vien)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataAuthor();
                    }
                    else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },

        updateAuthor() {
            axios
                .post('http://127.0.0.1:8000/api/admin/author/update', this.update_dien_vien)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataAuthor();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },
    },
}
</script>
<style></style>