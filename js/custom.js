

function DeleteMe(){
    document.getElementById('MyResult') . value = "";
}


function calculator(myvlaue){

     document . getElementById('MyResult') .value += myvlaue;


}

function Answer(){
    var a = document . getElementById('MyResult') .value ;

    var b = eval(a);

    document . getElementById('MyResult') .value = b;

}