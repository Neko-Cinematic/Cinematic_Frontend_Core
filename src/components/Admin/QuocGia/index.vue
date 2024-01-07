<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card border-0">
                <div class="card-header" style="background-color: #AB826B; color:white;">
                    <p class="text-light" style="font-size: large;">
                        Thêm Quốc Gia
                    </p>
                </div>
                <div class="card-body">
                    <label class="text-secondary">Tên Quốc Gia</label>
                    <input type="text" placeholder="Nhập Vào Tên Quốc Gia" class="form-control">
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary">
                        Thêm Mới Quốc Gia
                    </button>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card">
                <div class="card-header" style="background-color: #AB826B; color:white;">
                 <h3 class="text-start fw-bold">Danh Sách Quốc Gia</h3>
                </div>
                <div class="card-body">
                    <table class="table table-bordered bg-white">
                <thead>
                    <tr>
                        <th class="text-center align-middle text-nowrap" style="background-color: #AB826B; color:white;">
                            STT
                        </th>
                        <th class="text-center align-middle text-nowrap" style="background-color: #AB826B; color:white;">
                            Tên Quốc Gia
                        </th>
                        <th class="text-center align-middle text-nowrap" style="background-color: #AB826B; color:white;">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(v, k) in list_quoc_gia">
                        <tr>
                            <td class="text-center align-middle text-nowrap">
                                {{ k + 1 }}
                            </td>
                            <td class="text-center align-middle text-nowrap">
                                {{ v.ten_quoc_gia }}
                            </td>
                            <td class="text-center text-nowrap align-middle">
                                <i data-bs-toggle="modal" data-bs-target="#capnhat"
                                    class=" me-2 fa-2x text-info fa-solid fa-pen-to-square"></i>
                                <i data-bs-toggle="modal" data-bs-target="#Xoa"
                                    class="fa-2x text-danger fa-solid fa-trash"></i>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
                </div>
            </div>
            <div class="modal fade" id="capnhat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header text-secondary">
                            <h1 class="modal-title fs-5 text-secondary " id="exampleModalLabel">Sửa Quốc Gia</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label class="text-secondary">Tên Quốc Gia</label>
                            <input type="text" placeholder="Nhập Vào Tên Quốc Gia" class="form-control">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Thay Đổi</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="Xoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header text-secondary">
                            <h1 class="modal-title fs-5 text-secondary" id="exampleModalLabel">Xóa Quốc Gia Này</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                            <div class="alert alert-danger" role="alert">
                                Bạn Có Chắc Muốn Xóa <b><!-- {{ delete_quoc_gia.ten_quoc_gia }} --></b> Này
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xác Nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list_quoc_gia: [
                {
                    "ten_quoc_gia": "American",
                },
                {
                    "ten_quoc_gia": "Hàn Quốc",
                },
                {
                    "ten_quoc_gia": "Trung Quốc",
                },
                {
                    "ten_quoc_gia": "Nhật Bản",
                },
                {
                    "ten_quoc_gia": "Ấn Độ",
                },
                {
                    "ten_quoc_gia": "Việt Nam",
                },
                {
                    "ten_quoc_gia": "Đông Phương",
                },
            ],
            create_quoc_gia: {},
            delete_quoc_gia: {},
            update_quoc_gia: {},
        }
    },
    mounted() {

    },
    methods: {

    },

}
</script>
<style></style> 