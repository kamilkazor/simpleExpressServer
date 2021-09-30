# :globe_with_meridians: simpleExpressServer
Just a simple express server to run your site on localhost.
## :hammer: How to use
Open terminal, go to destination directory and run the following commands:
```bash
# Clone this repository
git clone https://github.com/kamilkazor/simpleExpressServer.git
cd simpleExpressServer

# Install dependencies
npm install

# Run the server
node app
```
Now you can visit http://localhost:3000/ in your browser to see the site.

<br>

:exclamation: You can edit or replace/add files inside appDirectory. Your html file has to be named index.html and be placed directly inside appDirectory.

You can simply change that by editing indexRouter.js:
```bash
# Edit this line in ./routes/indexRouter.js to change name and path to your html file
let index = fs.createReadStream('./appDirectory/index.html');

# MORE SETTINGS:

# Edit this line in ./app.js to change static directory to your other files
app.use(express.static('./appDirectory'));

# In ./app.js you can also change port on which server is listening
const PORT = '3000';
```
