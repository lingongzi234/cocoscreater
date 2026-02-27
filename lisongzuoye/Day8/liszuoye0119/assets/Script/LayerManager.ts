const { ccclass, property } = cc._decorator;

@ccclass
export default class LayerManager extends cc.Component {
    @property(cc.Node)
    screenManagerNode: cc.Node = null;

    onLoad() {
        this.ensureTopLayer();
    }

    ensureTopLayer() {
        // 创建一个常驻节点用于放置顶层UI
        const canvas = cc.Canvas.instance.node;
        const topLayer = new cc.Node('TopLayer');
        
        // 设置为常驻节点
        cc.game.addPersistRootNode(topLayer);
        
        // 添加到Canvas
        topLayer.parent = canvas;
        topLayer.zIndex = 9999;
        
        // 将ScreenManager移到顶层
        if (this.screenManagerNode) {
            this.screenManagerNode.parent = topLayer;
            this.screenManagerNode.setPosition(cc.v2(0, 0));
        }
    }
}