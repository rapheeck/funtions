{
    const welcome = () => {
        console.log("Cześć! Powitanie już jest w funkcji");
    }

    const onChangeBackgroundClick = () => {
        const passes = document.querySelector(".js-passes");
        const themeName = document.querySelector(".js-themeName");
        passes.classList.toggle("js-blind");
        themeName.innerText = passes.classList.contains("js-blind") ? "Dodaj" : "Usuń";

    }
    const init = () => {
        const pushbutton = document.querySelector(".js-pushbutton");
        pushbutton.addEventListener("click", onChangeBackgroundClick);
        welcome();
    }

    init()
}