# Asteriski x Reaktor workshop 29.3.2019

Ideas for later development:
- [ ] Deploy to cloud service (`heroku`, `now.sh`, etc.)
- [ ] Add DB of choice (`postgresql`, `mongodb`, etc.) with `docker` for persistence
- [ ] Add `redux` to manage global state with auto-refreshing event fetching
---
- [x] Fetch events to front-end from our minimalist back-end app
- [x] Add endpoint to `server.js` for fetching `events.json`
- [x] Install `express.js` and create file for back-end application
 ```bash
$ npm i -s express
$ touch server.js
 ```
- [x] Create `<TimeView />` component that display current time and date
 - [x] Create `<Events />` component to render upcoming events and make the list look nicer `:)`
 - [x] Refactor event list to show only three upcoming events (using method of your choice, e.g. `ramda`)
- [x] Refactor event list to show human readable time instead of timestamps using `date-fns`
```javascript
format startTime 'HH.mm'
```
 - [x] Show a list of events below logos with the format 
```javascript
{name} {startTime} {endTime}
```
- [x] Add `Asteriski logo` and `Reaktor logo` to the page