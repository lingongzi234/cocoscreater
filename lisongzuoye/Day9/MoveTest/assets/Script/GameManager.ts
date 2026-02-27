
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property([cc.Node])
    targets: cc.Node[] = [];   
    @property([cc.SpriteFrame])
    cakeFrames: cc.SpriteFrame[] = [];
    @property(cc.Node)
    cakePoll: cc.Node=null; 

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private homeowner: cc.Node = null;
    private bullets: cc.Node[] = [];

    start () {
       this.randomBlackOne ();
       this.bindClick();
    }
    update(dt: number) {

        for (let i = this.bullets.length - 1; i >= 0; i--) {
    
            let bullet = this.bullets[i];
            let target = bullet["target"];
    
            if (!bullet.isValid || !target || !target.isValid) continue;
    
            let bulletRect = bullet.getBoundingBoxToWorld();
            let targetRect = target.getBoundingBoxToWorld();
    
            if (bulletRect.intersects(targetRect)) {
                this.hitTarget(bullet, target);
                this.bullets.splice(i, 1);
            }
        }
    }
    randomBlackOne () {
        this.targets.forEach(node => {
            node.color = cc.Color.WHITE;
        });
        let index = Math.floor(Math.random() * this.targets.length);

        this.homeowner = this.targets[index]
        this.targets.forEach(n => {
            n["isDead"] = false;
        });

        this.homeowner.color = cc.Color.BLACK;
    }
    bindClick () {
        this.targets.forEach(node => {
            node.on(cc.Node.EventType.TOUCH_START, () => {
                this.onTargetClick(node);
            }, this);
        });
    }
    onTargetClick (clicked: cc.Node) {

        if (clicked["isDead"]) return;

        if (clicked === this.homeowner) {
            console.log("点到了房主");
            return;
        }

        this.createBullet(clicked);
    }

    shootTo (target: cc.Node) {

        console.log(this.homeowner.name, "攻击", target.name);

       
    }
    createBullet(target: cc.Node) {

        let frame = this.cakeFrames[Math.floor(Math.random() * this.cakeFrames.length)];
    
        let bullet = new cc.Node();
        let sp = bullet.addComponent(cc.Sprite);
        sp.spriteFrame = frame;
    
        bullet.parent = this.cakePoll;
        bullet.position = this.homeowner.position;
        bullet["target"] = target;
    
        this.bullets.push(bullet);
    
        this.flyBezier(bullet, target);
    }
    flyBezier(bullet: cc.Node, target: cc.Node) {

        bullet.parent = this.node;
    
        let start = bullet.position;  // Vec3 ！！注意
        let worldEnd = target.parent.convertToWorldSpaceAR(target.position);
        let end = this.node.convertToNodeSpaceAR(worldEnd); // Vec3

        let start2 = cc.v2(start.x, start.y);
        let end2   = cc.v2(end.x, end.y);

        let mid = cc.v2(
            (start2.x + end2.x) / 2,
            (start2.y + end2.y) / 2
        );
        let center = cc.v2(0, 0);

        let dir = center.sub(mid).normalize();
        let control = cc.v2(
            mid.x + dir.x * 250,
            mid.y + dir.y * 250
        );
        let bezier = [start2, control, end2];
    
        cc.tween(bullet)
            .then(cc.bezierTo(0.6, bezier))
            .start();
    }
    
    hitTarget(bullet: cc.Node, target: cc.Node) {
        if (target["isDead"]) return;
        target["isDead"] = true;

        target.color = cc.Color.RED;
        this.scheduleOnce(() => {
            target.color = cc.Color.WHITE;
        }, 1);
    
        this.fadeAndRemoveBullet(bullet);
    }
    fadeAndRemoveBullet(bullet: cc.Node) {

        cc.tween(bullet)
            .to(1, { opacity: 0 })
            .start();
    }
}
