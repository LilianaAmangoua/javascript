console.log("Hello World");

/*
 * Recréer les données dynamiques de votre page d'accueil youtube (c'est-à-dire les 8 premières vidéos qui s'affichent lorsque vous arrivez sur la plateforme)
 * ON SE MOQUE DE REFAIRE LA PARTIE STATIQUE (sidebar, navbar)
 * 
 * Pour cela, vous devrez : 
 * → Créer 8 objets (correspondant aux 8 vidéos qui s'affichent sur la page d'accueil)
 * → Pousser ces 8 objets dans un tableau
 * → Faire une boucle sur ce tableau et, pour chaque objet, injecter l'objet dans le HTML
 * → Ajouter un peu de CSS pour ressembler à la page de Youtube
 */

const video1 = {
    videoName: "JavaScript Tutorial Full Course - Beginner to Pro (2024)",
    channelName: "SuperSimpleDev",
    numberOfViews: "2.8M de vues",
    dateOfPosting: "Il y a 6 mois",
    url: "https://i.ytimg.com/vi/EerdGm-ehJQ/hq720.jpg?sqp=-oaymwEpCNAFEJQDSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGBACGAYgATgBQAE=&rs=AOn4CLDVpP27lhCZPuvO_EOcvfoD7M6LGg",
    channelImage: "https://yt3.ggpht.com/ytc/AIdro_laf9dDyNATE1_RdVUKthwnwT9TSm9N0my0jL2H8gCvjw=s68-c-k-c0x00ffffff-no-rj"
}

const video2 = {
    videoName: "What nobody tells you about yout twenties | Livi Redden",
    channelName: "TEDx Talks",
    numberOfViews: "1.7M de vues",
    dateOfPosting: "Il y a 1 an",
    url: "https://i.ytimg.com/vi/O9pD6LTF4Bk/hq720.jpg?sqp=-oaymwEpCNAFEJQDSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGBACGAYgATgBQAE=&rs=AOn4CLArDwXCop5Ns83ei9LRklwxXJ6Nsg",
    channelImage: "https://yt3.ggpht.com/70r5TkYTLC0cpKLAiQEvcWLeIHB8yxoiog0nQIK9MmnZHqkICy0YA-jAaqfT2ChOBwehskjf5g=s68-c-k-c0x00ffffff-no-rj"
}

const video3 = {
    videoName: "I tried building a Fitness App in 4 days - Seoul Entrepreneur",
    channelName: "Lululucaschae",
    numberOfViews: "230k de vues",
    dateOfPosting: "Il y a 4 mois",
    url: "https://i.ytimg.com/vi/at6NS_rWt9Q/hq720.jpg?sqp=-oaymwEpCNAFEJQDSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGBACGAYgATgBQAE=&rs=AOn4CLBOo3jlXtAD-jvzhI7MQRH1_MJdSA",
    channelImage: "https://yt3.ggpht.com/3BzXaVyBdFvojKfGsnwElfx1HZPCMx6QO4sF6KTs4PNVWlegV1F6zfl6vBihFC-SejpOhbJSVLo=s68-c-k-c0x00ffffff-no-rj"
}

const video4 = {
    videoName: "The top 5 Technologies to learn in 2025",
    channelName: "Tiff in Tech",
    numberOfViews: "34k de vues",
    dateOfPosting: "Il y a 6 jours",
    url: "https://i.ytimg.com/vi/o9H3M9rqkA8/hq720.jpg?sqp=-oaymwEpCNAFEJQDSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGBACGAYgATgBQAE=&rs=AOn4CLD55ue1801fiKvMvErMEpZ79W72lg",
    channelImage: "https://yt3.ggpht.com/MkbhHI1tJM0t0MtedzzDxa8OWhPftvHfmFPN-VwYcvrgXq4iSXYyI4ZLZMOOST6IhhIZsjHUSKk=s68-c-k-c0x00ffffff-no-rj"
}

const video5 = {
    videoName: "day in the life of a Business Analyst at Spotify",
    channelName: "Lilian Chiu",
    numberOfViews: "461k de vues",
    dateOfPosting: "Il y a 8 jours",
    url: "https://i.ytimg.com/vi/SN8ZHFp_plw/hq720.jpg?sqp=-oaymwEpCNAFEJQDSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGBACGAYgATgBQAE=&rs=AOn4CLAGcCM16FLhoX4sZP4ms2CJz3s6MQ",
    channelImage: "https://yt3.ggpht.com/qPJVVsjaHSP_xCD_XQbgnH6vD1m-d0CKuWCgJ3vVqADDKyNoyl0uPcNVoqJYUFAwAG3oCY-G=s68-c-k-c0x00ffffff-no-rj"
}

const video6 = {
    videoName: "Coding was HARD Until I learned these 5 things",
    channelName: "Elsa Scola",
    numberOfViews: "715k de vues",
    dateOfPosting: "Il y a 4 mois",
    url: "https://i.ytimg.com/vi/ujPDRl1q-dw/hq720.jpg?sqp=-oaymwEpCNAFEJQDSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGBACGAYgATgBQAE=&rs=AOn4CLBGNEAWj1z-qj7hSV6rRb2VhM4gTA",
    channelImage : "https://yt3.ggpht.com/y2JyI_TPFZgE85ZKJS5W1uVHYqGFJWyeqhe3-k-V8B7SD8dzlMqKHTU5XJUqyUa9jgcPb2Cmhw=s68-c-k-c0x00ffffff-no-rj"
}

const video7 = {
    videoName: "Winter Night Jazz ~ Relaxing Jazz Piano Music and Snow",
    channelName: "Relaxing Jazz BGM",
    numberOfViews: "5.7M de vues",
    dateOfPosting: "Il y a 1 an",
    url: "https://i.ytimg.com/vi/egLMPbcs4co/hq720.jpg?sqp=-oaymwEpCNAFEJQDSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGBACGAYgATgBQAE=&rs=AOn4CLCZHklCoq_LHVWebN-IaFfHya8Bgw",
    channelImage: "https://yt3.ggpht.com/2VNg5FbaQ_wvfpgcTFKVERneeqqq4y1dnTvAOlFnLBQgFe-N7Py5_awkW8bK9xxENnP-_dvxfTM=s68-c-k-c0x00ffffff-no-rj"
}

const video8 = {
    videoName: "L'attaque informatique la plus sophistiquée de l'Histoire",
    channelName: "Micode",
    numberOfViews: "1.3M de vues",
    dateOfPosting: "Il y a 3 semaines",
    url: "https://i.ytimg.com/vi/WQBLPYToLME/hq720.jpg?sqp=-oaymwEpCNAFEJQDSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGBACGAYgATgBQAE=&rs=AOn4CLCol6hc5abIWtZGu4EZCzFTbpExcA",
    channelImage : "https://yt3.ggpht.com/vkXCI-zdBTfUN48F5WpuCo43VVzzGKi1A6bR4R8XWg0lHm4rdgYshTQmp1NpiZ_2lE_0yxpKwqw=s68-c-k-c0x00ffffff-no-rj"
}

const videos = [];
videos.push(video1, video2, video3, video4, video5, video6, video7, video8);

let body = document.querySelector("body");

// Section principale
let section = document.createElement("section");
body.appendChild(section);
section.classList.add("main-section");



// Création d'un élément vidéo
videos.forEach((video) => {
    // Créer une div où envelopper chque vidéo
    let div = document.createElement('div');
    section.appendChild(div);
    div.classList.add('video');

    // Créer la thumbnail
    let thumbnail = document.createElement('img');
    div.appendChild(thumbnail);
    thumbnail.src = video.url;
    thumbnail.classList.add('thumbnail');

    // Section qui enveloppe la description
    let description = document.createElement("section");
    div.appendChild(description);
    description.classList.add('description');

    // Divs qui sont dans la section "description"
    let channelImageDiv = document.createElement("div");
    description.appendChild(channelImageDiv);
    channelImageDiv.classList.add('channel-image-div');

    let titlesDiv = document.createElement("div");
    description.appendChild(titlesDiv);
    titlesDiv.classList.add('titles-div');

    // Créer l'image de la chaîne
    let channelImage = document.createElement('img');
    channelImageDiv.appendChild(channelImage);
    channelImage.src = video.channelImage; 
    channelImage.classList.add('channel-image');

    // Créer le titre
    let title = document.createElement("h3");
    titlesDiv.appendChild(title);
    title.innerText = video.videoName;

    // Créer le nom de la chaîne
    let channelTitle = document.createElement("p");
    titlesDiv.appendChild(channelTitle);
    channelTitle.innerText = video.channelName;

    // Afficher le nombre de vues
    let views = document.createElement("p");
    titlesDiv.appendChild(views);
    views.innerText = video.numberOfViews;

    // Afficher la date de publication
    let date = document.createElement("p");
    titlesDiv.appendChild(date);
    date.innerText = video.dateOfPosting;
})