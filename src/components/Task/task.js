export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    computed: {
      createdAt() {
        return this.data.created_at.slice(0, 10)
      },
      dataDate(){
        return this.data.date.slice(0, 10)
      }
    }
  }