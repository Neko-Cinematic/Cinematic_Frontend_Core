<template>
    <div class="row mt-4">

        <div class="card mt-3">

            <div class="row">
                <div class="d-flex justify-content-between">
                    <h2 class="text-start">
                        <div class="mt-3">

                            <b class="text-start text-secondary">
                                Quản Lý Người Dùng
                            </b>

                        </div>
                    </h2>
                </div>
            </div>
            <div class="card-body">
                <div class="card">
                    <div class="card-body">
                        <div class="d-lg-flex align-items-center mb-4 gap-3">
                        </div>
                        <div class="table-responsive">
                            <table class="table mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th class="text-center align-middle text-nowrap">ID</th>
                                        <th class="text-center align-middle text-nowrap">Tên Khách</th>
                                        <th class="text-center align-middle text-nowrap">Email</th>
                                        <th class="text-center align-middle text-nowrap">Password</th>
                                        <th class="text-center align-middle text-nowrap">Tình Trạng</th>
                                        <th class="text-center align-middle text-nowrap">Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(v, k) in list_khach_hang">
                                        <tr>
                                            <td class="text-center align-middle text-nowrap">{{ k + 1 }}</td>
                                            <td class="text-center align-middle text-nowrap">{{ v.ten_khach_hang }}</td>
                                            <td class="text-center align-middle text-nowrap">{{ v.email }}</td>
                                            <td class="text-center align-middle text-nowrap">{{ v.password }}</td>
                                            <td class="text-center align-middle text-nowrap">{{ v.tinh_trang }}</td>
                                            <td class="text-center text-nowrap align-middle">
                                                <i class="fa-solid fa-circle-info fa-2x text-info me-2"
                                                    data-bs-toggle="modal" data-bs-target="#ThongTinKhach"></i>
                                                <i data-bs-toggle="modal" data-bs-target="#xoaKhachHang"
                                                    class="fa-2x text-danger fa-solid fa-trash"></i>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                            <div class="modal fade" id="xoaKhachHang" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header ">
                                            <h1 class="modal-title fs-5 text-secondary" id="exampleModalLabel">
                                                <p>Xóa Khách
                                                    Hàng</p>
                                            </h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body text-secondary">
                                            <div class="alert alert-danger" role="alert">
                                                Bạn Có Muốn Xóa <b> <!-- {{ delete_khach.ten_khach_hang }} --> </b> Này
                                                Không!!!
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Đóng</button>
                                            <button data-bs-dismiss="modal" type="button"
                                                class="btn btn-danger">Xóa</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="ThongTinKhach" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header text-secondary">
                                            <h1 class="modal-title fs-5 text-secondary" id="exampleModalLabel">
                                                <p> Thông Tin
                                                    Khách Hàng</p>
                                            </h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Đây Là Thông Tin Khách Hàng
                                            <!-- <template v-for="(v, k) in list_khach_hang">
                                        <tr>
                                            <td class="text-center align-middle text-nowrap">{{ k + 1 }}</td>
                                            <td>{{ v.ten_khach_hang }}</td>
                                            <td>{{ v.email }}</td>
                                            <td>{{ v.password }}</td>
                                            <td class="text-center text-nowrap align-middle">
                                                <i class="fa-solid fa-circle-info" data-bs-toggle="modal"
                                                    data-bs-target="#ThongTinKhach"></i>
                                                <i data-bs-toggle="modal" data-bs-target="#xoaKhachHang"
                                                    class="fa-2x text-danger fa-solid fa-trash"></i>
                                            </td>
                                        </tr>
                                    </template> -->
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Đóng</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <hr>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list_khach_hang: [
                {
                    'ten_khach_hang': "Nguyễn Quốc Long",
                    'email': "quoclongdng@gmail.com",
                    'password': "123456"
                },
                {
                    'ten_khach_hang': "Nguyễn Quốc Long",
                    'email': "quoclongdng@gmail.com",
                    'password': "123456"
                },
                {
                    'ten_khach_hang': "Nguyễn Quốc Long",
                    'email': "quoclongdng@gmail.com",
                    'password': "123456"
                },
                {
                    'ten_khach_hang': "Nguyễn Quốc Long",
                    'email': "quoclongdng@gmail.com",
                    'password': "123456"
                },
                {
                    'ten_khach_hang': "Nguyễn Quốc Long",
                    'email': "quoclongdng@gmail.com",
                    'password': "123456"
                },
            ]
        }
    }, mounted() {

    },
    methods: {

    },
}
</script>
<style></style>