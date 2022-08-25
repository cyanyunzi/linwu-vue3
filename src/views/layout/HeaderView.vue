<template>
  <el-header>头部</el-header>
</template>


<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

</script>


