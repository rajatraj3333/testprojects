const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/home',(req,res)=>{
  res.send('home Page')
})


app.get('/api/test',(req,res)=>{

  res.send('Home Page')
});

console.log(process.env.NODE_ENV);
const nodeEnv = 'production'
// Serve static files from the React app
if (nodeEnv==='production') {
  app.use(express.static(path.join(__dirname, '../../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});