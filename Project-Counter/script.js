var count = 0;

//Usamos a função para somar ou subtrair o numero apresentado na tela, sendo assim, o "count" será somado com mais 1 ou menos 1, 
//dependendo de qual botão for clicado na tela como é apresentado no Index.html.
function changeCount(num){
    count += num;
    document.getElementById("count").innerHTML = count;
}
