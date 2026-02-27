// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
const pi=3.14;
@ccclass
export default class NewClass extends cc.Component {

    onHallButtonClick () {
           
        console.log("Hall Button Clicked");
        console.log("I am Li Song");
    }


    

    // update (dt) {}
}
