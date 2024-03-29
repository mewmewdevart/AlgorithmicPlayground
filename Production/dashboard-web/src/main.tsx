import { render } from 'preact'
import { App } from './app.tsx'
import '@radix-ui/themes/styles.css';
import './index.css'

render(<App />, document.getElementById('app')!)
