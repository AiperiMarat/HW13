//menu-btn класс на кнопке бургера
document.querySelector(".menu-btn").addEventListener("click", () =>{
    //.toggle() добавляет класс если его нет и удаляет если он есть
    document.querySelector(".menu-btn").classList.toggle("active")
    document.querySelector(".header_menu").classList.toggle("active")
})
// header_menu_items - это класс в ссылке меню
// нужен для закрытия при клике на них
document.querySelectorAll(".header_menu_items").forEach((oneLink)=> {
    //onelink это имя одной ссылки меню/ Придумываем сами название
    oneLink.addEventListener("click", () => {
        document.querySelector(".menu-btn").classList.toggle("active")
        document.querySelector(".header_menu").classList.toggle("active")
    })
})



// .addEventlistener (Что слушаем, Что делаем)