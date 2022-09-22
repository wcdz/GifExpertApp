import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifts(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages(); // Codigo que queremos ejecutar
    }, []); // Si es vacio solo se ejecuta una vez

    return {
        images: images,
        isLoading: isLoading
    };

}
