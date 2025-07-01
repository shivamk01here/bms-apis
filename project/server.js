const app = require('express')();

const UserRoutes = require('./routes/user.route')

app.use('api', UserRoutes);

app.get('/', (req, res)=>{
    res.send('APIs Are healthy');   
})

app.listen(3000, (req, res)=>{
    console.log('server is running on port 3000');
})