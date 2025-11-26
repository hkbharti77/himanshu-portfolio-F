const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Create the favicon from the logo
async function createFavicon() {
  try {
    // Input and output paths
    const inputPath = path.join(__dirname, '../public/assets/logo/logo.png');
    const outputPath = path.join(__dirname, '../public/favicon.ico');
    
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error('Logo file not found at:', inputPath);
      return;
    }
    
    // Resize the logo to favicon sizes and create ICO file
    const pngBuffer = await sharp(inputPath)
      .resize(32, 32)
      .png()
      .toBuffer();
      
    // Write the favicon file
    fs.writeFileSync(outputPath, pngBuffer);
    console.log('Favicon created successfully at:', outputPath);
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

// Run the function
createFavicon();