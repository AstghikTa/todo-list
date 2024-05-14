<template>
  <v-card class="mx-auto my-8 task" elevation="16" width="auto">
    <v-card-item>
      <v-checkbox @update:modelValue="onSelect" :modelValue="isSelected"></v-checkbox>
      <v-card-title class="taskLine"> {{ data.title }} </v-card-title>
    </v-card-item>
    <v-card-text class="description  taskLine">
      {{ data.description }}
    </v-card-text>
    <v-card-text class="taskLine"> Status: {{ data.status }} </v-card-text>
    <v-card-text class="taskLine"> Created at: {{ createdAt }} </v-card-text>

    <v-card-text class="taskLine"> Due date: {{ dueDate }} </v-card-text>

    <v-card-text>
      <RouterLink :to="`/task/${data._id}`">Show more...</RouterLink>
    </v-card-text>

    <v-card-actions>
      <v-col >  
      <v-btn
      v-if="data.status === 'active'"
      color="blue-darken-2"
      variant="elevated"
      @click="onStatusChange('done')"
    >
      <v-icon icon="mdi-reload" />
    </v-btn>
   
    <v-btn v-else color="success" variant="elevated" class="tasksBtn" @click="onStatusChange('active')">
      <v-icon icon="mdi-check-outline" />
    </v-btn>

      <v-btn class="tasksBtn" color="warning" variant="elevated" @click="onEdit">
        <v-icon icon="mdi-archive-edit-outline" />
      </v-btn>
      <v-btn class="tasksBtn" color="error" variant="elevated" @click="onDelete">
        <v-icon icon="mdi-delete-outline" />
      </v-btn>
    </v-col>
    </v-card-actions>
  </v-card>
</template>

<script src="./task.js"></script>

<style scoped>
.description{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-decoration: black;
 font-size: larger;
}
.task {
text-align: center;

}



</style>