<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="d-flex justify-content-between">
                            <div class="align-middle mt-2 text-secondary">
                                <h2 class="text-start">
                                    <div class="mt-3">

                                        <b class="text-start text-secondary">
                                            Quản Lý Tác Giả
                                        </b>

                                    </div>
                                </h2>
                            </div> <button type="button text-end" data-bs-toggle="modal" data-bs-target="#addModal"
                                class="btn btn-outline-primary">Thêm Tác Giả</button>
                        </div>
                    </div>
                </div>
                <div class="card-body" style="background-color: white;">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th class="text-center align-middle text-nowrap">
                                    STT
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Tên Tác Giả
                                </th>
                                <th class="text-center align-middle text-nowrap">
                                    Phim Đã Làm
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
                            <template v-for="(v, k) in list_tac_gia">
                                <tr>
                                    <td class="text-center align-middle">
                                        {{ k + 1 }}
                                    </td>
                                    <td class="text-center align-middle">
                                        {{ v.ten_tac_gia }}
                                    </td>
                                    <td class="text-center align-middle">
                                        {{ v.phim_da_lam }}
                                    </td>
                                    <td class="text-center align-middle">
                                        {{ v.tinh_trang }}
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
                                        <h1 class="modal-title fs-5 text-secondary" id="exampleModalLabel">Xóa Tác Giả</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show">
                                            <div class="text-white">Bạn có Muốn Xóa
                                                <!-- {{ delete_tac_gia.ten_tac_gia }} --> Này Không!!!!
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
                                        <input class="form-control" type="text" placeholder="Nhập Vào Tên Tác Giả">
                                        <label>Phim Đã Làm</label>
                                        <input class="form-control" type="text" placeholder="Nhập Vào Phim Đã Làm">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
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
                                        <input class="form-control" type="text" placeholder="Nhập Vào Tên Tác Giả">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
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
            list_tac_gia: [
                {
                    'ten_tac_gia': 'Võ Quốc Triệu',
                    'phim_da_lam': 'Mười Khó, Nhà Bà Nữ, Tèo Anh, Tèo Em'
                },
                {
                    'ten_tac_gia': 'Võ Quốc Triệu',
                    'phim_da_lam': 'Mười Khó, Nhà Bà Nữ, Tèo Anh, Tèo Em'
                },
                {
                    'ten_tac_gia': 'Võ Quốc Triệu',
                    'phim_da_lam': 'Mười Khó, Nhà Bà Nữ, Tèo Anh, Tèo Em'
                },
                {
                    'ten_tac_gia': 'Võ Quốc Triệu',
                    'phim_da_lam': 'Mười Khó, Nhà Bà Nữ, Tèo Anh, Tèo Em'
                },
                {
                    'ten_tac_gia': 'Võ Quốc Triệu',
                    'phim_da_lam': 'Mười Khó, Nhà Bà Nữ, Tèo Anh, Tèo Em'
                }, {
                    'ten_tac_gia': 'Võ Quốc Triệu',
                    'phim_da_lam': 'Mười Khó, Nhà Bà Nữ, Tèo Anh, Tèo Em'
                },
            ],
            create_tac_gia: {},
            delete_tac_gia: {},
            update_tac_gia: {},
        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>
<style></style>