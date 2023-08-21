export default function Label({ value, children, ...props }) {
    return (
        <label {...props} className={'block text-sm font-bold text-slate-700'}>
            {value || children}
        </label>
    );
}
