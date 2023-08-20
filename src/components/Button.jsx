import { clsx } from 'clsx';

export default function Button({ children, text, className = 'bg-blue-500 hover:bg-blue-700', ...props }) {
    return (
        <button
            {...props}
            className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white py-2 px-4 rounded')}>
            {children || text}
        </button>
    );
}
