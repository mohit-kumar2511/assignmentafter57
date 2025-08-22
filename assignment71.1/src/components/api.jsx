import axios from "axios";

export function getProductDetail(id){
    return axios.get("https://dummyjson.com/products/"+id); 
}

export function getProductList(){
    return axios.get("https://dummyjson.com/products");
}