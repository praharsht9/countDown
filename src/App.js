import './App.css';
import CountDown from './CountDown';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<CountDown seconds={90} />
			</header>
		</div>
	);
}

export default App;
