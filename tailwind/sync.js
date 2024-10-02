module.exports = {
  proxy: 'http://localhost:3000',
  files: ["views/**/*.ejs", "public/**/*.{css,js}"],
  port: 3001,
  open: false,
  notify: false
}
