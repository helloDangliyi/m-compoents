<template>
  <m-form 
  label-width="100px" 
  :options="options"
  @on-preview="handlePreview"
  @on-remove="handleRemove"
  @before-remove="beforeRemove"
  @on-exceed="handleExceed"
  @on-success="handleSuccess"
  @on-change="handleChange"
  @before-upload="handleBeforeUpload"
  >
     <template #uploadArea>
      <el-button type="primary">点击</el-button>
    </template>
    <template #uploadTip>
      <div style="font-size: 12px;color: #ccc;">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </m-form>
</template>

<script lang='ts' setup>
import {} from "vue"
import { FormOptions } from "../../components/form/src/type";
import { ElMessage, ElMessageBox } from 'element-plus'

let options:FormOptions [] =[
  {
    type:'input',
    value:'',
    label:'用户名',
    prop:'username',
    rules:[
      {
        required: true,
        message:'用户名不能为空',
        trigger:'blur'
      },
      {
        min: 2,
        max:6,
        message:'用户名在2-6位之间',
        trigger:'blur'
      },
    ],
    attrs:{
      clearable:true
    }
  },
  {
    type:'input',
    value:'',
    label:'密码',
    prop:'password',
    rules:[
      {
        required: true,
        message:'密码不能为空',
        trigger:'blur'
      },
      {
        min: 6,
        max:16,
        message:'密码在6-15位之间',
        trigger:'blur'
      },
    ],
    attrs:{
      showPassword: true,
      clearable:true
    }
  },
  {
    type:'select',
    value:'',
    placholder:'请选择职位',
    prop:'role',
    label:'职位',
    attrs:{
      style:{
        width:'100%'
      }
    },
    rules:[
      {
        required: true,
        message:'职位不能为空',
        trigger:'blur',
      }
    ],
    children:[
      {
        type:'option',
        label:'经理',
        value: '1',
      },
      {
        type:'option',
        label:'主管',
        value: '2',
      },
      {
        type:'option',
        label:'员工',
        value: '3',
      },
    ],
    
  },
  {
    type:'checkbox-group',
    value: [],
    prop:'like',
    label:'爱好',
    rules:[
      {
        required: true,
        message:'爱好不能为空',
        trigger:'blur',
      }
    ],
    children:[
      {
        type:'checkbox',
        label:'足球',
        value:'1'
      },
      {
        type:'checkbox',
        label:'篮球',
        value:'2'
      },
      {
        type:'checkbox',
        label:'排球',
        value:'3'
      },
    ]
  },
  {
    type:'radio-group',
    value: 'male',
    prop:'gender',
    label:'性别',
    rules:[
      {
        required: true,
        message:'性别不能为空',
        trigger:'blur',
      }
    ],
    children:[
      {
        type:'radio',
        label:'男',
        value:'male'
      },
      {
        type:'radio',
        label:'女',
        value:'female'
      },
      {
        type:'radio',
        label:'保密',
        value:'not'
      },
    ]
  },
  {
    type:'upload',
    label:'上传',
    prop:'pic',
    rules:[
      {
        required: true,
        message:'不能为空',
        trigger:'blur',
      }
    ],
    uploadAttrs:{
      action:'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15'
    }
  }
]

const handleRemove = (val:any) => {
  let {file, fileList} = val
  console.log('handleRemove',file, fileList)
}

const handlePreview = (val:any) => {
  let {file, fileList} = val
  console.log('handlePreview',file, fileList)
}

const handleExceed = (val:any) => {
  let {files, fileList} = val
  ElMessage.warning(
    `handleExceed The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + fileList.length
    } totally`
  )
}

const beforeRemove = (val:any) => {
  let {file, fileList} = val
  return ElMessageBox.confirm(
    `beforeRemove Cancel the transfert of ${file.name} ?`
  ).then(
    () => true,
    () => false
  )
}

let handleSuccess = (val:any) =>{
  let {response,file, fileList} = val
  console.log('handleSuccess',response,file,fileList);
}

let handleChange = (val:any)=>{
  let {file, fileList} = val
  console.log('handleChange',file,fileList);
}

let handleBeforeUpload = (val:any) =>{
  console.log('handleBeforeUpload',val);
}
</script>

<style lang="scss" scoped></style>
