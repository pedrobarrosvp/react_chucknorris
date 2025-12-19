import axios from "axios";

//---------------------------------- Cat API --------------------------------//
export const catApi = axios.create({
    baseURL: "https://cataas.com",
    timeout: 10000,
});

export const getCatImage = (): string => {
    return `https://cataas.com/cat?timestamp=${Date.now()}`;
};

//---------------------------------- Cagent API --------------------------------//
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

export interface ChuckJoke {
    id: string;
    value: string;
    icon_url?: string;
}

export const getChuckJoke = async (): Promise<ChuckJoke> => {
    try {
        const response = await axios.get("https://api.chucknorris.io/jokes/random");
        return response.data as ChuckJoke;
    } catch (error) {
        console.error("Erro ao buscar piada do Chuck Norris:", error);
        throw error;
    }
};

//---------------------------------- Chuck Norris API --------------------------------//
export const chuckNorrisApi = axios.create({
    baseURL: "https://api.chucknorris.io/jokes/random",
    timeout: 10000,
});

export const getChuckNorrisJoke = async (): Promise<string> => {
    try {
        const response = await chuckNorrisApi.get("");
        return response.data.value;
    } catch (error) {
        console.error("Erro ao buscar piada do Chuck Norris:", error);
        throw error;
    }
};