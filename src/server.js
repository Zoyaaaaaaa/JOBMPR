const express = require('express');
const multer = require('multer');
const app = express();
const port = 3001;


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


app.post('/uploadjob', upload.single('companyLogo'), (req, res) => {
  const formData = req.body;
  const file = req.file;



  res.status(200).send('Data received successfully!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
