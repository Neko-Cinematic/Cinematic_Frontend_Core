<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="../assets/admin/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <!-- <li class="nav-item" style="background-color: #AB826B;">
                    <a class="nav-link text-light" href="./ban.html">
                        <div class="parent-icon"><i class="fa-solid fa-couch"></i>
                        </div>
                        <div class="menu-title">Quản Lý Bàn</div>
                    </a>
                </li> -->
                <li class="nav-item">
                    <!-- <router-link to="/admin/danh-gia-phim">
                        <a href="/admin/danh-gia-phim" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-solid fa-list"></i>
                            </div>
                            <div class="menu-title">Đánh Giá Phim</div>
                        </a>
                    </router-link> -->
                    <!-- <router-link to="/admin/hinh-anh">
                        <a href="/admin/hinh-anh" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-solid fa-image"></i>
                            </div>
                            <div class="menu-title">Hình Ảnh</div>
                        </a>
                    </router-link> -->
                    <router-link to="/admin/phim">
                        <a href="/admin/phim" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-solid fa-film"></i>
                            </div>
                            <div class="menu-title">Phim</div>
                        </a>
                    </router-link>
                    <router-link to="/admin/quyen">
                        <a href="/admin/quyen" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-solid fa-globe"></i>
                            </div>
                            <div class="menu-title">Quyền</div>
                        </a>
                    </router-link>
                    <router-link to="/admin/dien-vien">
                        <a href="/admin/dien-vien" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-solid fa-masks-theater"></i>
                            </div>
                            <div class="menu-title">Diễn Viên</div>
                        </a>
                    </router-link>
                    <router-link to="/admin/quoc-gia">
                        <a href="/admin/quoc-gia" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-solid fa-flag"></i>
                            </div>
                            <div class="menu-title">Thành Phố</div>
                        </a>
                    </router-link>
                    <router-link to="/admin/nhan-vien">
                        <a href="/admin/nhan-vien" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-solid fa-person"></i>
                            </div>
                            <div class="menu-title">Nhân Viên</div>
                        </a>
                    </router-link>
                    <router-link to="/admin/ngon-ngu">
                        <a href="/admin/ngon-ngu" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-solid fa-language"></i>
                            </div>
                            <div class="menu-title">Ngôn Ngữ</div>
                        </a>
                    </router-link>
                    <router-link to="/admin/tac-gia">
                        <a href="/admin/tac-gia" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-solid fa-user-tie"></i>
                            </div>
                            <div class="menu-title">Tác Giả</div>
                        </a>
                    </router-link>
                    <router-link to="/admin/nguoi-dung">
                        <a href="/admin/nguoi-dung" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-solid fa-clipboard-question"></i>
                            </div>
                            <div class="menu-title">Khách Hàng</div>
                        </a>
                    </router-link>
                    <router-link to="/admin/tap">
                        <a href="/admin/tap" class="nav-link">
                            <div class="parent-icon">
                                <i class="fa-regular fa-clone"></i>
                            </div>
                            <div class="menu-title">Tập</div>
                        </a>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>