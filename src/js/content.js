
window.setInterval(function() {
    // 判断是【视听点播】栏目
    var douyuRoomId = [122402];
    var roomId = window.location.pathname.split("/")[1];
    var inRoom = douyuRoomId.some(function(elem) {
        return roomId == elem;
    });
    if (inRoom != true) {
        console.log(roomId, inRoom)
        return false;
    }
    // 进房间打卡一次
    if ($(".jschartli").length < 1) {
        console.log(roomId, inRoom)
        return false;
    }
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    // 每2min随机点播电影 - -！
    if (min % 2 == 0 && sec == 30) {
        var danmu = [
            '金瓶梅', "安塔芮丝", "血恋", "键", "西西里的美丽传说", "巴黎野玫瑰", "九歌", "罗马帝国艳情史", "姊妹情色", "母亲，爱情的限度", "嫩草的香味", "解放的潘多拉", "大开眼戒", "困惑的浪漫", "困惑的浪漫2", "意大利种马", "索多玛120天", "与我同眠", "天地无伦", "本能", "本能2", "爱欲疑狂", "感官世界", "霜花店", "情色沙漠"
        ];
        var dd = parseInt(Math.random() * danmu.length);
        var d = "#" + danmu[dd] + "-" + parseInt(Math.random() * 9999);
        send(d);
    }
    // 每10min打卡
    if (min % 10 == 0 && sec == 30) {
        send("#打卡");
    }
}, 1000);

function send(msg) {
    $('.cs-textarea').val(msg);
    $('.b-btn').click();
    // var textareas = document.getElementsByClassName("cs-textarea");
    // textareas[0].innerHTML = "*test1";
    // var btn = document.getElementsByClassName("b-btn");
    // btn[0].click();
    console.log(new Date() + ' SEND DANMU: ' + msg);
}
