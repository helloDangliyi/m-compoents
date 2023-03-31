<template>
  <el-button type="primary" @click="open">打开</el-button>
  <m-model-form 
  isScroll
  title="编辑用户" 
  v-model:visible="visible" 
  :options="options" 
  :width="700"
  :on-change="handleChange"
  :on-success="handleSuccess" 
  >

  <template #uploadArea>
      <el-button type="primary">点击</el-button>
    </template>
    <template #uploadTip>
      <div style="font-size: 12px;color: #ccc;">
        jpg/png files with a size less than 500KB.
      </div>
    </template>

    <template #footer="{form}">
      <span class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="onConfirm(form)">
          确定
        </el-button>
      </span>
    </template>

  </m-model-form>
</template>

<script lang='ts' setup>
import { ref } from "vue"
import { FormOptions } from "../../components/form/src/types/type";
import { ElMessage, ElMessageBox } from 'element-plus'

import type { ElForm } from 'element-plus';
type FormInstance = InstanceType<typeof ElForm>;

let visible = ref<boolean>(false)

let open = () => {
  visible.value = true
}

let options: FormOptions[] = [
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    rules: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 6,
        message: '用户名在2-6位之间',
        trigger: 'blur'
      },
    ],
    attrs: {
      clearable: true
    }
  },
  {
    type: 'input',
    value: '',
    label: '密码',
    prop: 'password',
    rules: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur'
      },
      {
        min: 6,
        max: 16,
        message: '密码在6-15位之间',
        trigger: 'blur'
      },
    ],
    attrs: {
      showPassword: true,
      clearable: true
    }
  },
  {
    type: 'select',
    value: '',
    placholder: '请选择职位',
    prop: 'role',
    label: '职位',
    attrs: {
      style: {
        width: '100%'
      }
    },
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'change',
      }
    ],
    children: [
      {
        type: 'option',
        label: '经理',
        value: '1',
      },
      {
        type: 'option',
        label: '主管',
        value: '2',
      },
      {
        type: 'option',
        label: '员工',
        value: '3',
      },
    ],

  },
  {
    type: 'checkbox-group',
    value: [],
    prop: 'like',
    label: '爱好',
    rules: [
      {
        required: true,
        message: '爱好不能为空',
        trigger: 'change',
      }
    ],
    children: [
      {
        type: 'checkbox',
        label: '足球',
        value: '1'
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: '2'
      },
      {
        type: 'checkbox',
        label: '排球',
        value: '3'
      },
    ]
  },
  {
    type: 'radio-group',
    value: '',
    prop: 'gender',
    label: '性别',
    rules: [
      {
        required: true,
        message: '性别不能为空',
        trigger: 'change',
      }
    ],
    children: [
      {
        type: 'radio',
        label: '男',
        value: 'male'
      },
      {
        type: 'radio',
        label: '女',
        value: 'female'
      },
      {
        type: 'radio',
        label: '保密',
        value: 'not'
      },
    ]
  },
  {
    type: 'upload',
    label: '上传',
    prop: 'pic',
    rules: [
      // {
      //   required: true,
      //   message: '图片不能为空',
      //   trigger: 'blur',
      // }
    ],
    uploadAttrs: {
      action: "https://jsonplaceholder.typicode.com/posts/",
      multiple: true,
      limit: 3,
    }
  },
  {
    type: 'editor',
    label: '描述',
    prop: 'desc',
    rules:[
      {
        required: true,
        message:'描述不能为空',
        trigger: 'blur'
      }
    ]
  }
]
let onCancel = ( form: FormInstance) =>{
  
}

let handleChange = (val: any) => {
  let { file, fileList } = val
  console.log('handleChange', file, fileList);
}

let handleSuccess = (val: any) => {
  let { response, file, fileList } = val
  console.log('val: ', val);
  console.log('handleSuccess', response, file, fileList);
}

let onConfirm = ( form: any) =>{
  console.log('form: ', form);
  let validater = form.validate()
  let formData = form.getFormData()
  validater((valid:any) =>{
    if(valid) {
      ElMessage.success('校验成功')
  console.log('formData: ', formData);

    }else {
      ElMessage.error('校验失败')
    }
  })
}
</script>

<style lang="scss" scoped></style>
