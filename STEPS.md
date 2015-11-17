Today were going to build a chat application. Complete with chatrooms. When were finished if you want to continue
hacking with Meteor feel free too take this as a starting point. I would be happy to answer any questions.

If at any time you have any questions feel free to stop me and I'll try to answer them as best I can.

We're going to start with a boilerplate, first thing I need you to do is open a terminal and run the following:

```
git clone git@github.com:davidworkman9/cube-it-meteor-intro.git
cd cube-it-meteor-intro
meteor
```

This will clone my starting repo, it already has a few things added to it like user accounts, routing and
the materialize CSS framework. Then change into that directory and run Meteor, which will spark up a server on
port 3000. Go to [localhost:3000](http://localhost:3000) to view it.

Open the ```cube-it-meteor-intro``` folder in your favourite text editor.

(If you're using WebStorm, open up .meteor/packages after a second or two you should see a link
at the top that says "import packages as library" or something of that nature. Click that and WebStorm
will automatically index the packages your using so you get autocomplete and jump to definition functionality!)

### Step 1
Remove autopublish. Meteor by default installs 2 packages good for prototyping when you create a new project,
```autopublish``` and ```insecure```. Autopublish automatically sends all the data in the database to every client
and insecure allows users to modify the database from within their browser. Were going to keep insecure installed
just to make the demo go a little faster.

### Step 2
We currently see a very plain app Let's add some text to the header and main page.
Open up ```client/nav.html``` and modify the a tag on line 5.
Open up ```client/views/home.html``` and add some text to the inner div.

### Step 3
Create a chatroom page, that you need to be logged in to see.