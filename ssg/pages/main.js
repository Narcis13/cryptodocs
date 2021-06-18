// Pagina principala
const {head} = require('../components/head')

const cap= head({title:'Pagina principala!'})

exports.main=(props)=>`<!doctype html>
<html lang="en">
${cap}
<body>
<h2>Salut! Sunt ${props.cine} !</h2>
${props.p}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</body>
</html>
`