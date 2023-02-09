// 把驼峰命名法转成横连接
export const toLine = (value:string) => {
    // 把大写字母分组，转成横杠连接，再转成小写
    return value.replace(/(A-Z)g/,'-$1').toLocaleLowerCase()
}