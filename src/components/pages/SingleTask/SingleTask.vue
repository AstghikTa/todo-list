<template>
  <v-container>
    <task-modal v-if="isEditModalOpen" :isOpen="isEditModalOpen" :editingTask="task" @close="toggleTaskModal"
      @taskSave="onSave" />
  </v-container> 
  <div class="singleTask"> 
  <v-card-title class="text-center text-h4 text-md-h5 text-lg-h3 mt-16"> Your Task</v-card-title>
  <v-card v-if="task" class="mx-auto mb-2 mt-10 ps-5" elevation="16" color="white-lighten-5" max-width="600">
  
   <v-card-item>
      <v-card-title class="text-wrap"> {{ task.title }} </v-card-title>
    </v-card-item>

    <v-card-text>
      {{ task.description }}
    </v-card-text>

    <v-card-text> Status: {{ task.status }} </v-card-text>

    <v-card-text> Created at: {{ createdAt }} </v-card-text>

    <v-card-text> Due date: {{ dueDate }} </v-card-text>

    <v-card-actions> 
    <v-col> 
      <v-btn
      v-if="task.status === 'active'"
      color="blue-darken-2"
      variant="elevated"
      @click="statusChange"
    >
      <v-icon icon="mdi-reload" />
    </v-btn>

    <v-btn
    v-else color="success"
    variant="elevated"
    @click="statusChange('active')"
  > 
  <v-icon icon="mdi-check-outline" /> 
</v-btn>
    
      <v-btn color="warning" variant="elevated" @click="toggleTaskModal">
        <v-icon icon="mdi-archive-edit-outline" />
      </v-btn>
      <v-btn color="error" variant="elevated" @click="onDelete">
        <v-icon icon="mdi-delete-outline" />
      </v-btn>
    </v-col>
    </v-card-actions>
  </v-card>
  <h4 v-else >Task not found!</h4>
</div>
</template>

<style scoped>
.singleTask {
  padding-top: 10px;
  padding-bottom: 200px;
  text-align: center;
}
</style>


<script src="./singleTask.js"></script>