import { defineComponent, PropType,useAttrs } from "vue";
import { toLine } from "../../../utils";
import { menuList } from "./type";

// VUE3中，新增了 defineComponent ，它并没有实现任何的逻辑，只是把接收的 Object 
// 直接返回，它的存在是完全让传入的整个对象获得对应的类型，它的存在就是完全为了服务 TypeScript 而存在的
export default defineComponent({
    props: {
        data:{
            type: Array as PropType<menuList []>,
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
          }
    },
    // setup 需要return 一个函数，函数也需要return jsx的代码
    setup(props,ctx) {
      console.log('props: ', props.data);
      // 封装一个渲染无限层级菜单的方法
      // 函数会返回一段jsx的代码

      let renderMenu = (data:menuList []) => {
        return data.map((item: menuList) => {
          // 每个菜单的图标
          item.i = `el-icon-${toLine(item.icon!)}`

          // 处理sub-menu 的#title插槽
          let slots = {
            title: ()=>{
              return <>
                <item.i></item.i>
                <span>{item.name}</span>
              </>
            }
          }

          // 递归渲染child
          if(item.child && item.child.length) {
            return (
              <el-sub-menu index={item.index} v-slots = {slots}>
                {renderMenu(item.child)}
              </el-sub-menu>
            )
          }
          // 正常渲染普通的菜单
          return (
            <el-menu-item index={item.index}>
              <item.i></item.i>
              <span>{item.name}</span>
            </el-menu-item>
          )
        }) 
      }

      let attrs = useAttrs()
      console.log('attrs: ', attrs);

        return () => {
            return (
                <el-menu 
                defaultActive={props.defaultActive} 
                router={props.router}
                {...attrs}
                >
                  {renderMenu(props.data)}
                </el-menu>
            )
        }
    }

})