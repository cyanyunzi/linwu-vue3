import { reactive } from "vue";
import type { FormRules } from "element-plus";

const addRules = reactive<FormRules>({
  name: [
    { required: true, message: "请输入菜单名称", trigger: "blur" },
    { min: 1, max: 10, message: "长度1到10", trigger: "blur" }
  ],
  code: [
    { required: true, message: "请输入菜单编码", trigger: "blur" },
    { min: 1, max: 10, message: "长度1到10", trigger: "blur" }
  ],
  path: [
    { required: true, message: "请输入菜单路径", trigger: "blur" },
    { min: 1, max: 10, message: "长度1到10", trigger: "blur" }
  ]
});

export {addRules};