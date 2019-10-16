const url = "https://jsonplaceholder.typicode.com/photos";
const method ="GET";
const syncs = true;
const sovath = new XMLHttpRequest();
sovath.open(method, url, syncs);
sovath.onload = () => {
    const data = JSON.parse(sovath.response);
    const result = document.querySelector('#sovath');
    data.forEach(element => {
        if(element.id <= 12){
            result.innerHTML +=`
            <div class="sovath mt-5"></div>
            <div class="card-header">${element.id}</div>
            <div class="sovath-header">${element.title}</div>
            <div class="sovath-body"><img src ="${element.url}" class=" img-fluid"></div>
            `;
        }
    })
}
sovath.send();