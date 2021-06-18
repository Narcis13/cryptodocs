const builder = require('./utils/output.js')
const {main} = require('./pages/main')

const cine='Narcis'
const p=`<p>Un paragraf...</p>`



builder.writeContentToDisk('./ssg/dist/index.html',main({cine,p}));
