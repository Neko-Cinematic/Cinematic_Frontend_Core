<template>
  <div class="card">
    <div class="card-body text-end">
      <h2 class="text-start text-secondary">
        <div class="mt-3">
          <b>QUẢN LÝ PHIM</b>
        </div>
      </h2>
      <button class="btn btn-outline-secondary mb-3" data-bs-toggle="modal" data-bs-target="#createModal">
        Thêm Mới Phim
      </button>
      <div class="table-responsive">
        <table class="table">
          <thead class="table-light">
            <tr>
              <th class="text-center text-nowrap">STT</th>
              <th class="text-center text-nowrap">Tên Phim</th>
              <th class="text-center text-nowrap">Hình Ảnh</th>
              <th class="text-center text-nowrap">Ngày công chiếu</th>
              <th class="text-center text-nowrap">Ngôn Ngữ Gốc</th>
              <th class="text-center text-nowrap">Quốc Gia</th>
              <th class="text-center text-nowrap">Tác Giả</th>
              <th class="text-center text-nowrap">Người Tải Lên</th>
              <th class="text-center text-nowrap">Diễn Viên</th>
              <th class="text-center text-nowrap">Mô Tả</th>
              <th class="text-center text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(v, k) in list_movie">
              <tr>
                <td class="text-center align-middle">
                  {{ k + 1 }}
                </td>
                <td class="text-center align-middle">
                  {{ v.original_name }}
                </td>
                <td class="text-center align-middle">
                  <img v-bind:src="v.url" style="width: 150px" />
                </td>
                <td class="text-center align-middle">
                  {{ v.date }}
                </td>
                <td class="text-center align-middle">
                  {{ v.language_name }}
                </td>
                <td class="text-center align-middle">
                  {{ v.country_name }}
                </td>
                <td class="text-center align-middle">
                  {{ v.author_name }}
                </td>
                <td class="text-center align-middle">
                  {{ v.user_name }}
                </td>
                <td class="text-center align-middle">
                  <i data-bs-toggle="modal" data-bs-target="#actorsModal"
                    class="fa-sharp fa-solid fa-person fa-2x text-info"></i>
                </td>
                <td class="text-center align-middle">
                  <i @click="description = v.description" data-bs-toggle="modal" data-bs-target="#descriptionModal"
                    class="fa-solid fa-circle-info fa-2x text-info"></i>
                </td>
                <td class="text-center text-nowrap align-middle">
                  <i @click="create_episode.id_movie = v.id; loadEpisode(v.id)" class="me-2 text-secondary fa-2x fa-solid fa-video" data-bs-toggle="modal" data-bs-target="#episodeModal"></i>
                  <i data-bs-toggle="modal" data-bs-target="#SuaPhim"
                    class="me-2 fa-2x text-info fa-solid fa-pen-to-square"></i>
                  <i data-bs-toggle="modal" data-bs-target="#XoaPhim" class="fa-2x text-danger fa-solid fa-trash"></i>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
        <div class="modal fade" id="actorsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" style="background-color: white">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  <h4 class="text-secondary">Diễn Viên</h4>
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row text-start">
                  <div class="col-3 text-secondary">
                    <b> Võ Quốc Triệu </b>
                    <p>Hwang Min Chu</p>
                  </div>
                  <div class="col-3 text-secondary">
                    <b> Nguyễn Trần Duy Khánh </b>
                    <p>Hwang Min Son</p>
                  </div>
                  <div class="col-3 text-secondary">
                    <b> Đoàn Võ Văn trọng </b>
                    <p>Hwang Min Su</p>
                  </div>
                  <div class="col-3 text-secondary">
                    <b> Nguyễn Văn Tuấn </b>
                    <p>Kim Cho In</p>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl" style="background-color: white">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  <h4 class="text-secondary">Thêm Mới Phim</h4>
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-start">
                <template v-if="status_c == 1">
                  <div class="row mb-2">
                    <div class="col-4">
                      <label class="form-label text-secondary">Tên Phim</label>
                      <input v-model="create_information.original_name" type="text" placeholder="Nhập Vào Tên phim" class="form-control" />
                    </div>
                    <div class="col-4">
                      <label class="form-label text-secondary">Ngày công chiếu</label>
                      <input v-model="create_information.date" class="form-control" type="date" />
                    </div>
                    <div class="col-4">
                      <label class="form-label text-secondary">Đạo Diễn</label>
                      <select v-model="create_information.id_author" class="form-control">
                        <option value="0">Vui lòng chọn đạo diễn...</option>
                        <template v-for="(v, k) in list_author">
                          <option v-bind:value="v.id">
                            {{ v.name }}
                          </option>
                        </template>
                      </select>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col-4">
                      <label class="form-label text-secondary">Ngôn Ngữ</label>
                      <select v-model="create_information.id_language_original" class="form-control">
                        <option value="0">Vui lòng chọn ngôn ngữ...</option>
                        <template v-for="(v, k) in list_language">
                          <option v-bind:value="v.id">
                            {{ v.name }}
                          </option>
                        </template>
                      </select>
                    </div>
                    <div class="col-4">
                      <label class="form-label text-secondary">Quốc Gia</label>
                      <select v-model="create_information.id_contries" class="form-control">
                        <option value="0">Vui lòng chọn quốc gia...</option>
                        <template v-for="(v, k) in list_country">
                          <option v-bind:value="v.id">
                            {{ v.name }}
                          </option>
                        </template>
                      </select>
                    </div>
                    <div class="col-4">
                      <label class="form-label text-secondary">Nhân viên đang tạo</label>
                      <select v-model="create_information.id_user_upload" class="form-control">
                        <option value="0">Vui lòng chọn người tải...</option>
                        <template v-for="(v, k) in list_employee">
                          <option v-bind:value="v.id">
                            {{ v.name }}
                          </option>
                        </template>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <label class="form-label text-secondary">Hình Ảnh</label>
                      <input type="file" @change="handleFileUploaded('image')" ref="image" class="form-control" />
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label text-secondary">Mô Tả</label>
                    <textarea v-model="create_information.description" class="form-control" placeholder="Mô tả phim..." cols="30" rows="7"></textarea>
                  </div>
                </template>
                <template v-if="status_c == 2">
                  <div class="row">
                    <div class="col-4">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td colspan="100%">
                              <div class="input-group mb-1">
                                <input type="text" class="form-control" placeholder="Recipient's username"
                                  aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <button class="input-group-text btn btn-secondary">
                                  <i class="fa-solid fa-magnifying-glass"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr class="text-center text-nowrap align-middle">
                            <th>Tên Diễn Viên</th>
                            <th>Action</th>
                          </tr>
                          <template v-for="(v, k) in list_actor">
                            <tr class="text-nowrap align-middle">
                            <td>{{ v.name }}</td>
                            <td>
                              <input v-model="v.choose" class="form-check-input ml-3" type="checkbox" v-bind:value="v.id"
                                aria-label="Checkbox for following text input" />
                            </td>
                          </tr>
                          </template>
                          
                        </tbody>
                      </table>
                    </div>
                    <div class="col-8">
                      <div class="input-group mb-3">
                        <input type="text" placeholder="Tên diễn viên..." class="form-control" />
                        <button class="btn btn-primary">Thêm Mới</button>
                      </div>
                    </div>
                  </div>
                </template>
                <template v-if="status_c == 3">
                  <div class="row">
                    <div class="col-6">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td colspan="100%">
                              <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Recipient's username"
                                  aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <button class="input-group-text btn btn-secondary">
                                  <i class="fa-solid fa-magnifying-glass"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr class="text-center text-nowrap align-middle">
                            <th>Thể Loại</th>
                            <th>Action</th>
                          </tr>
                          <template v-for="(v, k) in list_type">
                            <tr class="text-nowrap align-middle">
                              <td>{{ v.name }}</td>
                              <td>
                                <input class="form-check-input ml-3" type="checkbox" value="id_dien_vien"
                                  aria-label="Checkbox for following text input" />
                              </td>
                            </tr>
                          </template>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-6"></div>
                  </div>
                </template>
              </div>
              <div class="modal-footer">
                <button @click="status_c--" class="btn btn-secondary" :disabled="status_c == 1 ? true : false">
                  <i class="fa-solid fa-2x fa-arrow-left"></i>
                </button>
                <button @click="status_c++" class="btn btn-secondary" :disabled="status_c == 3 ? true : false">
                  <i class="fa-solid fa-2x fa-arrow-right"></i>
                </button>
                <button @click="createMovie()" class="btn btn-secondary">Thêm mới</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="descriptionModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" style="background-color: white">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  <h4 class="text-secondary">Mô Tả Phim</h4>
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-center">
                <textarea v-bind:value="description" disabled cols="30" rows="10" class="form-control"></textarea>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="episodeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="mb-0 text-center align-middle" style="color: #AB826B;"><b>DANH SÁCH TẬP PHIM</b></h3>
                <button type="button" class="btn-close mt-1" style="transform: translateX(-10px)" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container">
                  <div class="row">
                    <div class="card" style="border-bottom: 5px solid  #AB826B;">
                      <div class="card-body">
                        <div class="table-responsive">
                          <table class="table table-bordered">
                              <thead>
                                  <tr>
                                      <th class="text-center align-middle text-nowrap" style="background-color: #AB826B; color:white;">
                                          Số Tập
                                      </th>
                                      <th class="text-center align-middle text-nowrap" style="background-color: #AB826B; color:white;">Path
                                      </th>
                                      <th class="text-center align-middle text-nowrap" style="background-color: #AB826B; color:white;">Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                                <template v-for="(v, k) in list_episode">
                                  <tr>
                                      <th class="text-center align-middle text-nowrap">{{ k + 1 }}</th>
                                      <td class="align-middle text-nowrap text-center">{{ v.url }}</td>
                                      <td class="text-center align-middle text-nowrap text-center">
                                          <button class="btn btn-danger">Cập Nhật</button>
                                          <button class="btn btn-success ms-1" data-bs-toggle="modal">Xoá</button>
                                      </td>
                                  </tr>
                                </template>
                                  <tr>
                                      <th class="text-center align-middle text-nowrap"><input v-model="create_episode.num_eps" type="text" class="form-control"></th>
                                      <td class="align-middle text-nowrap text-center"><input @change="handleFileUploaded('video')" ref="video" type="file" class="form-control"></td>
                                      <td class="text-center align-middle text-nowrap text-center">
                                          <button @click="createEpisode()" class="btn btn-success ms-1">Thêm Mới</button>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
  data() {
    return {
      description: '',
      create_episode: {},
      status_c: 1, // Nếu bằng 0 là đang thêm mới thông tin phim, 1 là diễn viên va 2 là thể loại
      status_u: 1, // Nếu bằng 0 là đang thêm mới thông tin phim, 1 là diễn viên va 2 là thể loại
      list_employee: [],
      list_author: [],
      list_language: [],
      list_actor: [],
      list_movie: [],
      list_country: [],
      list_episode: [],
      list_type: [],
      create_information: {
        'id_contries': 0,
        'id_author': 0,
        'id_user_upload': 0,
        'id_language_original': 0,
        'actor': [],
        'type': []
      },
      update_information: {},
      delete_information: {},
    };
  },
  mounted() {
    this.loadMovie();
    this.loadAuthor();
    this.loadActor();
    this.loadCountry();
    this.loadEmployee();
    this.loadLanguage();
    this.loadType();
  },
  methods: {
    check_infomations(value) {
      if(value.actor.length === 0 || value.type.length === 0) return true
      return false
    },

    async createEpisode() {
      await this.upFile(this.create_episode, 'Tập ' + this.create_episode.num_eps);
      if(this.create_episode.filename) {
        axios
          .post('http://127.0.0.1:8000/api/admin/episode/create', this.create_episode)
          .then((res) => {
            if (res.data.status) {
                toaster.success('SUCCESS<br>' + res.data.message);
                this.loadEpisode(this.create_episode.id_movie);
              } 
              else toaster.error('ERROR<br>' + res.data.message);
          });
      }
    },

    async createMovie() {
      await this.upFile(this.create_information, this.create_information.original_name);
      if(this.create_information.filename) {
        axios
          .post('http://127.0.0.1:8000/api/admin/movie/create', this.create_information)
          .then((res) => {
            if (res.data.status) {
              toaster.success('SUCCESS<br>' + res.data.message);
              this.loadMovie();
            } 
            else toaster.error('ERROR<br>' + res.data.message);
          })
      }
    },

    async upFile(value, name) {
      if (value.file) {
        var formData = new FormData();
        if(value.id_movie) formData.append("id_movie", value.id_movie);
        formData.append("name", name);
        formData.append("file", value.file);
        await axios({
          method: "post",
          url: "http://127.0.0.1:8000/api/admin/up-file",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then((res) => {
          if (res.data.status) value.filename = res.data.filename;
          else toaster.error('ERROR<br>' + res.data.message);
        });
      }
    },

    loadType() {
      axios
        .post('http://127.0.0.1:8000/api/admin/type/get-data')
        .then((res) => {
          this.list_type = res.data.data;
          console.log(this.list_type);
        })
    },

    loadEpisode(id) {
      var send_data = { 'id_movie' : id };
      axios
        .post('http://127.0.0.1:8000/api/admin/episode/get-data', send_data)
        .then((res) => {
          this.list_episode = res.data.data;
        })
    },

    loadAuthor() {
      axios
        .post('http://127.0.0.1:8000/api/admin/author/get-data')
        .then((res) => {
          this.list_author = res.data.data;
        })
    },

    loadLanguage() {
      axios
        .post('http://127.0.0.1:8000/api/admin/language/get-data')
        .then((res) => {
          this.list_language = res.data.data;
        })
    },

    loadCountry() {
      axios
        .post('http://127.0.0.1:8000/api/admin/country/get-data')
        .then((res) => {
          this.list_country = res.data.data;
        })
    },

    loadActor() {
      axios
        .post('http://127.0.0.1:8000/api/admin/actor/get-data')
        .then((res) => {
          this.list_actor = res.data.data;
        })
    },

    loadEmployee() {
      axios
        .post('http://127.0.0.1:8000/api/admin/employee/get-data')
        .then((res) => {
          this.list_employee = res.data.data;
        })
    },

    loadMovie() {
      axios
        .post('http://127.0.0.1:8000/api/admin/movie/get-data')
        .then((res) => {
          this.list_movie = res.data.data;
        })
    },

    handleFileUploaded(type) {
      if(type === 'image') this.create_information.file = this.$refs.image.files[0];
      else this.create_episode.file = this.$refs.video.files[0];
    },
  },
};
</script>
<style></style>
