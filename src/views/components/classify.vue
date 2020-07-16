<template>
  <div>
    <ul class="classify-list">
      <li
        v-for="item in classify"
        v-bind:key="item.id"
        @click="handleClickClassifyItem(item.id)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "classify",
  data() {
    return {
      classify: this.classifyList
    };
  },
  props: {
    classifyList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClickClassifyItem(id) {
      this.$emit("classifyItemId", id);
    }
  }
};
</script>
