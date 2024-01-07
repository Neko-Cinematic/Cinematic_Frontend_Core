<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="d-flex justify-content-between">
                            <h2 class="text-start">
                                <div class="">
                                    <b class="text-start text-secondary">
                                        Quản Lý Đánh Giá
                                    </b>
                                </div>
                            </h2><button type="button text-end" data-bs-toggle="modal" data-bs-target="#addngonNgu"
                                class="btn btn-outline-primary">Thêm Mới Ngôn Ngữ</button>
                        </div>
                    </div>
                </div>
                <div class="card-body" style="background-color: white;">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th class="text-center align-middle" style="background-color: #AB826B; color:white;"> 
                                    STT
                                </th>
                                <th class="text-center align-middle" style="background-color: #AB826B; color:white;"> 
                                    Ngôn Ngữ
                                </th>
                                <th class="text-center align-middle" style="background-color: #AB826B; color:white;"> 
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(v, k) in list_ngon_ngu">
                                <tr>
                                    <td class="text-center align-middle">
                                        {{ k + 1 }}
                                    </td>
                                    <td class="text-center align-middle">
                                        {{ v.ten_ngon_ngu }}
                                    </td>
                                    <td class="text-center text-nowrap align-middle">
                                        <i data-bs-toggle="modal" data-bs-target="#SuaTacGia"
                                            class=" me-2 fa-2x text-info fa-solid fa-pen-to-square"></i>
                                        <i data-bs-toggle="modal" data-bs-target="#XoaTacGia"
                                            class="fa-2x text-danger fa-solid fa-trash"></i>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                        <div class="modal fade" id="XoaTacGia" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog bg-white">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-secondary" id="exampleModalLabel">Xóa Ngôn Ngữ</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show">
                                            <div class="text-white">Bạn có Muốn Xóa
                                                <!-- {{ delete_ngon_ngu.ten_ngon_ngu }} --> Này Không!!!!
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-warning">Chấp Nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="SuaTacGia" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog bg-white">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-secondary" id="exampleModalLabel">Cập Nhật Ngôn Ngữ
                                        </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <label>Tên Ngôn Ngữ</label>
                                        <input class="form-control" type="text" placeholder="Nhập Vào Ngôn Ngữ">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Chấp Nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="addngonNgu" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog bg-white">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-secondary" id="exampleModalLabel">Thêm Ngôn Ngữ
                                        </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <label>Tên Ngôn Ngữ</label>
                                        <input class="form-control" type="text" placeholder="Nhập Vào Ngôn Ngữ">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Xác Nhận</button>
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
            list_ngon_ngu: [
                {
                    'ten_ngon_ngu': 'English',
                },
                {
                    'ten_ngon_ngu': 'Korean',
                },
                {
                    'ten_ngon_ngu': 'Eps',
                },
                {
                    'ten_ngon_ngu': 'Indian',
                },
                {
                    'ten_ngon_ngu': 'Laos',
                },
                {
                    'ten_ngon_ngu': 'ThaiLand',
                },
            ],
            create_ngon_ngu: {},
            delete_ngon_ngu: {},
            update_ngon_ngu: {},
        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>
<style></style>