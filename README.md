# Asteriski x Reaktor workshop 29.3.2019

## TODO
- [x] Create `<TimeView />` component that display current time and date
- [x] Refactor event list to show only three upcoming events (using method of your choice, e.g. `ramda`)
 - [x] Create `<Events />` component to render upcoming events and make the list look nicer `:)`
- [x] Refactor event list to show human readable time instead of timestamps using `date-fns`
```javascript
format startTime 'HH.mm'
```
- [x] Add `Asteriski logo` and `Reaktor logo` to the page
 - [x] Show a list of events below logos with the format 
```javascript
{name} {startTime} {endTime}
```