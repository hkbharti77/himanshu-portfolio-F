const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://www.google.com/s2/favicons?domain=example.com&sz=32';

https.get(url, (response) => {
  if (response.statusCode === 200) {
    const fileStream = fs.createWriteStream(path.join(__dirname, '../public/favicon.ico'));
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log('Favicon downloaded successfully!');
    });
    
    fileStream.on('error', (err) => {
      console.error('Error writing favicon file:', err);
    });
  } else {
    console.error('Failed to download favicon. Status code:', response.statusCode);
  }
}).on('error', (err) => {
  console.error('Error downloading favicon:', err);
});