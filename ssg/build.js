const builder = require('./utils/output.js')
const main = require('./pages/main')

const cine='Narcis'
const p=`<p>Un paragraf...</p>`
let html=()=>`<html>
<head>
<title>Prima pagina</title>
</head>
<body>
<h2>Salut! Sunt ${cine} !</h2>
${p}
</body>
</html>
`


builder.writeContentToDisk('./ssg/dist/index.html',main({cine,p}));
