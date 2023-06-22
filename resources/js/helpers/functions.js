import { nextTick } from '@vue/runtime-core';
import { useAuthStore } from '@/stores/auth';

export function show_alert(msj, icon, focus) {
    if(focus !== ''){
        nextTick( () => focus.value.focus());
    }
    Swal.fire({
        title: msj,
        icon: icon,
        confirmButtonClass: "btn btn-primary w-xs mt-2",
        buttonsStyling: !1,
        showCloseButton: !0,
    });
}

export function confirmation (name, url, redirect) {
    const alert = Swal.mixin({
        buttonsStyling: true
    });
    alert.fire({
        title: "¿Estas seguro de eliminar a:  "+name+"?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonClass: "btn btn-primary w-xs me-2 mt-2",
        cancelButtonClass: "btn btn-danger w-xs mt-2",
        confirmButtonText: "Yes, delete it!",
        buttonsStyling: !1,
        showCloseButton: !0,
    }).then( (result) => {
        if(result.isConfirmed) {
            //send request ...
            sendRequest('DELETE',{},url,redirect);
        }
    });
}

export async function sendRequest(method, params, url, redirect='') {
    const authStore = useAuthStore();
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.authToken;
    let res;
    await axios({
        method: method,
        url: url,
        data: params
    }).then(
        response => {
            res = response.data.status,
            show_alert(response.data.message, 'success', ''),
            setTimeout(
                () => (redirect !== '') ? window.location.href = redirect : ''
            , 2000)
        }).catch((errors) => {
            let desc = '';
            res = errors.response.data.status;
            errors.response.data.errors.map( (e) => {
                desc = desc+' '+e
            })
            show_alert(desc,'error', '');
        })
        return res;
}
