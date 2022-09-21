<template>
  <el-tree-select
    :data="data"
    check-strictly
    :render-after-expand="false"
    placeholder="请选择"
    @change="selectTreeId"
    ref="menuElTreeSelect"
  />
</template>

<script lang="ts" setup>

import type { Ref } from "vue";
import { defineProps, ref, watch } from "vue";
import { ElTreeSelect } from "element-plus";

interface ElTreeData {
  value: string;
  label: string;
  parentId: string;
  children: ElTreeData[];
}

const data: Ref<ElTreeData[]> = ref([]);
const items = ref([]);


watch(items, (newX) => {
  newX.forEach(item => {
    const elTreeData = convert(item);
    data.value.push(elTreeData);
  });
});

const menuElTreeSelect = ref();
const currentSelectNode = ref();

function selectTreeId(treeId: string) {
  currentSelectNode.value = menuElTreeSelect.value.getCurrentNode();
  console.log("当前选中值:", treeId, "node:", currentSelectNode.value);
}

function convert(item: { id: string; name: string; parentId: ""; children: [] }): ElTreeData {
  const elTreeData: ElTreeData = { value: "", label: "", parentId: "", children: [] };

  elTreeData.value = item.id;
  elTreeData.label = item.name;
  elTreeData.parentId = item.parentId;

  if (item.children == null || item.children == undefined || item.children.length <= 0) {
    return elTreeData;
  }

  //递归
  item.children.forEach(child => {
    elTreeData.children.push(convert(child));
  });

  return elTreeData;
}

defineExpose({ data, items, currentSelectNode });

</script>

<style scoped>

</style>