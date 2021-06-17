// Pagina principala
const head = require('../components/head')

const cap= head({title:'Pagina principala'})

exports.main=(props)=>`<html>
${cap}
<body>
<h2>Salut! Sunt ${props.cine} !</h2>
${props.p}
</body>
</html>
`