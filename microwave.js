var count = [];
function getNumber(number) {
    var node = document.getElementById('time');
    var clear = document.getElementById('clear');
    count.push(number);
    var str = count.join('');
    console.log(str);
    if (str >= 7200) {
        node.innerHTML = '危险';
        count = [];
    } else {
        node.innerHTML = parseInt(str);
    }
    var finish = document.getElementById('finish');
    finish.onclick = function () {
        node.innerHTML = 0;
        var number = document.getElementsByClassName('number');
        var clear = document.getElementById('clear');
        for (let i of number) {
            i.removeAttribute("disabled");
        }
        clear.removeAttribute('disabled');
    };
    clear.onclick = function () {
        count.pop();
        if (count.length == 0) {
            node.innerHTML = 0;
        } else {
            node.innerHTML = count.join('');
        }
    };
}
function _click() {
    var node = document.getElementsByClassName('start')[0];
    node.onclick = function () {
        var number = document.getElementsByClassName('number');
        var clear = document.getElementById('clear');
        for (let i of number) {
            i.setAttribute("disabled", "disabled");
        }
        clear.setAttribute('disabled', "disabled");
        node.setAttribute('disabled', 'disabled');
        setTime();
    };
}
function setTime() {
    var time = document.getElementById('time');
    var value = time.innerHTML;
    if (value == 0) {
        count = [];
        var number = document.getElementsByClassName('number');
        var clear = document.getElementById('clear');
        var node = document.getElementsByClassName('start')[0];
        for (let i of number) {
            i.removeAttribute('disabled');
        }
        clear.removeAttribute("disabled");
        node.removeAttribute("disabled");
        return 0;
    }

    else {
        value -= 1;
        time.innerHTML = value;
        var currentTime = setTimeout(function () {
            setTime();
        }, 1000)
    }

    var stop = document.getElementById('stop');
    stop.onclick = function () {
        var node = document.getElementsByClassName('start')[0];
        node.removeAttribute("disabled");
        clearTimeout(currentTime);
    };
}

window.onload = _click;