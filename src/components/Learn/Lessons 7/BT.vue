<template>
  <el-row>
    <el-col :span="12">
      <div class="grid-content bg-purple">
        <h3>Draggable 1</h3>
        <draggable class="list-group" :list="list1" group="people" :move="log">
          <div class="list-group-item" v-for="(element, index) in list1" :key="element.name">
            {{ element.name }} {{ index }}
          </div>
        </draggable>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple-light">
        <h3>Draggable 2</h3>
        <draggable class="list-group" :list="list2" group="people" :move="log">
          <div class="list-group-item" v-for="(element, index) in list2" :key="element.name">
            {{ element.name }} {{ index }}
          </div>
        </draggable>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import draggable from "vuedraggable";

export default {
  name: "BT",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        {name: "John", id: 1},
        {name: "Joao", id: 2},
        {name: "Jean", id: 3},
        {name: "Gerard", id: 4}
      ],
      list2: [
        {name: "Juan", id: 5},
        {name: "Edgard", id: 6},
        {name: "Johnson", id: 7}
      ]
    };
  },
  methods: {
    add: function () {
      this.list.push({name: "Juan"});
    },
    replace: function () {
      this.list = [{name: "Edgard"}];
    },
    clone: function (el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function (evt) {
      window.console.log(evt);
    }
  }
};
</script>