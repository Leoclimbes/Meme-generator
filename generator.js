const url = "https://meme-api.com/gimme";
const generateButton = document.getElementById("generate-btn");
const container = document.getElementById("meme-img");

async function getData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching meme:", error);
    }
}

async function useData() {
    const image = await getData();

    if (!image || !image.url) {
        container.innerHTML = "<p class='text-red-500'>Failed to load meme.</p>";
        return;
    }

    
    container.innerHTML = "";

    
    const imgElement = document.createElement("img");
    imgElement.src = image.url;
    imgElement.alt = image.title || "Meme";
    imgElement.className = "max-w-full max-h-full rounded-lg opacity-0 transition-opacity duration-700";

    
    container.appendChild(imgElement);
    requestAnimationFrame(() => {
        imgElement.classList.add("opacity-100");
    });
}

generateButton.addEventListener("click", useData);
