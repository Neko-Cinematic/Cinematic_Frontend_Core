//Sau này đổi tên lại thành Middleware nhé
import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default function (to, from, next) {
  axios
    .post(
      "http://127.0.0.1:8000/api/admin/client/check-token",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("tokenAdmin"), //the token is a variable which holds the token
        },
      }
    )
    .then((res) => {
      if (res.data.status === true) {
        next();
      } else {
       next('/admin/auth')
      }
    })
    .catch((err)=>{
        next('/admin/auth');
    });

    }
