const { ccclass, property } = cc._decorator;
import Cell from "./Cell";
const SAVE_KEY = "tictactoe_save";
import { Piece, ResultType, TutorialState, TutorialStep, SaveData } from "./GameTypes";

@ccclass
export default class GameManager extends cc.Component {
    @property(cc.Prefab)
    cellPrefab: cc.Prefab = null;
    @property(cc.Node)
    boardRoot: cc.Node = null; // 棋盘父节点
    @property(cc.Node)
    playerArrow: cc.Node = null;
    @property(cc.Node)
    aiArrow: cc.Node = null;
    @property(cc.Label)
    playerScoreLab: cc.Label = null;
    @property(cc.Label)
    aiScoreLab: cc.Label = null;
    @property(cc.Node)
    resultPanel: cc.Node = null;
    @property(cc.Label)
    resultLab: cc.Label = null;
    @property(cc.Button)
    continueButton: cc.Button = null;
    @property(cc.Node)
    yuKan: cc.Node = null;
    @property(cc.Node)
    line: cc.Node = null;
    @property(cc.AudioClip)
    xSound: cc.AudioClip = null;
    @property(cc.AudioClip)
    oSound: cc.AudioClip = null;
    @property(cc.AudioClip)
    startSound: cc.AudioClip = null;
    @property(cc.AudioClip)
    endSound: cc.AudioClip = null;
    @property(cc.Node)
    darkMask: cc.Node = null;  // 仅用于结束界面：全屏黑色遮罩（无镂空）
    @property(cc.Label)
    tutorialTipLab: cc.Label = null; // 提示文本
    @property(cc.Node) 
    tutorialLayer: cc.Node = null;
    @property(cc.Node) 
    guideUi: cc.Node = null;
    @property(cc.Mask) 
    holeMask: cc.Mask = null;
    @property(cc.Node) 
    focusFrame: cc.Node = null;
    @property(cc.Node) 
    finger: cc.Node = null;
    @property(cc.Node) 
    scoreRoot: cc.Node = null;
    @property(cc.Node) 
    winWay: cc.Node = null;
    @property(cc.Node) 
    allButtonsRoot: cc.Node = null;
    @property(cc.Button)
    tutorialSkipBtn: cc.Button = null; // 跳过教程按钮


    private tutorialSteps: TutorialStep[] = [];
    private currentStepIndex: number = 0;
    private inTutorial: boolean = false;
    private boardSize: number = 3; // 棋盘大小
    private winCount: number = 3;    // 连多少赢
    private playerScore:number=0; // 玩家分数
    private aiScore:number=0; // AI分数
    private board: Piece[][] = [];
    private cells: Cell[][] = [];
    private isPlayerTurn = true; // 是否是玩家回合
    private gameOver = false; // 游戏是否结束
    private aiThinking =false; // 是否是AI回合
    private aiDifficulty = 0.1; // AI难度
    private baseBoardWidth = 0;
    private gap: number = 30;
    private playerFirst = true; // 是否是玩家先手   
    private history: {
        board: Piece[][], // 棋盘状态
        isPlayerTurn: boolean // 是否是玩家回合
        }[] = []; // 历史记录
    private tutorialState: TutorialState = TutorialState.Idle; // 教程状态
    private scoreOriginPos: cc.Vec3 = cc.v3(); // 分数原始位置
    private playerArrowOriginPos: cc.Vec3 = cc.v3();
    private aiArrowOriginPos: cc.Vec3 = cc.v3();
    private actionToken: number = 0; // 动作令牌

    onLoad() {

        this.initTutorial();

        if (this.scoreRoot) {
            const widget = this.scoreRoot.getComponent(cc.Widget);
            if (widget && widget.enabled) widget.updateAlignment();
            this.scoreOriginPos = this.scoreRoot.position.clone();
        }
        if (this.playerArrow) this.playerArrowOriginPos = this.playerArrow.position.clone();
        if (this.aiArrow) this.aiArrowOriginPos = this.aiArrow.position.clone();

        const firstTime = !cc.sys.localStorage.getItem("tutorialCompleted");
        const hasSave = this.hasSavedState();
        if (firstTime && !hasSave) {
            // 先隐藏主界面，避免首次进入时闪一下 UI
            this.prepareTutorialUI();
            if (this.scoreRoot) this.scoreRoot.active = false;
            if (this.winWay) this.winWay.active = false;
            if (this.allButtonsRoot) this.allButtonsRoot.active = false;
            this.scheduleOnce(()=> this.startTutorial(), 0.2);
        }
        this.continueButton.node.on('click',() => this.startNewGame(),this);
        const temp = cc.instantiate(this.cellPrefab);
        const cellSize = temp.width;
        temp.destroy();
    
        this.gap = 30;
        this.baseBoardWidth = cellSize * 3 + this.gap * 2; // 3x3 总宽
        this.createBoard();
        if (hasSave) {
            this.loadGameState();
        }
        this.updateTurnArrow();
        cc.game.on(cc.game.EVENT_HIDE, this.saveGameState, this);
        const gameAny: any = cc.game as any;
        if (gameAny.EVENT_CLOSE) {
            gameAny.on(gameAny.EVENT_CLOSE, this.saveGameState, this);
        }
     
        
    }
    onDestroy() {
        cc.game.off(cc.game.EVENT_HIDE, this.saveGameState, this);
        const gameAny: any = cc.game as any;
        if (gameAny.EVENT_CLOSE) {
            gameAny.off(gameAny.EVENT_CLOSE, this.saveGameState, this);
        }
       
    }
    // === 棋盘创建/缩放 ===
    createBoard() {
    
        console.log("开始创建棋盘, size=", this.boardSize);
        this.board = new Array(this.boardSize);
        this.cells = new Array(this.boardSize);
        
        const temp = cc.instantiate(this.cellPrefab);
        const cellSize = temp.width;   // ⭐ 用预制体真实宽度
        temp.destroy();
        const offset = (this.boardSize - 1) / 2;
    
        for (let r = 0; r < this.boardSize; r++) {
            this.board[r] = new Array(this.boardSize);
            this.cells[r] = new Array(this.boardSize);
    
            for (let c = 0; c < this.boardSize; c++) {
    
                const node = cc.instantiate(this.cellPrefab);
                node.parent = this.boardRoot;
                node.x = (c - offset) * (cellSize+this.gap);
                node.y = (offset - r) * (cellSize+this.gap);
    
                const cell = node.getComponent(Cell);
                cell.init(r, c, this);  
                console.log("生成格子", r, c);
    
                this.board[r][c] = Piece.Empty;
                this.cells[r][c] = cell;
            }
        }
        this.updateBoardScale(cellSize);
    }
    updateBoardScale(cellSize: number) {
        const currentBoardWidth = cellSize * this.boardSize + this.gap * (this.boardSize - 1);
        const scale = this.baseBoardWidth / currentBoardWidth;

        this.boardRoot.scale = scale;
        console.log("棋盘缩放 =", scale);
    }
    
    // === 玩家回合 ===
    playerMove(r: number, c: number) {
        if(this.inTutorial && this.tutorialState === TutorialState.ShowingStep&&this.isPlayerTurn) {
            const step = this.tutorialSteps[this.currentStepIndex];
            if (r !== step.playerMove.r || c !== step.playerMove.c) return;
            this.isPlayerTurn = false;

            this.tutorialState = TutorialState.WaitingAI;
            this.hideSpotlight();

            const token = this.actionToken;
            this.placePiece(r, c, Piece.Player, () => {
                if (token !== this.actionToken) return;
                if (this.board[r][c] !== Piece.Player) return;
                this.updateTurnArrow();
                if (step.aiMove) {
                    this.scheduleOnce(() => {
                        if (token !== this.actionToken) return;
                        this.isPlayerTurn = true;

                        const ai = step.aiMove!;
                        if (this.board[ai.r][ai.c] !== Piece.Empty) return;
                        this.placePiece(ai.r, ai.c, Piece.AI, () => {
                           if (token !== this.actionToken) return;
                           if (this.board[ai.r][ai.c] !== Piece.AI) return;
                           this.updateTurnArrow();
                            this.goNextStep();
                        });
                    }, 0.6);
                } else {
                    this.isPlayerTurn = true;
                    this.updateTurnArrow();
                    this.goNextStep();
                }
            });

            return;
        }
        if (!this.isPlayerTurn || this.gameOver|| this.aiThinking) return;
        if (this.board[r][c] !== Piece.Empty) return;
        this.isPlayerTurn = false;
        const token = this.actionToken;
        this.placePiece(r, c, Piece.Player,()=>{
        if (token !== this.actionToken) return;
        if (this.board[r][c] !== Piece.Player) return;
        if (this.checkWin(Piece.Player)) {
            this.endGame("你赢了");
            return;
        }
        this.aiThinking = true;
        this.updateTurnArrow();
        this.scheduleOnce(
            () =>{
                if (token !== this.actionToken) return;
                this.aiThinking = false;
                this.aiMove();
            } ,0.5);
        });
    }
    // === AI 回合 ===
    aiMove() {
        if (this.inTutorial) return;
        if (this.boardSize === 3) {
            this.aiMoveSimple();
            return;
        }
        const pieceCount = this.countPieces();
        if (pieceCount <= 1) {
            this.playOpeningMove();
            return;
        }
    
        let bestScore = -Infinity;
        let bestMove = null;
    
        const moves = this.getCandidateMoves();
        moves.sort((a, b) => {
            this.board[a.r][a.c] = Piece.AI;
            const sa = this.evaluateBoard(Piece.AI);
            this.board[a.r][a.c] = Piece.Empty;
        
            this.board[b.r][b.c] = Piece.AI;
            const sb = this.evaluateBoard(Piece.AI);
            this.board[b.r][b.c] = Piece.Empty;
        
            return sb - sa;
        });
    
        for (let move of moves) {
    
            this.board[move.r][move.c] = Piece.AI;
    
            const score = this.minimax(0, -Infinity, Infinity, false);
    
            this.board[move.r][move.c] = Piece.Empty;
    
            if (score > bestScore) {
                bestScore = score;
                bestMove = move;
            }
        }
    
        if (bestMove) this.doAIMove(bestMove);
    }
    
    aiMoveSimple() {


        const playSmart = Math.random() < this.aiDifficulty*this.playerScore;
    
        if (playSmart) {
            const winMove = this.findBestMove(Piece.AI);
            if (winMove) {
                this.doAIMove(winMove);
                return;
            }
        
            const blockMove = this.findBestMove(Piece.Player);
            if (blockMove) {
                this.doAIMove(blockMove);
                return;
            }
        
            const center = Math.floor(this.boardSize / 2);
            if (this.board[center][center] === Piece.Empty) {
                this.doAIMove({ r: center, c: center });
                return;
            }
        
            const corners = [
                {r:0,c:0},{r:0,c:2},{r:2,c:0},{r:2,c:2}
            ];
            for (let pos of corners) {
                if (this.board[pos.r][pos.c] === Piece.Empty) {
                    this.doAIMove(pos);
                    return;
                }
            }
        }
        
            let empty = [];
            for (let r = 0; r < this.boardSize; r++)
                for (let c = 0; c < this.boardSize; c++)
                    if (this.board[r][c] === Piece.Empty)
                        empty.push({r,c});
        
            if (empty.length === 0) {
                this.endGame("平局");
                return;
            }
        
            const move = empty[Math.floor(Math.random()*empty.length)];
            this.doAIMove(move);
        }
    findBestMove(type: Piece): {r:number,c:number} | null {

        for (let r = 0; r < this.boardSize; r++) {
            for (let c = 0; c < this.boardSize; c++) {
    
                if (this.board[r][c] !== Piece.Empty) continue;
    
                this.board[r][c] = type; 
                const win = this.checkWin(type);
                this.board[r][c] = Piece.Empty; 
    
                if (win) return {r,c};
            }
        }
    
        return null;
    }
    doAIMove(move:{r:number,c:number}) {
        if (this.board[move.r][move.c] !== Piece.Empty) {
            const fallback = this.getCandidateMoves().find(m => this.board[m.r][m.c] === Piece.Empty);
            if (!fallback) return;
            move = fallback;
        }
        const token = this.actionToken;
        this.placePiece(move.r, move.c, Piece.AI, () => {
            if (token !== this.actionToken) return;
            if (this.board[move.r][move.c] !== Piece.AI) return;
    
            if (this.checkWin(Piece.AI)) {
                this.endGame("AI赢了");
                return;
            }
            if (this.isBoardFull()) {
                this.endGame("平局");
                return;
            }
    
            this.isPlayerTurn = true;
            this.updateTurnArrow();
        });
    }
    
    
    
    placePiece(r: number, c: number, type: Piece, cb?: Function) {
        this.saveHistory();
        this.board[r][c] = type;
        this.cells[r][c].setPiece(type,cb);
        this.saveGameState();
    }
    checkWin(type: Piece): boolean {

        const n = this.boardSize;
        const w = this.winCount;
        const b = this.board;
    
        const dirs = [
            [1, 0],   // ↓
            [0, 1],   // →
            [1, 1],   // ↘
            [1, -1],  // ↙
        ];
    
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
    
                if (b[r][c] !== type) continue;
    
                for (let [dr, dc] of dirs) {
    
                    let count = 1;
    
                    for (let k = 1; k < w; k++) {
                        const nr = r + dr * k;
                        const nc = c + dc * k;
    
                        if (nr < 0 || nr >= n || nc < 0 || nc >= n) break;
                        if (b[nr][nc] === type) count++;
                        else break;
                    }
    
                    if (count >= w) return true;
                }
            }
        }
        return false;
    }
    
    // === 结算与比分 ===
    endGame(msg: string) {
        this.gameOver = true;
        cc.log(msg);
        let result: ResultType;
        if (msg.includes("你赢")) result = ResultType.PlayerWin;
        else if (msg.includes("AI赢")) result = ResultType.PlayerLose;
        else result = ResultType.Draw;
    
        if (result !== ResultType.Draw) {
            if (this.endSound) {   
                cc.audioEngine.playEffect(this.endSound, false);
            }
            const winner = result === ResultType.PlayerWin ? Piece.Player : Piece.AI;
            const winningCells = this.getWinningCells(winner);
    
            this.playWinAnimation(winningCells, winner, () => {
                this.showResult(result);
                this.saveGameState();
            });
    
        } else {
            this.showResult(ResultType.Draw);
            this.saveGameState();
        }
    }
    updateTurnArrow() {
        if (!this.playerArrow || !this.aiArrow) return;
    
        const playerOpacity = this.isPlayerTurn ? 255 : 0;
        const aiOpacity = this.isPlayerTurn ? 0 : 255;

        const wiggleX = 12;
        const wiggleDuration = 0.4;

        this.playerArrow.stopAllActions();
        this.aiArrow.stopAllActions();
        this.playerArrow.position = this.playerArrowOriginPos.clone();
        this.aiArrow.position = this.aiArrowOriginPos.clone();
        cc.tween(this.playerArrow)
            .to(0.2, { opacity: playerOpacity })
            .start();
    
        cc.tween(this.aiArrow)
            .to(0.2, { opacity: aiOpacity })
            .start();

        const startWiggle = (node: cc.Node, originX: number) => {
            cc.tween(node)
                .repeatForever(
                    cc.tween()
                        .to(wiggleDuration, { x: originX + wiggleX }, { easing: "sineInOut" })
                        .to(wiggleDuration, { x: originX - wiggleX }, { easing: "sineInOut" })
                )
                .start();
        };

        if (this.isPlayerTurn) {
            startWiggle(this.playerArrow, this.playerArrowOriginPos.x);
        } else {
            startWiggle(this.aiArrow, this.aiArrowOriginPos.x);
        }
    }
    showResult(result: ResultType, applyScore: boolean = true) {
        this.resultPanel.active = true;

        switch (result) {
            case ResultType.PlayerWin:
                if (applyScore) this.playerScore += 1;
                this.resultLab.string = "You Win";
                break;

            case ResultType.PlayerLose:
                if (applyScore) this.aiScore += 1;
                this.resultLab.string = "You Lose";
                break;

            case ResultType.Draw:
                this.resultLab.string = "Draw";
                break;
        }

        this.updateScoreLabel();
    }
    updateScoreLabel() {
        this.playerScoreLab.string = this.playerScore.toString();
        this.aiScoreLab.string = this.aiScore.toString();
    }
    private detectResult(): ResultType | null {
        if (this.checkWin(Piece.Player)) return ResultType.PlayerWin;
        if (this.checkWin(Piece.AI)) return ResultType.PlayerLose;
        if (this.isBoardFull()) return ResultType.Draw;
        return null;
    }
    private bumpActionToken() {
        this.actionToken++;
    }
    // === 存档 ===
    private hasSavedState(): boolean {
        const raw = cc.sys.localStorage.getItem(SAVE_KEY);
        if (!raw) return false;
        try {
            const data: SaveData = JSON.parse(raw);
            return (
                typeof data.boardSize === "number" &&
                Array.isArray(data.board) &&
                typeof data.isPlayerTurn === "boolean"
            );
        } catch {
            return false;
        }
    }
    private saveGameState() {
        if (this.inTutorial) return;
        if (!this.board || this.board.length === 0) return;
        const data: SaveData = {
            boardSize: this.boardSize,
            winCount: this.winCount,
            playerScore: this.playerScore,
            aiScore: this.aiScore,
            board: this.board.map(row => [...row]),
            isPlayerTurn: this.isPlayerTurn,
            playerFirst: this.playerFirst
        };
        cc.sys.localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    }
    private clearSave() {
        cc.sys.localStorage.removeItem(SAVE_KEY);
    }
    private loadGameState() {
        const raw = cc.sys.localStorage.getItem(SAVE_KEY);
        if (!raw) return;
        let data: SaveData;
        try {
            data = JSON.parse(raw);
        } catch {
            return;
        }
        if (!data || !Array.isArray(data.board) || data.board.length === 0) return;
        this.bumpActionToken();
        this.boardSize = data.boardSize;
        this.winCount = data.winCount || (data.boardSize === 3 ? 3 : 4);
        this.playerScore = data.playerScore || 0;
        this.aiScore = data.aiScore || 0;
        this.playerFirst = data.playerFirst ?? true;
        this.isPlayerTurn = data.isPlayerTurn ?? true;
        this.gameOver = false;
        this.aiThinking = false;
        this.resultPanel.active = false;
        this.history = [];
        this.clearBoardNodes();
        this.createBoard();
        for (let r = 0; r < this.boardSize; r++) {
            for (let c = 0; c < this.boardSize; c++) {
                const piece = data.board[r]?.[c] ?? Piece.Empty;
                this.board[r][c] = piece;
                if (piece !== Piece.Empty) {
                    this.cells[r][c].setPieceInstant(piece);
                } else {
                    this.cells[r][c].reset();
                }
            }
        }
        this.updateScoreLabel();
        this.updateTurnArrow();
        this.updateBoardModeUI();
        const loadedResult = this.detectResult();
        if (loadedResult !== null) {
            this.gameOver = true;
            this.showResult(loadedResult, false);
            return;
        }
        if (!this.isPlayerTurn && !this.gameOver && !this.inTutorial) {
            this.aiThinking = true;
            const token = this.actionToken;
            this.scheduleOnce(() => {
                if (token !== this.actionToken) return;
                if (!this.isPlayerTurn && this.aiThinking && !this.gameOver) {
                    this.aiThinking = false;
                    this.aiMove();
                }
            }, 0.2);
        }
    }
    // === 局内流程 ===
    startNewGame(forcePlayerFirst: boolean = false) {
        this.bumpActionToken();
        if (this.startSound) { 
            cc.audioEngine.playEffect(this.startSound, false);
        }
        this.resultPanel.active = false;
        this.gameOver = false;
        this.aiThinking = false;
        this.history = [];
        if (forcePlayerFirst) {
            this.playerFirst = true;
        } else {
            this.playerFirst = !this.playerFirst;
        }
        
        this.isPlayerTurn = this.playerFirst;

        for (let r = 0; r < this.boardSize; r++) {
            for (let c = 0; c < this.boardSize; c++) {
                this.board[r][c] = Piece.Empty;
                this.cells[r][c].reset();
            }
        }

        this.updateTurnArrow();
        if (!this.isPlayerTurn) {
            this.aiThinking = true;
            this.scheduleOnce(() => {
                if (!this.isPlayerTurn && this.aiThinking && !this.gameOver) {
                this.aiThinking = false;
                this.aiMove();
                }
            }, 1);
        }
        this.saveGameState();
    }
    getWinningCells(type: Piece): Cell[] {
        const n = this.boardSize;
        const w = this.winCount;
        const b = this.board;
    
        const dirs = [
            [1, 0],   
            [0, 1],  
            [1, 1],   
            [1, -1],  
        ];
    
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (b[r][c] !== type) continue;
    
                for (let [dr, dc] of dirs) {
                    const cells: Cell[] = [this.cells[r][c]];
                    for (let k = 1; k < w; k++) {
                        const nr = r + dr * k;
                        const nc = c + dc * k;
    
                        if (nr < 0 || nr >= n || nc < 0 || nc >= n) break;
                        if (b[nr][nc] === type) cells.push(this.cells[nr][nc]);
                        else break;
                    }
                    if (cells.length >= w) return cells;
                }
            }
        }
        return [];
    }
    
    playWinAnimation(winningCells: Cell[], type: Piece, callback: Function) {
        const prefix = type === Piece.Player ? "X" : "O";

    
        for (let cell of winningCells) {
            const ani = cell.pieceSpine;
            ani.setCompleteListener(null);
            ani.setAnimation(0, `${prefix}_shengli`, false);
            ani.addAnimation(0, `${prefix}_shengli_dikuang`, false, 0);
        }

        this.scheduleOnce(() => { console.log("判定回调函数");
            if (callback) 
                {
                    console.log("成功");
                    callback(); }
                }, 1.5); 
    }
    // === 重启 / 悔棋 ===
    restart(){
        this.bumpActionToken();
        this.clearSave();
        this.playerScore = 0;
        this.aiScore = 0;
        this.updateScoreLabel();
        this.playerFirst = true;
        this.startNewGame(true);
    }
    saveHistory() {
        const copyBoard = this.board.map(row => [...row]); 
        this.history.push({
            board: copyBoard,
            isPlayerTurn: this.isPlayerTurn
        });
    }
    undo() {

        if (this.history.length < 2 || this.gameOver) return;
        if (!this.isPlayerTurn || this.aiThinking) return;
        this.bumpActionToken();
        this.unscheduleAllCallbacks();   
        this.gameOver = false;
        this.aiThinking = false;
        this.resultPanel.active = false;

        for (let i = 0; i < 2; i++) {
            if (this.history.length > 0) {
                const last = this.history.pop();
                this.board = last.board.map(row => [...row]);
                this.isPlayerTurn = last.isPlayerTurn;
            }
        }
        this.isPlayerTurn = true;
        // 恢复棋盘显示
        for (let r = 0; r < this.boardSize; r++) {
            for (let c = 0; c < this.boardSize; c++) {
                const piece = this.board[r][c];
                this.cells[r][c].reset();
                if (piece !== Piece.Empty) {
                    this.cells[r][c].setPieceInstant(piece); 
                }
            }
        }
        this.updateTurnArrow();
        this.saveGameState();
    }
    
    // === 模式切换 ===
    changeBoardSize(event: cc.Event, sizeStr: string) {
       

        const size = parseInt(sizeStr);
        if(this.boardSize===size) return;

        cc.log("按钮点击，棋盘尺寸 =", size);

        this.bumpActionToken();
        this.clearSave();
        this.boardSize = size;
        this.winCount = (size === 3) ? 3 : 4;

        this.resetGameCompletely();
        this.updateBoardModeUI();
    }
    resetGameCompletely() {

        this.unscheduleAllCallbacks();
        this.bumpActionToken();
    
        // 分数清零
        this.playerFirst = true;  
        this.playerScore = 0;
        this.aiScore = 0;
        this.updateScoreLabel();
    
        // 状态复位
        this.gameOver = false;
        this.aiThinking = false;
        this.isPlayerTurn = true;
        this.history = [];
    
        this.resultPanel.active = false;
    
        this.clearBoardNodes();
        this.createBoard();
        this.updateTurnArrow();
    }
    clearBoardNodes() {
        
        this.board = [];
        this.cells = [];
    
        this.boardRoot.removeAllChildren();
    }
    getCandidateMoves(): {r:number,c:number}[] {
        const moves = new Set<string>();
        const dirs = [-1, 0, 1];
    
        for (let r = 0; r < this.boardSize; r++) {
            for (let c = 0; c < this.boardSize; c++) {
    
                if (this.board[r][c] === Piece.Empty) continue;
    
                for (let dr of dirs) {
                    for (let dc of dirs) {
                        const nr = r + dr;
                        const nc = c + dc;
    
                        if (nr < 0 || nc < 0 || nr >= this.boardSize || nc >= this.boardSize) continue;
                        if (this.board[nr][nc] === Piece.Empty) {
                            moves.add(nr + "," + nc);
                        }
                    }
                }
            }
        }
    
        const result: {r:number,c:number}[] = [];
        moves.forEach((value) => {
            const arr = value.split(",");
            result.push({
                r: parseInt(arr[0]),
                c: parseInt(arr[1])
            });
        });
        const center = (this.boardSize - 1) / 2;
        const scoreMove = (m: {r:number,c:number}) => {
            // 1) 能赢优先
            this.board[m.r][m.c] = Piece.AI;
            const winAI = this.checkWin(Piece.AI);
            this.board[m.r][m.c] = Piece.Empty;
            if (winAI) return 1_000_000;
            // 2) 必堵优先
            this.board[m.r][m.c] = Piece.Player;
            const block = this.checkWin(Piece.Player);
            this.board[m.r][m.c] = Piece.Empty;
            if (block) return 500_000;
            // 3) 靠近中心优先
            const dist = Math.abs(m.r - center) + Math.abs(m.c - center);
            return 1000 - dist * 10;
        };
        result.sort((a, b) => scoreMove(b) - scoreMove(a));
    
        return result.slice(0, 6);
    }
    evaluateBoard(type: Piece): number {
        let score = 0;

        score += this.evaluateLines(type) * 1.3;
        score -= this.evaluateLines(type === Piece.AI ? Piece.Player : Piece.AI);

        
        const center = this.boardSize / 2;
        for (let r = 0; r < this.boardSize; r++) {
            for (let c = 0; c < this.boardSize; c++) {
                if (this.board[r][c] === type) {
                    score += 5 - (Math.abs(r - center) + Math.abs(c - center));
                }
            }
        }

        return score;
    }
    evaluateLines(type: Piece): number {

        const dirs = [[1, 0], [0, 1], [1, 1], [1, -1]];
        let score = 0;
    
        for (let r = 0; r < this.boardSize; r++) {
            for (let c = 0; c < this.boardSize; c++) {
    
                for (let [dr, dc] of dirs) {
    
                    let line: number[] = [];
    
                    for (let k = -4; k <= 4; k++) {
                        const nr = r + dr * k, nc = c + dc * k;
                        if (nr < 0 || nc < 0 || nr >= this.boardSize || nc >= this.boardSize) continue;
                        line.push(this.board[nr][nc]);
                    }
    
                    const str = line.join("");
    
                    if (str.includes(`${type}${type}${type}${type}`)) score += 1000000; // 连四
                    if (str.includes(`0${type}${type}${type}0`)) score += 20000;       // 活三
                    if (str.includes(`${type}${type}${type}0`)) score += 5000;        // 冲三
                    if (str.includes(`0${type}${type}0`)) score += 1000;              // 活二
                }
            }
        }
    
        return score;
    }
    
    minimax(depth: number, alpha: number, beta: number, isMax: boolean): number {
        if (depth >= 2) {
            if (this.checkWin(Piece.AI)) return 9999999 - depth;
            if (this.checkWin(Piece.Player)) return -9999999 + depth;
        }

        if (this.checkWin(Piece.AI)) return 10000000 - depth;
        if (this.checkWin(Piece.Player)) return -10000000 + depth;
    
        if (depth === 3)  
            return this.evaluateBoard(Piece.AI);
    
        const moves = this.getCandidateMoves();
    
        if (isMax) {
            let best = -Infinity;
    
            for (let m of moves) {
                this.board[m.r][m.c] = Piece.AI;
                const val = this.minimax(depth + 1, alpha, beta, false);
                this.board[m.r][m.c] = Piece.Empty;
    
                best = Math.max(best, val);
                alpha = Math.max(alpha, best);
                if (beta <= alpha) break; 
            }
    
            return best;
    
        } else {
            let best = Infinity;
    
            for (let m of moves) {
                this.board[m.r][m.c] = Piece.Player;
                const val = this.minimax(depth + 1, alpha, beta, true);
                this.board[m.r][m.c] = Piece.Empty;
    
                best = Math.min(best, val);
                beta = Math.min(beta, best);
                if (beta <= alpha) break;
            }
    
            return best;
        }
    }
    countPieces(): number {
        let count = 0;
        for (let r=0;r<this.boardSize;r++)
            for (let c=0;c<this.boardSize;c++)
                if (this.board[r][c] !== Piece.Empty) count++;
        return count;
    }
    playOpeningMove() {
        const center = Math.floor(this.boardSize/2);
    
        const openings = [
            {r:center,c:center},
            {r:center-1,c:center},
            {r:center,c:center-1},
            {r:center-1,c:center-1}
        ];
    
        const move = openings[Math.floor(Math.random()*openings.length)];
        this.doAIMove(move);
    }
    isBoardFull(): boolean {
        for (let r = 0; r < this.boardSize; r++)
            for (let c = 0; c < this.boardSize; c++)
                if (this.board[r][c] === Piece.Empty)
                    return false;
        return true;
    }
    updateBoardModeUI() {

        if (this.boardSize === 6) {
    
            // 6×6 模式
            if (this.yuKan) this.yuKan.active = true;
    
            if (this.line) {
                this.line.scaleX = 1.4;
            }
    
            console.log("切换到 6x6 UI");
    
        } else {
    
            // 3×3 模式
            if (this.yuKan) this.yuKan.active = false;
    
            if (this.line) {
                this.line.scaleX = 1;
            }
    
            console.log("切换到 3x3 UI");
        }
    }
    // === 新手教程 ===
    /** 初始化教程数据 */
    initTutorial() {
        this.tutorialSteps = [
            { playerMove: {r:0,c:0}, aiMove: {r:2,c:2}, tipText: "Tap an empty square to \n place your mark" },
            { playerMove: {r:2,c:1}, aiMove: {r:1,c:2}, tipText: "Block your opponent from \ncompleting their row" },
            { playerMove: {r:0,c:1}, tipText: "Get three marks in a row to \nwin!" }
        ];

        this.tutorialSkipBtn.node.on('click', () => this.skipTutorial(), this);
    }
    /** 开始教程 */
    startTutorial() {
        this.prepareTutorialUI();
        this.inTutorial = true;
        this.currentStepIndex = 0;
        this.tutorialState = TutorialState.ShowingStep;
        this.tutorialLayer.active = true;
    
        this.setupTutorialBoard();
        this.showStep();   // ⭐ 统一入口
    }
    /** 设置教程残局 */
    setupTutorialBoard() {
        for (let r=0;r<this.boardSize;r++)
            for (let c=0;c<this.boardSize;c++){
                this.board[r][c] = Piece.Empty;
                this.cells[r][c].reset();
            }

        this.board[2][0] = Piece.AI;  
        this.cells[2][0].setPieceInstant(Piece.AI);

        this.board[1][1] = Piece.Player;  
        this.cells[1][1].setPieceInstant(Piece.Player);
    }
  
    /** 高亮某个格子 */
    highlightCell(r: number, c: number) {
        for (let i=0;i<this.boardSize;i++)
            for (let j=0;j<this.boardSize;j++)
                this.cells[i][j].setHighlight(false);

        this.cells[r][c].setHighlight(true);
    }
    private clearHighlights() {
        for (let i=0;i<this.boardSize;i++)
            for (let j=0;j<this.boardSize;j++)
                this.cells[i][j].setHighlight(false);
    }
   
    /** 正式游戏开始 */
    startOfficialGame() {
        if (this.darkMask) {
            this.darkMask.off(cc.Node.EventType.TOUCH_END, this.startOfficialGame, this);
            this.darkMask.active = false;
        }
        if (this.holeMask && this.holeMask.node) this.holeMask.node.active = false;
        if (this.tutorialTipLab) this.tutorialTipLab.node.active = false;
        this.tutorialLayer.active = false; 
        this.playMainUIEnterAnim();
        this.inTutorial = false;
        this.restart(); 
    }
    /** 跳过教程 */
    skipTutorial() {
        if (this.darkMask) this.darkMask.active = false;
        if (this.holeMask && this.holeMask.node) this.holeMask.node.active = false;
        if (this.tutorialTipLab) this.tutorialTipLab.node.active = false;
        this.hideSpotlight();
        if (this.tutorialLayer) this.tutorialLayer.active = false;
        if (this.guideUi) this.guideUi.active = false;
        this.inTutorial = false;
        this.playMainUIEnterAnim();
        this.restart();
    }
   
    private showSpotlight(r: number, c: number) {

        const cellNode = this.cells[r][c].node;
        const worldPos = cellNode.convertToWorldSpaceAR(cc.v2());
        const localPos = this.tutorialLayer.convertToNodeSpaceAR(worldPos);

        if (this.holeMask && this.holeMask.node) {
            this.holeMask.node.active = true;
            const posInParent = this.holeMask.node.parent.convertToNodeSpaceAR(worldPos);
            this.holeMask.node.setPosition(posInParent.x, posInParent.y);
            this.holeMask.inverted = true;  
        }

        this.focusFrame.active = true;
        this.focusFrame.position = cc.v3(localPos);

        this.finger.active = true;
        this.finger.position = cc.v3(localPos.x + 60, localPos.y - 70, 0);

        this.playFingerGuideAnim();
    }
    private playFingerGuideAnim() {

        this.finger.stopAllActions();
        const topLeft = this.finger.position.clone();
        const bottomRight = cc.v2(topLeft.x + 50, topLeft.y - 50);

        this.finger.setPosition(bottomRight);  

        cc.tween(this.finger)
            .repeatForever(
                cc.tween()
                    .to(0.5, { position: topLeft }, { easing: "quadOut" })   // 右下 → 左上                       
                  
                    .to(0.5, { position: bottomRight }, { easing: "quadIn" }) // 左上 → 右下
                 
            )
            .start();
    }
    
    private hideSpotlight() {
        if (this.holeMask && this.holeMask.node) this.holeMask.node.active = false;
        this.focusFrame.active = false;
        this.finger.active = false;
        if(this.guideUi) this.guideUi.active = false;
        this.clearHighlights();
    }
    private goNextStep() {
        
        this.currentStepIndex++;
    
        if (this.currentStepIndex >= this.tutorialSteps.length) {
            this.endTutorial();   
            return;
        }
        if(this.guideUi) this.guideUi.active = true;
        this.tutorialState = TutorialState.ShowingStep;
        this.showStep();
    }
    
    private showStep() {
        const step = this.tutorialSteps[this.currentStepIndex];
    
        this.tutorialLayer.active = true;
        this.tutorialTipLab.node.active = true;
        this.tutorialTipLab.string = step.tipText;
    
        this.highlightCell(step.playerMove.r, step.playerMove.c);
        this.showSpotlight(step.playerMove.r, step.playerMove.c);
    }
   
    private endTutorial() {
        this.tutorialState = TutorialState.Ending;
    
        const winner = Piece.Player;
        const cells = this.getWinningCells(winner);
        if(this.endSound) {
            cc.audioEngine.playEffect(this.endSound, false);
        }
    
        this.playWinAnimation(cells, winner, () => {
    
            cc.sys.localStorage.setItem("tutorialCompleted", "true");
    
            // 全屏黑遮罩
            this.darkMask.active = true;
            if(this.guideUi) this.guideUi.active = true;
            this.tutorialTipLab.string = "Way to go!Now,onto the\nnext round!";
    
            this.darkMask.once(cc.Node.EventType.TOUCH_END, () => {
                this.startOfficialGame();
            }, this);
        });
    }
    private prepareTutorialUI() {
        const scoreRoot = this.scoreRoot;
        if (scoreRoot) {
            scoreRoot.stopAllActions();
            scoreRoot.position = this.scoreOriginPos.clone();
            scoreRoot.y = this.scoreOriginPos.y + 300;   // 直接移出屏幕外
        }
    
    
        if (this.winWay) this.winWay.active = false;
        if (this.allButtonsRoot) this.allButtonsRoot.active = false;
    }
    private playMainUIEnterAnim() {
        const scoreRoot = this.scoreRoot;
        if (scoreRoot) {
            scoreRoot.stopAllActions();
            scoreRoot.active = true;
            cc.tween(scoreRoot)
                .to(0.5, { position: this.scoreOriginPos }, { easing: "backOut" })
                .start();
        }
    
        if (this.winWay) {
            this.winWay.opacity = 0;
            this.winWay.active = true;
            cc.tween(this.winWay)
                .to(0.3, { opacity: 255 })
                .start();
        }
    
        if (this.allButtonsRoot) {
            this.allButtonsRoot.opacity = 0;
            this.allButtonsRoot.active = true;
            cc.tween(this.allButtonsRoot)
                .to(0.3, { opacity: 255 })
                .start();
        }
    }
    
    
}