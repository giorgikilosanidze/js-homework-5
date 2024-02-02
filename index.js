// task1

let div = document.querySelector("#main_div");
let div2 = `<div class="wraper"> 
<img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="image">
<h2 class="title"> image title </h2>
</div>`;

div.insertAdjacentHTML("afterbegin", div2);

let element = document.querySelector(".title");
element.style.color = "red";
element.style.fontSize = "30px";

let image = document.querySelector("img");
image.style.width = "700px";

// task2

let emptyDivs = document.querySelectorAll(".task2_divs");

for (let i = 0; i < emptyDivs.length; i++) {
    let text = document.createElement("p");
    text.setAttribute("class", "text");
    text.textContent = "hello";
    emptyDivs[i].appendChild(text);
};

// task3

let link = document.createElement("a");
link.setAttribute("href", "https://google.com");
link.setAttribute("target", "_blank");
link.textContent = "google link";
link.setAttribute("class", "link");
link.classList.replace("link", "newclass");
let htmlDiv = document.querySelector(".box");
htmlDiv.appendChild(link);














