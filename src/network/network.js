import { doPost, doPatch, doGet, doPostProfilePictureUpload, doPostCommonApi, doGetCommonApi, doPut, doPostSignup, doDelete } from "./config";
import { I18nManager } from "react-native";
let lang = I18nManager.isRTL ? "ar" : "en"


// image upload
// export const imageUpload = (data, token) => {
//     return doPostProfilePictureUpload(`user/upload-image`, data, token)
// }


// export const doPostUserSelectedCategories = (data, token) => {
//     console.warn(`in network`, data)
//     return doPatch(`category/add-user-categories`, data, token)
// }




// export const changePassword = (data, token) => {
//     console.warn(`in network`, data)
//     return doPut(`password?lang=${lang}`, data, token)
// }


// export const doPostContactUS = (token, data) => {
//     console.warn(`contact us data`, data);
//     return doPost(`contact-us?lang=${lang}`, data, token)
// }

export const userCreate = (data) => {
    return doPost('user/create', data);
}
export const userLogin = (data) => {
    return doPost('user/login', data);
}
export const getFeatured = (token) => {
    return doGet('product/getbyfeatured', token);
}
export const getBestSell = (token) => {
    return doGet('product/getbybest', token);
}
export const getPrdouctById = (id, token) => {
    return doGet(`product/getbyid?search=${id} `, token);
}
export const getCart = (token)=>{
    return doGet('order/cart' , token);
}
export const postToCartIncreament = (data , token) => {
    return doPost('order/add?key=I', data , token);
}
export const postToCartDecreament = (data , token) => {
    return doPost('order/add?key=D', data , token);
}
export const postToCartZero = (data , token) => {
    return doPost('order/add?key=Z', data , token);
}
export const getAddress = (token)=>{
    return doGet('user/getaddress' , token);
}
export const postAddress = (data , token) => {
    return doPost('user/addaddress', data , token);
}
export const getOrder = (id,token)=>{
    return doGet(`order/submitted?key=P&search=${id}` , token);
}
export const postOrderAddress = (oid ,aid ,token)=>{
    return doGet(`order/address?orderId=${oid}&addressId=${aid}` , token);
}
export const getOrderHistory = (token)=>{
    return doGet('order/orders' , token);
}
export const getProfile = (token)=>{
    return doGet('user/me' , token);
}
export const doProfile = (data,token)=>{
    return doPatch('user/edit' ,data, token);
}
export const doLogout = (token)=>{
    return doPatch('user/logout' , token);
}





// export const getFAQs = (token) => {
//     console.warn(`Api Token `, token)
//     return doGet(`faqs?lang=${lang}`, token)
// }


