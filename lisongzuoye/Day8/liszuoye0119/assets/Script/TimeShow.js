cc.Class({
    extends: cc.Component,

    properties: {
        timeLabel: {
            default: null,
            type: cc.Label
        },
        colorButton: {
            default: null,
            type: cc.Node  // 添加一个按钮节点
        },
        // 可选：预
    },

    onLoad () {
        this.startTimer();

        // 监听屏幕状态
        cc.systemEvent.on('SCREEN_OFF', this.stopTimer, this);
        cc.systemEvent.on('SCREEN_ON', this.startTimer, this);
    },
    startTimer () {
        this.updateTime();
        this.schedule(this.updateTime, 1);
        cc.log("计时器启动");
    },

    // 停止循环器
    stopTimer () {
        this.unschedule(this.updateTime);
        cc.log("计时器停止");
    },

    updateTime () {
        const now = new Date();

        const year = now.getFullYear();
        const month = this.pad(now.getMonth() + 1);
        const day = this.pad(now.getDate());
        const hour = this.pad(now.getHours());
        const minute = this.pad(now.getMinutes());
        const second = this.pad(now.getSeconds());

        const timeStr = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

        if (this.timeLabel) {
            this.timeLabel.string = timeStr;
        }
        cc.log("当前时间：", timeStr);
    },
    changeTimeColorBright() {
        if (!this.timeLabel) return;
        
        // 生成较亮的颜色
        const r = Math.floor(Math.random() * 156) + 100; // 100-255
        const g = Math.floor(Math.random() * 156) + 100; // 100-255
        const b = Math.floor(Math.random() * 156) + 100; // 100-255
        
        this.timeLabel.node.color = cc.color(r, g, b);
    },

    pad (num) {
        return num < 10 ? "0" + num : num.toString();
    }
});
