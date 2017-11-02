import React from 'react'
import ReactDOM from 'react-dom'

// import App from './webApp/App'
// import App from './acmeApp/App'
// import data from './acmeApp/data'
// import MonsterApp from './monsterMash/monsterApp'
import App from './smartApp/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<MonsterApp />, document.getElementById('root'))
// ReactDOM.render(<App data={data} />, document.getElementById('root'))
registerServiceWorker()
