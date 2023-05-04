import classNames from 'classnames/bind';
import TaskCreation from '../components/Todo/TaskCreation';
import TaskList from '../components/Todo/TaskList';
import styles from '../styles/todo.module.scss';

const cx = classNames.bind(styles);

export default function TodoPage() {
	return (
		<div className={cx('root')}>
			<h2 className={cx('title')}>Todo List</h2>

			<TaskCreation />
			<TaskList />
		</div>
	);
}
