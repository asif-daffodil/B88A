const tabHeaders = document.querySelectorAll(".tab-headers")[0];
const tabContents = document.querySelectorAll(".tab-contents")[0];
const headers = Array.from(tabHeaders.children);
const contents = Array.from(tabContents.children);

headers.forEach((header, index) => {
    header.addEventListener("click", ()=>{
        headers.forEach((h, i) => {
            if(i === index){
                headers[i].classList.add("active");
                contents[i].classList.add("active");
            } else {
                headers[i].classList.remove("active");
                contents[i].classList.remove("active");
            }
        });
    });
});