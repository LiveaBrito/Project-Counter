var count = 0;

//Usando a função soma ou subtração no numero apresentado em tela, sendo assim, o "count" será somado com mais 1 ou menos 1, 
//dependendo de qual botão for clicado, como é apresentado no Index.html.
function changeCount(num){
    count += num;
    document.getElementById("count").innerHTML = count;
}
