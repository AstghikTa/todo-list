import { mapMutations } from 'vuex'
import TaskApi from '../../../utils/taskApi.js'
import TaskModal from '../../TaskModal/TaskModal.vue'

const taskApi = new TaskApi()

export default {
  components: {
    TaskModal
},
  data() {
    return {
      task: null,
      isEditModalOpen: false
    }
  },
  created() {
    this.getTask()
  },
  computed: {
    createdAt() {
      return this.task.created_at.slice(0, 10)
    },
    dueDate() {
      return this.task.date?.slice(0, 10) || 'none'
    }
  },
  methods: {
    ...mapMutations(['toggleLoading']),
    toggleTaskModal(){
this.isEditModalOpen = !this.isEditModalOpen
    },
    getTask() {
      this.toggleLoading()
      const taskId = this.$route.params.taskId
      taskApi
        .getSingleTask(taskId)
        .then((task) => {
          this.task = task
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },

  statusChange() {
    const editedTask = {
        ...this.task,
        status: this.task.status==='active' ? 'done' : 'active'
    }
    this.toggleLoading()
    taskApi
        .updateTask(editedTask)
        .then((updatedTask) => {
            this.task = updatedTask
            let message;
            if (updatedTask.status === 'done') {
                message = 'The task is Done successfully!'
            }
            else {
                message = 'The task is restored successfully!'
            }
            this.$toast.success(message)
        })
        .catch(this.handleError)
        .finally(() => {
            this.toggleLoading()
        })
},

onSave(editedTask) {
  this.toggleLoading()
  taskApi
      .updateTask(editedTask)
      .then(() => {
          this.task = editedTask,
              this.toggleTaskModal()
          this.$toast.success('The task has been updated successfully')
      })
      .catch(this.handleError)
      .finally(() => {
               this.toggleLoading()
      })
},

    onDelete() {
      this.toggleLoading()
      const taskId = this.task._id
      taskApi
        .deleteTask(taskId)
        .then(() => {
          this.$router.push('/')
          this.$toast.success('The task have been deleted successfully!')
        })
        .catch(this.handleError)
        .finally(() => {
          this.toggleLoading()
        })
    },
    handleError(error) { 
      this.$toast.error(error.message)
   
    }
  }
}