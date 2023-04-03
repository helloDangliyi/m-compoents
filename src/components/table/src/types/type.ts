export interface TableOptions {
    // 表头
    label: String,
    prop?:String,
    width?:String | Number,
    align?: 'letf'| 'center'|'right',
    // 自定义列模板
    slot?:string,
    // 操作选项
    action?:boolean,
    // 是否是可编辑的单元格
    editTable?: boolean
}