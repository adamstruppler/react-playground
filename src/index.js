import React from 'react'
import ReactDOM from 'react-dom'
import App from './webApp/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<ChatterApp />, document.getElementById('root'))
// ReactDOM.render(<MonsterApp />, document.getElementById('root'))
// ReactDOM.render(<App data={data} />, document.getElementById('root'))
// ReactDOM.render(<MappingAndFiltering data={data} />, document.getElementById('root'))
registerServiceWorker()
