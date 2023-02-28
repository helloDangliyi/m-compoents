export interface menuList {
    // 导航图标
    icon?: string,
    // 处理之后的图标
    i?: any,
    // 导航的名字
    name: string
    // 导航的标识
    index: string,

    // child是个数组，里面每一项的类型是menuList
    child?: menuList[]
}