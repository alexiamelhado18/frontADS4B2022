function Enviar() {
    var nome = document.getElementById("nomeid");
    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
}

function Salvar() {
    let nome = document.getElementById("nomeid");
    let fone = document.getElementById("foneid");
    let email = document.getElementById("emailid");
    let opiniao = document.getElementById("opiniaoid");

    let tdnome = document.getElementById("tdnome");
    let tdopiniao = document.getElementById("tdopiniao");
    let tdfone = document.getElementById("tdfone");
    let tdemail = document.getElementById("tdemail");

    if (nome != "" && fone != "" && email != "" && opiniao != "") {
        tdnome.append(nome.value);
        tdfone.append(fone.value);
        tdopiniao.append(opiniao.value);
        tdemail.append(email.value);

    }
    nome.value = ""
    fone.value = ""
    email.value = ""
    opiniao.value = ""

}