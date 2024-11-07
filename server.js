import express from 'express';


const app = express();

const PORT = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/health', (req, res) => {
    res.send('<h1 style="color:green">Server is healthy</h1>');
    console.log(req.query);


    
    // res.status(400).json({ message: 'Server is healthy' });
})




app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})