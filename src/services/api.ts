import axios from "axios";

export const catApi = axios.create({
    baseURL: "https://cataas.com",
    timeout: 10000,
});

export const getCatImage = (): string => {
    //retorna imagem de gatinho
    return `https://cataas.com/cat?timestamp=${Date.now()}`;
};

export const cagentApi = axios.create({
    baseURL: "https://api.apicagent.com",
    timeout: 10000,
});

export interface BrowserInfo {
    browser_family: string;
    version: string;
    brand: string;
    type: string;
    os_family: string;
}

export interface CagentResponse {
    browser_family: string;
    client: {
        version: string;
    };
    device: {
        brand: string;
        type: string;
    };
    os_family: string;
}

export const getBrowserInfo = async (): Promise<BrowserInfo> => {
    try {
        const userAgent = navigator.userAgent;
        const encodedUA = encodeURIComponent(userAgent);
        const response = await cagentApi.get(`/?ua=${encodedUA}`);
        
        const data: CagentResponse = response.data;
        
        return {
            browser_family: data.browser_family,
            version: data.client.version,
            brand: data.device.brand,
            type: data.device.type,
            os_family: data.os_family,
        };
    } catch (error) {
        console.error("Erro ao buscar informações do navegador:", error);
        throw error;
    }
};
