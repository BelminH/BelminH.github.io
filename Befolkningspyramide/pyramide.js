// @ts-check

function setup() {

    let divMain = document.getElementById("main");
    let btnTegn = document.getElementById("tegn");
    let inpLand = document.getElementById("land");
    let inpAar = document.getElementById("aar");



    btnTegn.addEventListener("click", hentDataOgTegn);


    function hentDataOgTegn() {
        // @ts-ignore
        let land = inpLand.value || "Norway";
        // @ts-ignore
        let aar = inpAar.value || "1950";

        let url = `http://api.population.io:80/1.0/population/${aar}/${land}`;
        fetch(url).then(r => r.json())
            .then(data => lagLandKombo(data))
            .catch(e => console.log("Dette virka ikke."))

            function lagLandKombo(data) {
                let kombo = document.createElement("select");
                data.contries.forEach(e => {
                    let opt = document.createElement("option");
                    opt.innerHTML = e;
                    kombo.appendChild(opt);
                })
                let parent = inpLand.parentNode;
                parent.removeChild(inpLand);
                parent.appendChild(kombo);
            }
    }


    function behandle(data) {
        divMain.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            let aardata = data[i];
            divMain.innerHTML += aardata.females + "<br>"
        }
    }

}