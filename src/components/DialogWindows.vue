<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    width="50%"
    :before-close="showSuccessButton?handleClose:null"
  >

    <slot></slot>

    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogSuccess" v-if="showSuccessButton"
        >保存</el-button
        >

        <el-button @click="dialogClose">取消</el-button>

      </span>
    </template>
  </el-dialog>
</template>


<script lang="ts" setup>
import { reactive, ref } from "vue";
import { ElMessageBox } from "element-plus";

const dialogVisible = ref(false);
const params = reactive({});
const showSuccessButton = ref(true);

const handleClose = (done: () => void) => {
  if (!showSuccessButton.value) {
    return;
  }

  ElMessageBox.confirm("确认关闭吗?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};


defineExpose({
  dialogVisible, showSuccessButton, params
});

const emit = defineEmits(["dialogSubmit", "dialogCancel"]);

function dialogSuccess() {
  emit("dialogSubmit");
}

function dialogClose() {
  emit("dialogCancel");
}

defineProps(["title"]);


</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>