const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

// Read the SVG file
const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/favicon.svg'));

// Convert to ICO
toIco([svgBuffer], { sizes: [16, 32, 48] })
  .then(icoBuffer => {
    // Write the ICO file
    fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);
    console.log('Favicon.ico generated successfully!');
  })
  .catch(err => {
    console.error('Error generating favicon:', err);
  });