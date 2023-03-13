var inputval = document.getElementById('op');
var panel = document.getElementById('panel');
var historyB = document.getElementById('history');

function getValue(num) {
    //alert(num);

    if (inputval.value == '0') {
        inputval.value = num;
    }
    else {
        inputval.value += num;
    }
}

function clearAll() {
    inputval.value = '0';
    panel.value = '';

}

function onCut() {
    //alert('hii');
    temp = inputval.value
    if (temp.length > 1) {
        inputval.value = temp.slice(0, -1);
    }
    else {
        inputval.value = '0';

    }
}

function equalsTo() {
    temp = inputval.value;
    inputval.value = eval(temp);
    panel.value = temp + " =";
    history();
}

function history() {
   
    var history = '<div class="his">';
    history += "<p>" + panel.value + "</p> <p>" + inputval.value + "</p>";
    history += '</div>';
    historyB.innerHTML += history;


}

function historyDelete() {
    //alert('hiii');
    

}





