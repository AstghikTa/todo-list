<template>
  <v-container>
    <task-modal
      v-if="isTaskModalOpen"
      :isOpen="isTaskModalOpen"
      :editingTask="editingTask"
      @close="toggleTaskModal"
      @taskSave="onTaskSave"
      @taskAdd="onTaskAdd"
    />
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn color="info" @click="toggleTaskModal">Add new task</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <v-container >
    <v-row >
    
  <v-col v-for="taskData in tasks"   cols="12"
  xs="12" sm="12" md="6" lg="4" xl="4" xxl="3" :key="taskData._id">
        <task  :data="taskData"  @taskEdit="onTaskEdit(taskData)" @taskDelete="onTaskDelete(taskData._id)" />
      </v-col>
   
    </v-row>
  </v-container>
</template>

<script src="./todoList.js"></script>