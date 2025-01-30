import Badge from '@/components/Badge.vue'

export default {
  name: "ProjectItem",
  components: {
    Badge
  },
  props: {
    project: {
      required: true,
      default: () => ({})
    }
  },
}