//funçao para gerar a senha
function generatePassword() {
    //obtenhas as opçoes dos usuarios
    const length = parseInt(document.getElementById("lenght").value);
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    //defina os caracteres permitidos com base nas opçoes do usuario
    let characters = "";
    if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) characters +="0123456789";
    if (symbols) characters += "!@#$%^&*()_+[]{}|;:,.<>?";

    //gere a senha
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    //exiba a senha gerada
    document.getElementById("password").value = password;
}

//adicione um ouvinte de evento ao botçao de geraçao de senha
document.getElementById("generate").addEventListener("click", generatePassword);