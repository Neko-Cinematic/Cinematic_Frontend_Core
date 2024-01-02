<template>
  <div class="body1">
    <div class="container1" id="container1">
      <div class="form-container1 sign-up">
        <form>
          <img src="../../assets/assets_auth/images/2.png" alt="" style="width: 60%;" />
          <h1 class="text-auth"><b>Tạo Tài Khoản</b></h1>
          <div class="social-icons">
            <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
            <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
            <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
          <input type="text" placeholder="Họ Và Tên" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mật Khẩu" />
          <button>Đăng Kí</button>
        </form>
      </div>
      <!-- s -->
      <div class="form-container1 sign-in">
        <form>
          <img src="../../assets/assets_auth/images/2.png" alt="" style="width: 60%;  margin-top: 0px;" />
          <h1 class="text-auth"><b>Đăng Nhập</b></h1>
          <div class="social-icons">
            <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
            <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
            <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mật Khẩu" />
          <a href="#">Quên Mật Khẩu?</a>
          <button>Đăng Nhập</button>
        </form>
      </div>
      <div class=" toggle-container">
        <div class="toggle">
          <div class="toggle-panel toggle-left">
            <h1>Chào Mừng Trở Lại!</h1>
            <p>
              Nhập thông tin cá nhân của bạn để sử dụng tất cả các tính năng của
              trang web
            </p>
            <button class="" id="login" style="  background-color: #ca4153;
            color: #fff;">Đăng Nhập</button>
          </div>
          <div class="toggle-panel toggle-right">
            <h1>Xin Chào !</h1>
            <p>
              Đăng ký với thông tin cá nhân của bạn để sử dụng tất cả các tính
              năng của trang web
            </p>
            <button class="" id="register" style="  background-color: #ca4153;
            color: #fff;">Đăng Kí</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const container = document.getElementById('container1');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    console.log(container);
    registerBtn.addEventListener('click', () => {
      container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
      container.classList.remove("active");
    });
  },
}
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");
@import "../../assets/assets_auth/styles/Login.css";
</style>