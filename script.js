async function loadImages() {
    const response = await fetch("images/");
    const text = await response.text();

    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");
    let links = [...doc.querySelectorAll("a")]
        .map(a => a.href)
        .filter(href => href.match(/\.(jpg|jpeg|png|gif)$/i))
        .reverse(); // Newest first

    let gallery = document.getElementById("gallery");
    links.forEach(link => {
        let img = document.createElement("img");
        img.src = link;
        gallery.appendChild(img);
    });
}

loadImages();
