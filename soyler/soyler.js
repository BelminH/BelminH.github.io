function setup() {
    let divMain = document.getElementById("main");

    for (i = 0; i < 10; i++) {
        let s = lagSoyle(200 + Math.random() * 300);
        setEtikkett(s, "ole johan OLSEN");
        divMain.appendChild(s);
    }
}