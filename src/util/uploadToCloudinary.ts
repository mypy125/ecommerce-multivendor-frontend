const uploadPreset = "restaurant-food"; 
const cloudName = "dtnq8hr9e";
const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

export const uploadImageToCloudinary = async (file: File): Promise<string> => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", uploadPreset);

    const res = await fetch(apiUrl, {
        method: "POST",
        body: data
    });

    if (!res.ok) {
        throw new Error(`Loading error ${res.statusText}`);
    }

    const fileData: { url: string } = await res.json();
    return fileData.url;
};
