export function wrapTables(md) {
  return md.replace(/((?:\|.*\n)+)/g, (match) => `\`\`\`md\n${match}\`\`\`\n`)
}

export function unwrapTables(md) {
  return md.replace(/```md\n([\s\S]*?)```/g, "$1")
}
