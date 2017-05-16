
var start = false;
window.setInterval(function() {
    // 判断是【视听点播】栏目
    if ($('.second').html() != '视听点评') {
        console.log($('.second').html())
        return false;
    }
    // 进房间打卡一次
    if ($(".jschartli").length < 1) {
        console.log(roomId, inRoom)
        return false;
    } else if (start == false) {
        start = true;
        return send("#打卡");
    }
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    // 每3min随机点播电影 - -！
    if (min % 3 == 0 && sec == 30) {
        var danmu = [
            '金瓶梅', "安塔芮丝", "血恋", "键", "西西里的美丽传说", "巴黎野玫瑰", "九歌", "罗马帝国艳情史", "姊妹情色", "母亲，爱情的限度", "嫩草的香味", "解放的潘多拉", "大开眼戒", "困惑的浪漫", "困惑的浪漫2", "意大利种马", "索多玛120天", "与我同眠", "天地无伦", "本能", "本能2", "爱欲疑狂", "感官世界", "霜花店", "情色沙漠", "一路向西",
            // wrong
            "剪刀手肖申克", "爱德华的救赎", "理发师爱德华", "剪刀手马德华", "剪刀手刘德华", "剪刀手任达华", "剪刀手董文华", "肖申克剪到手", "剪掉手刘德华", "剪刀手爱中华", "剪刀手爱如花", "天使爱美丽", "天使爱德华", "剪刀手爱美丽", "天使艾薇儿", "天堂钢琴师", "海上电影院", "这个修女有点冷", "杀手也疯狂", "杀手闭嘴", "你丫比尔", "杀死劳尔", "牯岭街少年杀死比尔", "海上理发师", "海上调教师", "海上入殓师", "德州扒鸡杀人狂", "德州电锯扒鸡狂", "夹了逼海盗", "马勒比海盗", "社会主义好", "变性金刚", "2012家有喜事", "2012的第一滴血", "多啦A片", "吃玲", "唐伯虎点秋菊", "贫民窟的百万菊花", "贫民窟的百万宝贝", "春天花花装逼会", "沉默的喜羊羊", "七宗大烟枪", "猜飞机", "秋菊打飞机", "三枪内衣拍案惊奇", "3P拍案惊奇", "摸光之城—初夜", "暮光之城管", "阿甘地正传", "杜拉拉生殖器", "全民操人", "老人与海尔兄弟", "阿凡思密达", "玛丽与马克思列宁主义", "马里奥与马克思", "和花木兰的500天", "关于花木兰的一切", "春哥乍泄", "杯具总动员", "哈利波特大与F罩杯", "哈里波霸", "放牛班的伍德斯托克音乐节", "松岛枫的救赎", "迷失东京热", "武藤兰道", "荒野大嫖客", "黄昏双飞客", "黄金3P客", "索马里120天", "科索沃的120天", "沃尔玛的120天", "奥巴马的120天", "剪刀手广电局"
        ];
        var dd = parseInt(Math.random() * danmu.length);
        var d = "#《" + danmu[dd] + "》成功！马上就开播啦，已扣除积分" + parseInt(Math.random() * 9999);
        return send(d);
    }
    // 每10min打卡
    if (min % 10 == 0 && sec == 30) {
        return send("#打卡");
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
    return true;
}
