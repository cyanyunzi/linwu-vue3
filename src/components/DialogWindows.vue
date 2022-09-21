<template>
  <el-dialog
    @opened="dialogInit"
    v-model="dialogVisible"
    title="Tips"
    width="50%"
    :before-close="handleClose"
  >

    <slot></slot>

    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogSuccess"
        >保存</el-button
        >

        <el-button @click="dialogVisible = false">取消</el-button>

      </span>
    </template>
  </el-dialog>
</template>


<script lang="ts" setup>
import { nextTick, onMounted, ref } from "vue";
import { ElMessageBox } from "element-plus";


const dialogVisible = ref(false);
const callbackFunction = ref(() => {
  return 1;
});

const handleClose = (done: () => void) => {
  ElMessageBox.confirm("确认取消操作吗?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};

function dialogInit() {
  dialogVisible.value = true;
}

function dialogClose() {
  dialogVisible.value = false;
  console.log("关闭对话框");
}



defineExpose({
  dialogVisible, callbackFunction, dialogInit,dialogClose
});

const emit =defineEmits(['dialogSubmit']);
function dialogSuccess(){
  emit('dialogSubmit')
}


</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>