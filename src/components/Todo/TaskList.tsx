import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import styles from '../../styles/todo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function TaskList() {
	const dispatch = useAppDispatch();
	const taskList = useAppSelector((state: RootState) => state.todo);

	return (
		<div className={cx('list-item-container')}>
			{taskList.map((task) => (
				<div className={cx('item-container')} key={task}>
					<p>{task}</p>
					<div className={cx('remove-item')}>×</div>
				</div>
			))}
		</div>
	);
}
