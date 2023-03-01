import { defineComponent, PropType,useAttrs } from "vue";
import { toLine } from "../../../utils";
import * as Icons from '@element-plus/icons-vue' //为了让图标可以正常显示
import './styles/index.scss'

// VUE3中，新增了 defineComponent ，它并没有实现任何的逻辑，只是把接收的 Object 
// 直接返回，它的存在是完全让传入的整个对象获得对应的类型，它的存在就是完全为了服务 TypeScript 而存在的
export default defineComponent({
    props: {
        data:{
            type: Array as PropType<any []>,
            require: true
          },
          // 默认选中的菜单
          defaultActive:{
            type:String,
            default:''
          },
          // 是否是路由模式
          router:{
            type:Boolean,
            default: false
          },
          // 键名,为了防止传入的路由数组名称 不一样.item[name]访问时，name是一个变量，可以自定义
          // 菜单标题的键名
          name:{
            type: String,
            default: 'name'
          },
          // 菜单索引的键名
          index:{
            type: String,
            default: 'index'
          },
          // 菜单图标标题的键名
          icon:{
            type: String,
            default: 'icon'
          },
          // 子菜单的键名
          children:{
            type: String,
            default: 'children'
          }
    },
    // setup 需要return 一个函数，函数也需要return jsx的代码
    setup(props,ctx) {
      // console.log('props: ', props.data);
      // 封装一个渲染无限层级菜单的方法
      // 函数会返回一段jsx的代码

      let renderMenu = (data:any []) => {
        return data.map((item: any) => {
          // 每个菜单的图标
          // item.i = `el-icon-${toLine(item[props.icon]!)}`  这样子写页面无法显示
          item.i = (Icons as any) [item[props.icon]!]

          // 处理sub-menu 的#title插槽
          let slots = {
            title: ()=>{
              return <>
                <item.i></item.i>
                <span>{item[props.name]}</span>
              </>
            }
          }

          // 递归渲染children
          if(item[props.children] && item[props.children].length) {
            return (
              <el-sub-menu index={item[props.index]} v-slots = {slots}>
                {renderMenu(item[props.children])}
              </el-sub-menu>
            )
          }
          // 正常渲染普通的菜单
          return (
            <el-menu-item index={item[props.index]}>
              <item.i></item.i>
              <span>{item[props.name]}</span>
            </el-menu-item>
          )
        }) 
      }

      let attrs = useAttrs()
      // console.log('attrs: ', attrs);

        return () => {
            return (
                <el-menu 
                defaultActive={props.defaultActive} 
                router={props.router}
                {...attrs}
                >
                  {renderMenu(props.data!)}
                </el-menu>
            )
        }
    }

})