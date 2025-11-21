import {
  unwrapTables,
  wrapTables,
} from "../plugins/ckeditor/custom/tableWrapper"

export default {
  beforeCreate(event) {
    if (event.params.data.content) {
      event.params.data.content = wrapTables(event.params.data.content)
    }
  },

  beforeUpdate(event) {
    if (event.params.data.content) {
      event.params.data.content = wrapTables(event.params.data.content)
    }
  },

  afterFindOne(event) {
    if (event.result?.content) {
      event.result.content = unwrapTables(event.result.content)
    }
  },

  afterFindMany(event) {
    event.result = event.result.map((r) => {
      if (r.content) r.content = unwrapTables(r.content)
      return r
    })
  },
}
