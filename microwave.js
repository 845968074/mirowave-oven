function isTrue(id) {
    //console.log("id: " + id);
    let hasTrue = document.getElementById(id);
    //  console.log("hasTrue: " + hasTrue.getAttribute('is_press'));
    return hasTrue.getAttribute('is_press');
}
function changeIs_press(id) {
    let change = document.getElementById(id);
    return (change.setAttribute('is_press', 'true'));
}
function changeSwitch() {
    let source = document.getElementById("source");
    let hasTrue = isTrue('source');
    //console.log("is True: "+hasTrue);
    if (hasTrue == ("false")) {
        source.setAttribute('is_press', "true");
        console.log("into true");
        document.getElementById('source').innerHTML = alert("电源打开!");
        changeImage();
    }
    else {
        console.log("into false");
        source.setAttribute('is_press', "false");
        document.getElementById('source').innerHTML = alert("电源关闭!");
        changeImage();
    }
    console.log("状态:" + source.getAttribute('is_press'));
}
function changeImage() {
    let element = document.getElementById('light');
        if ((element.src.match("bulbon"))) {
            element.src = "http://www.runoob.com/images/pic_bulboff.gif";
        }
        else {
            element.src = "http://www.runoob.com/images/pic_bulbon.gif";
        }
}

function changeDoor(id) {
    let open = document.getElementById('open');
    let close = document.getElementById('close');
    //console.log("电源: " + isTrue('source'));
    if ((isTrue('source')) == 'true') {
        switch (id) {
            case 'open': {
                {
                    open.setAttribute('is_press', "true");
                    console.log("into  door true");
                    document.getElementById('open').innerHTML = alert("炉门已经打开!");
                }
                break;
            }
            case 'close': {
                {
                    close.setAttribute('is_press', "true");
                    console.log("into  close true");
                    document.getElementById('close').innerHTML = alert("炉门已经关闭!");
                }
                break;
            }
        }
    }
}
function setIs_press() {
    let source = document.getElementById('source');
    let open = document.getElementById('open');
    let start = document.getElementById('start');
    let stop = document.getElementById('stop');
    let recover = document.getElementById('recover');
    let close = document.getElementById('close');
    let number = document.getElementsByClassName('number');
    for (let i of number) {
        i.setAttribute('is_press', 'false')
    }
    source.setAttribute('is_press', 'false');
    open.setAttribute('is_press', 'false');
    start.setAttribute('is_press', 'false');
    stop.setAttribute('is_press', 'false');
    recover.setAttribute('is_press', 'false');
    source.setAttribute('is_press', "false");
    close.setAttribute('is_press', 'false');
}
let flage = false, flage1 = true;
let type_name='';
function getNumber(name) {
    if (isTrue('source') == 'true') {
        //console.log("name: " + name);
        let time;
        switch (name) {
            case'牛奶': {
                time = 600;
                //flage = true;
                //flage1=false;
                document.getElementsByClassName('number').innerHTML=alert("亲爱的用户,你选择加热牛奶的功能!");
                //setTime(time);
                type_name=name;
                break;
            }
            case'蒸煮':
                time = 1800;
                flage = true;
                document.getElementsByClassName('number').innerHTML=alert("亲爱的用户,你选择蒸煮的功能!");
                //setTime(time);
                type_name=name;
                break;
            case'解冻':
                time = 950;
                document.getElementsByClassName('number').innerHTML=alert("亲爱的用户,你选择解冻的功能!");
                type_name=name;
                //setTime(time);
                break;
            case'消毒':
                time = 320;
                document.getElementsByClassName('number').innerHTML=alert("亲爱的用户,你选择消毒的功能!");
                type_name=name;
                //setTime(time);
                break;
        }
    }
}
function setTime(time) {
    let minute, second;
    let getTime = setInterval(function () {
        minute = parseInt(time / 60);
        second = time % 60;
        if (minute >= 0 && minute <= 9)
            minute = '0' + minute;
        if (second >= 0 && second <= 9)
            second = '0' + second;
        if (isTrue('source') == 'false') {
            //  console.log("into stop");
            document.getElementById('time').innerHTML = '00:00';
            clearInterval(getTime);
        }
        else if ((isTrue('stop') == 'true') && (isTrue('recover') == 'false'||isTrue('start')=='false')) {
            console.log("into erro");
            clearInterval(getTime);
        }
        else {
            document.getElementById('time').innerHTML = '' + minute + ':' + second;
            time--;
            if (time == 0) {
                document.getElementById('time').innerHTML = '00:00';
                clearInterval(getTime);
            }
        }
    }, 1000);
}
function changeEvent(id) {

    if (isTrue('source') == 'true') {

        switch (id) {
            case 'stop': {
                console.log("changeEvent: " + id);
                changeIs_press(id);
                let time = document.getElementById('time').innerHTML;
                //  console.log("time: "+time);
                document.getElementById('time').innerHTML = time;
                document.getElementById('recover').setAttribute('is_press', 'false');
                //console.log(time);
                break;
            }
            case  'recover': {
                changeIs_press(id);
                document.getElementById('stop').setAttribute('is_press', 'false');
                let time = document.getElementById('time').innerHTML;
                let [minute,secode]=time.split(':');
                let times = parseInt(minute * 60) + parseInt(secode);
                console.log("minute :" + minute);
                console.log("second :" + secode);
                console.log("times :" + times);
                setTime(times);
                break;
            }
            case 'start':
            {
                changeIs_press(id);
                let time;
                console.log("change name: "+type_name);
                switch (type_name) {
                    case'牛奶': {
                        time = 600;
                        setTime(time);
                        break;
                    }
                    case'蒸煮':
                        time = 1800;
                        console.log("into 蒸煮");
                        setTime(time);
                        break;
                    case'解冻':
                        time = 950;
                        setTime(time);
                        break;
                    case'消毒':
                        time = 320;
                        setTime(time);
                        break;
                }
                document.getElementById('start').setAttribute('is_press', 'false');
                break;
            }
        }

    }
}
function _onclick(id) {
    setIs_press();
    //   if(id=='source') changeSwitch();
    /* if (source.getAttribute('is_press')===false) {
     console.log("right");
     for (let i of number) {
     i.setAttribute('is_press', 'true')
     }
     source.setAttribute('is_press','true');
     open.setAttribute('is_press','true');
     start.setAttribute('is_press','true');
     stop.setAttribute('is_press','true');
     recover.setAttribute('is_press','true');
     close.setAttribute('is_press','true');
     }*/
}

window.onload = _onclick;
/*
 var count = [];
 function getNumber(number) {
 var node = document.getElementById('time');
 console.log("node: "+node);
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

 window.onload = _click;*/
