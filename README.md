# Welcome to Fdkeventgenerator!

This gulp project can create the Freshdesk events using only one command line.
You can see the events in [Freshdesk Events API page](https://developers.freshdesk.com/v2/docs/events-api/).

# Lets get started!
To use this file, follow these steps:

 1. Download **Gulpfile.js** and **package.json**;
 2. Copy these files and paste them in Freshdesk app root folder;
 3. Run **npm install** to install the dependencies;
 Now you can run the **insert** command of gulp file. Let's go!

# Run the command
You can run the following command to create an event:
**gulp insert --event closeTicketClick**

 1. **insert** is the gulp task;
 2. **--event** means that you want to create an event;
 3. **closeTicketClick** is the event that will be created;
And the following code has been generated in your **app.js**:
```javascript
var  closeTicketClickCallback  =  function(event) {
//TODO: PLEASE, INDENT ME FIRST!!!
//Insert your code here...
};
client.events.on('ticket.closeTicketClick', closeTicketClickCallback, {intercept:  true});
```
You can change the event for some of other events of [Events API](https://developers.freshdesk.com/v2/docs/events-api/#ticket_details_page_apis).