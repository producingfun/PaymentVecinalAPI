const mongoose = require('mongoose');
const mongouri = 'mongodb+srv://Humberto_Puga:<woznag-savte7-bacXef>@bold-management-group-v3s0g.gcp.mongodb.net/vecinos?retryWrites=true&w=majority'

mongoose.connect(
    mongo_uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
.then(()=>console.log('connected to mongo atlas'))
.catch(()=> console.log('error ALV'));

