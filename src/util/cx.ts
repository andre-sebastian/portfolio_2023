type ClassValue = string | false | null | undefined;

const cx = (...values: ClassValue[]): string =>
	values.filter(Boolean).join(' ');

export default cx;
