import { nextTick } from "@vue/runtime-core";
import { useAuthStore } from "@/stores/auth";

export function notification() {}

export function show_alert(msj, icon, focus) {
    if (focus !== "") {
        nextTick(() => focus.value.focus());
    }
    swal(msj, {
        icon: icon,
    });
}

export function confirmation(name, url, redirect) {
    swal({
        title: "Estas Seguro de Eliminar a:",
        text: name,
        icon: "warning",
        dangerMode: true,
        buttons: ["Cancelar", "Eliminar"],
    }).then((willDelete) => {
        if (willDelete) {
            //send request ...
            sendRequest("DELETE", {}, url, redirect);
        }
    });
}

export async function sendRequest(method, params, url, redirect = "") {
    const authStore = useAuthStore();
    axios.defaults.headers.common["Authorization"] =
        "Bearer " + authStore.authToken;
    let res;
    await axios({
        method: method,
        url: url,
        data: params,
    })
        .then((response) => {
            res = response.data.status;
                show_alert(response.data.message, "success", "");
                /* setTimeout(
                    () =>
                        redirect !== ""
                            ? (window.location.href = redirect)
                            : "",
                    2000
                ); */
                // $route.push({ name: redirect });
        })
        .catch((errors) => {
            let desc = "";
            res = errors.response.data.status;
            errors.response.data.errors.map((e) => {
                desc = desc + " " + e;
            });
            show_alert(desc, "error", "");
        });
    return res;
}
