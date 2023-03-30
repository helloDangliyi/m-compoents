// 可配置的表单
import { RuleItem } from './types/rule'
import { CSSProperties } from 'vue'

// 表单每一项的配置选项
export interface FormOptions {
    // 表单项的元素
    type:'cascader' | 'checkbox'|'checkbox-group' | 'checkbox-button'|'color-picker'|
    'date-picker'|'input'|'input-number'| 'radio'|'radio-group' | 'radio-button'|'rate'|
    'select'|'option'|'slider'|'switch'|'time-picker'|'time-select'|'transfer'|'upload',
    // 表单项的值
    value?:any,
    // 表单项lable
    label?:string,
    // 表单项的标识
    prop?:string,
    // 表单项的验证规则:async-validator 插件用来编写表单的验证
    rules?: RuleItem[],
    // 表单项的占位符
    placholder?:string,
    // 表单元素特有的属性
    attrs?:{
        clearable?:boolean,
        showPassword?:boolean,
        disabled?:boolean,
        // css样式
        style?: CSSProperties,
    },
    // 表单项的子元素
    children?: FormOptions [],
    // 处理上传组件的属性和方法
    uploadAttrs?:{
        action:string,
        headers?:object,
        method?:'post'|'put'|'patch',
        multiple?:boolean,
        data?:any,
        name?:string,
        withCredentials?:boolean,
        showFileList?:Boolean,
        drag?:Boolean,
        accept?:string,
        thumbnailMode?:boolean,
        fileList?:any [],
        listType?:'text' | 'picture' | 'picture-card',
        autoUpload?:Boolean,
        disabled?:Boolean,
        limit?:Number,
    }
}