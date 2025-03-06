const express = require('express');  
const routes = require('./routes/index');  
require('dotenv').config();  

const app = express();  
const PORT = 3000;  

// Middlewares  
app.use(express.json());  

// Routes  
app.use('/api', routes);  

// Start server  
app.listen(PORT, () => {  
    console.log(`Server is running on http://localhost:${PORT}`);  
});  