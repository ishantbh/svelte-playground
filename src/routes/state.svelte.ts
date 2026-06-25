export function createState() {
	let value = $state(0);

	function up() {
		value++;
	}

	return {
		get value() {
			return value;
		},
		set value(newValue) {
			value = newValue;
		},
		up
	};
}
