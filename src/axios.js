import axios from "axios"
const Axios = axios.create({
    baseURL: 'https://ele-interface.herokuapp.com/api'
})
export default function getCode() {
    Axios.post('/api/posts/sms_send', {
        tpl_id: "136729",
        key: "795be723dd9e88c3ea98e2b6713ab795",
        phone: this.phone
    })
}