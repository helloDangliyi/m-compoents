export interface EventItem {
    // 事件标题
    title: String,
    // 开始时间
    start: String,
    // 结束时间
    end: String,
    // 是否可拖拽
    editTable?:Boolean,
}