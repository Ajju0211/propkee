import TableEditing from "@ckeditor/ckeditor5-table/src/tableediting"

export default class NoTableNormalization extends TableEditing {
  _postFixer() {
    return () => false
  }
}
