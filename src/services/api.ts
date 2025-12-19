import axios from "axios";

export const catApi = axios.create({
    baseURL: "https://cataas.com",
    timeout: 10000,
});

export const getCatImage = (): string => {
    // A API cataas.com retorna uma imagem diferente a cada chamada
    return `https://cataas.com/cat?timestamp=${Date.now()}`;
};