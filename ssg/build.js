const builder = require('./utils/output.js')


let html=`<html>
<head>
</head>
<body>
<h2>Primii pasi...!!!</h2>
</body>
</html>
`


builder.writeContentToDisk('./ssg/dist/index.html',html);
