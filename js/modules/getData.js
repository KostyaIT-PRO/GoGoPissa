import { hideLoader, showLoader } from "./loader.js";

export const getData = async (url) => {
    showLoader();
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Failed yo fetch pizza products');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching pizza products: ${error}`);
        return [];
    } finally {
        hideLoader();
    }
}