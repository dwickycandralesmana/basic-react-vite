export default function Input({ type = 'text', label, ...props }) {
    return (
        <input
            type={type}
            {...props}
            className={'border-slate-300 shadow-sm rounded-md focus:ring-slate-500 focus:border-slate-500 block w-full sm:text-sm'}
        />
    );
}
