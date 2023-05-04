interface PropsType {
	label?: string;
}

export default function Checkbox({ label }: PropsType) {
	return (
		<label className="container">
			{label}
			<input type="checkbox" />
			<span className="checkmark"></span>
		</label>
	);
}
