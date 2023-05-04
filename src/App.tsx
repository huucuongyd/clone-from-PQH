import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import './App.css';
import {
	decrement,
	increment,
	incrementByAmount,
} from './redux/reducers/counter.slice';
import { RootState } from './redux/store';

function App() {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
	const [arr, setArr] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);

	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};

	const handleIncrementByAmount = (amount: number) => {
		dispatch(incrementByAmount(amount));
	};

	const handleMix = () => {
		console.log('arr', arr);
		arr.splice(1, 2);
		setArr(arr);
	};

	console.log('arr1', arr);

	return (
		<div className="App">
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>
			<button
				onClick={() => {
					handleIncrementByAmount(5);
				}}
			>
				+5
			</button>
			<div>{count}</div>

			<div>
				{arr.map((el, index) => (
					<p key={index}>{el}</p>
				))}
			</div>

			<button onClick={handleMix}>Mix</button>
		</div>
	);
}

export default App;
