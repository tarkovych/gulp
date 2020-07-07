var fs = require('fs');

fs.unlink('/Users/mac/Library/Preferences/SmartGit/19.1/preferences.yml', function(err) {
  if (err) throw err;

  console.log('file deleted');
});
fs.unlink('/Users/mac/Library/Preferences/SmartGit/19.1/.backup/preferences.yml', function(err) {
  if (err) throw err;

  console.log('file deleted');
});