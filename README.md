# Garden Guide API

## General Info

This is the back end server for the Garden Guide App, built with Node/Express using Knex and Objection for queries and object relationships.

## Table of Contents

- [Garden Guide API](#garden-guide-api)
  - [General Info](#general-info)
  - [Table of Contents](#table-of-contents)
  - [Inspiration](#inspiration)
  - [Demonstration Video](#demonstration-video)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Example Code](#example-code)
    - [Log In Functionality](#log-in-functionality)
    - [Weather Proxy Endpoint](#weather-proxy-endpoint)
  - [Features](#features)
  - [Status](#status)
  - [Contact](#contact)
  - [License](#license)

## Inspiration

The Garden Guide App was born out of a need for a centralized place to keep all my gardening records. I found I was keeping notes, seed packets, growing information sheets, and custom calendars in dozens of different places and formats, and had no way to easily keep records. Garden Guide was built to solve those problems, with a database of plants and their growing needs, the ability to create to do lists and actions, and to track notes about each different plant in the dgarden.

## Demonstration Video

[Garden Guide Demonstation](https://www.youtube.com/)

## Technologies

- Node.js
- Express
- Knex
- Objection.js
- Postgres

## Setup

To get Garden Guide installed and running, you will need both the Garden Guide app and the Garden Guide API. The front end and setup instructions to run in development can be found at [Garden Guide App](https://github.com/btken88/garden-guide-app). After installing the back end as shown below, you can install and run the front end:

```bash
cd garden-guide-api
npm install
npm run dev
```

## Example Code

### Log In Functionality

```javascript
async function login(req, res) {
  const { email, password } = req.body
  try {
    let user = await User.query().select('*').where({ email }).first()
    if (!user) return res.status(400).json({ error: 'Incorrect username or password' })

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) return res.status(400).json({ error: 'Incorrect username or password' })

    const payload = { user_id: user.id }
    jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
      if (err) throw err
      res.status(200).json({ token })
    })
  } catch (err) {
    res.setHeader("status", 500)
    res.json({ error: err.message })
  }
}
```

### Weather Proxy Endpoint

```javascript
function getWeather(req, res) {
  User.query().select('zip').where({ id: req.body.userId }).first()
    .then(data => fetchLatLon(data.zip))
    .then(fetchWeather)
    .then(data => res.status(200).json(data))
    .catch(err => res.json({ error: err.message }).status(500))
}

function fetchLatLon(zip) {
  return fetch(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=${zip}`)
    .then(response => response.json())
    .then(result => {
      return result.records[0].fields.geopoint
    })
    .catch(err => err.message)
}

function fetchWeather(latLon) {
  const [lat, lon] = latLon
  const weatherAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=imperial&appid=${process.env.WEATHER_API_KEY}`
  return fetch(weatherAPI)
    .then(response => response.json())
}
```

## Features

Current Features:

- Create new secure user accounts
- Full CRUD actions for user To Dos and User Plants
- Proxy API endpoint to lookup weather
- Ability to index, show, and create different varieties of plants

Future Features:

- Add goal completion datetime to to dos
- Get exact planting dates based on your zip code and local last frost
- Add columns to the varieties table to provide more detailed growing information

## Status

The application is fully functional and ready to be enjoyed as is. Future updates and improvements are still a possibility.

## Contact

Created by [Bryce Kennedy](https://www.linkedin.com/in/bryce-kennedy/)

If you have any questions or comments, suggestions, or bug fixes, feel free to reach out to me.

## License

[Click to view](https://github.com/btken88/garden-guide-app/blob/master/license.txt)
