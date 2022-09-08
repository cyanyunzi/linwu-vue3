<template>
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="50%"
    :before-close="handleClose"
  >

    <slot></slot>

    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
        >保存</el-button
        >

        <el-button @click="dialogVisible = false">取消</el-button>

      </span>
    </template>
  </el-dialog>
</template>


<script lang="ts" setup>
import { ref } from "vue";
import { ElMessageBox } from "element-plus";

const dialogVisible = ref(false);

const handleClose = (done: () => void) => {
  ElMessageBox.confirm("确认取消操作吗?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};

defineExpose({
  dialogVisible
});


</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>