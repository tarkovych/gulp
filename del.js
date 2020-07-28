var fs = require('fs');

fs.unlink('/Users/mac/Library/Preferences/SmartGit/20.1/preferences.yml', function(err) {
  if (err) throw err;
  console.log('file deleted');
});
fs.unlink('/Users/mac/Library/Preferences/SmartGit/20.1/license', function(err) {
  if (err) throw err;
  console.log('file deleted');
});
fs.unlink('/Users/mac/Library/Preferences/SmartGit/20.1/.backup/preferences.yml', function(err) {
  if (err) throw err;

  console.log('file deleted');
});