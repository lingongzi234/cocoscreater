
import {Band,Cpu,AppStore,OperatingSystem,SpecialFeatures } from './GameConst';

const {ccclass, property} = cc._decorator;

const BandEnum = cc.Enum(Band);
const CpuEnum = cc.Enum(Cpu);
const AppStoreEnum = cc.Enum(AppStore);
const OperatingSystemEnum = cc.Enum(OperatingSystem);
const SpecialFeaturesEnum = cc.Enum(SpecialFeatures);

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    bandLabel: cc.Label = null;
    @property(cc.Label)
    上市时间Label: cc.Label = null; 
    @property(cc.Label)
    手机尺寸Label: cc.Label = null; 
    @property(cc.Label)
    CpuLabel: cc.Label = null; 
    @property(cc.Label)
    手机操作系统Label: cc.Label = null; 
    @property(cc.Label)
    应用商城Label: cc.Label = null; 
    @property(cc.Label)
    手机特色功能介绍Label: cc.Label = null;  

    @property
    lunchDate: string = '';

    @property({ type: BandEnum })
    band: Band = BandEnum.iPhone17;
    @property({type: cc.Integer, slide: true, min: 0, max: 10})
    x: number = 1;   
    @property({type: cc.Integer, slide: true, min: 0, max: 10})
    y: number = 1;   
    @property({ type: CpuEnum })
    cpu: Cpu = Cpu.苹果A19;

    @property({ type: AppStoreEnum,
        visible() {
            return this.band !== BandEnum.iPhone17;
    } 
    })
    appStore: AppStore = AppStore.appleStore;

 
    @property({ type: OperatingSystemEnum })
    operatingSystem: OperatingSystem = OperatingSystem.iOS26;
    @property({ type: SpecialFeaturesEnum })
    特色功能介绍: SpecialFeatures = SpecialFeatures['iPhone 17 是苹果 2025 年推出的主力旗舰机型，特色在于将许多 Pro 级功能下放到标准款上，让体验更全面。它配备了更大更亮的 6.3 英寸 Super Retina XDR 显示屏，支持高达 120 Hz 的 ProMotion 自适应刷新率，显示更流畅、户外亮度高达 3000 尼特。影像系统升级到全系 48 MP 后置镜头和创新的 Center Stage 前置相机，支持更宽视角自拍和 Dual Capture 同时录制前后视频，拍照与视频能力更强。性能核心是基于 3nm 工艺的 A19 芯片，带来更高速度及更长续航，同时内置 N1 无线芯片支持 Wi-Fi 7 和 Bluetooth 6 等最新连网技术。整体设计更坚固耐用，并提供更大储存容量选择。'];




    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.updateCanvasSize();
        this.updateText();
    
    }
    updateText () {
        const bandName = Band[this.band];
        this.bandLabel.string = bandName;
        this.上市时间Label.string=this.lunchDate;
        this.CpuLabel.string=Cpu[this.cpu]
        this.手机操作系统Label.string=OperatingSystem[this.operatingSystem]
        this.应用商城Label.string=AppStore[this.appStore]
        this.手机特色功能介绍Label.string=SpecialFeatures[this.特色功能介绍];
    }


    updateCanvasSize () {
        const canvas = cc.find('Canvas').getComponent(cc.Canvas);
    
        const baseWidth = 72;
        const baseHeight = 128;
    
        const newWidth = baseWidth * this.x;
        const newHeight = baseHeight * this.y;
    
        canvas.designResolution = cc.size(newWidth, newHeight);
        this.手机尺寸Label.string=`${newWidth} x ${newHeight}`;
    
        cc.log(`Canvas 分辨率改为: ${newWidth} x ${newHeight}`);
    }


    // update (dt) {}
}
