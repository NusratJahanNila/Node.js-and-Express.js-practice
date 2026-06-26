const fs = require('fs');
const path = require('path');

// path.join guarantees it looks inside the same folder as fsModule.js
const filePath = path.join(__dirname, 'text.txt'); 
//async 
// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//         console.error("Error reading files:", err);
//         return;
//     }
//     console.log(data);
// });

//sync
// const data = fs.readFileSync(filePath, "utf8");
// console.log("File Content: ",data)


//Write
fs.writeFile("data.txt", "Hello from Nila",(err, data) => {
 if (err) {
     console.error("Error writing files:", err);
    }
    else{

        console.log("File Write successfully");
    }
})