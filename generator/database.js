// @ts-check

function setup () {
    let selBackend = document.getElementById("backend");
    let btnGenerer = document.getElementById("generer");
    let txtSql = document.getElementById("sql");

    btnGenerer.addEventListener("click", genererKode);

    function genererKode() {
        let backend = selBackend.value;
        let sql = txtSql.value;
        console.log(sql, backend);
    }
}