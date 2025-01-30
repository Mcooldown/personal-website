export default {
  name: "ProjectItem",
  props: {
    project: {
      required: true,
      default: () => ({})
    }
  },
}