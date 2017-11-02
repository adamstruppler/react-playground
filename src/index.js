import React from 'react'
import ReactDOM from 'react-dom'

// import App from './webApp/App'
// import App from './acmeApp/App'
// import data from './acmeApp/data'
// import MonsterApp from './monsterMash/monsterApp'
// import App from './smartApp/App'
// import data from './MappingAndFiltering/data'
// import MappingAndFiltering from './MappingAndFiltering/MappingAndFiltering'
import ChatterApp from './chatterApp/ChatterApp'
import data from './chatterApp/data'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<ChatterApp data={data} />, document.getElementById('root'))
// ReactDOM.render(<MonsterApp />, document.getElementById('root'))
// ReactDOM.render(<App data={data} />, document.getElementById('root'))
registerServiceWorker()
