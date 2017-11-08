var express = require ("express")
var app = express()

app.use(express.static("./",{
	index: 'FirstWebPage.html'
}));

app.listen(3000, function(){
	console.log('Server is listening to port 3000')
})

