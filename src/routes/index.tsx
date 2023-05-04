import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home';
import TodoPage from '../pages/todo';

export const ROUTES = { ERROR: '*', HOME: '/', TODO: '/todo' };

export const router = createBrowserRouter([
	{
		path: ROUTES.HOME,
		element: <HomePage />,
	},
	{
		path: ROUTES.TODO,
		element: <TodoPage />,
	},
]);
