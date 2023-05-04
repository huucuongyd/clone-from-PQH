import styles from '../../styles/todo.module.scss';
import classNames from 'classnames/bind';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { useForm, SubmitHandler } from 'react-hook-form';
import { addItemReq } from '../../redux/actions/todo.action';

const cx = classNames.bind(styles);

type Inputs = {
	task: string;
};

export default function TaskCreation() {
	const dispatch = useAppDispatch();
	const taskList = useAppSelector((state: RootState) => state.todo);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		const { task } = data;
		if (!taskList.includes(task)) {
			dispatch(addItemReq(task));
		}
	};

	return (
		<form className={cx('form-container')} onSubmit={handleSubmit(onSubmit)}>
			<input
				placeholder="New Task"
				className={cx('input')}
				{...register('task')}
			/>
			<button type="submit" className={cx('add-button')}>
				Add
			</button>
		</form>
	);
}
