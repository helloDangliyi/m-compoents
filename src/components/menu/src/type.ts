export interface MenuItem {
    // 导航图标
    icon?: string,
    // 处理之后的图标
    i?: any,
    // 导航的名字
    name: string
    // 导航的标识
    index: string,

    // children是个数组，里面每一项的类型是MenuItem
    children?: MenuItem[]
}