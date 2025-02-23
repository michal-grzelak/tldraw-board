export default {
  '*.{md,?(s)css,json}': 'prettier --write',
  '*.(j|t)s?(x)': ['prettier --write', 'eslint --fix'],
  '*.ts?(x)': () => 'pnpm check:type',
}
