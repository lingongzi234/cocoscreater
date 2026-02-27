// GameTypes.ts

// ===== 棋子类型 =====
export enum Piece {
    Empty = 0,
    Player = 1,
    AI = 2
}

// ===== 游戏结果 =====
export enum ResultType {
    PlayerWin,
    PlayerLose,
    Draw
}

// ===== 教程状态 =====
export enum TutorialState {
    Idle,        // 未开始
    ShowingStep, // 显示提示
    WaitingAI,   // 等AI走完
    Ending       // 教程结束
}

// ===== 教程步骤结构 =====
export interface TutorialStep {
    playerMove: { r: number, c: number };
    aiMove?: { r: number, c: number };
    tipText: string;
}

// ===== 存档数据结构 =====
export interface SaveData {
    boardSize: number;
    winCount: number;
    playerScore: number;
    aiScore: number;
    board: number[][];
    isPlayerTurn: boolean;
    playerFirst: boolean;
}
