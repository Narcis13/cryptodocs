var fs = require('fs');



exports.writeContentToDisk = function (path,content){

  fs.writeFile(path, content, function (err) {
        if (err) throw err;
        console.log('Saved '+path+' !');
      });
      

}