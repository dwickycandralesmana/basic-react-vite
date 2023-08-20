import {
    IconBabyBottle,
    IconBrandFacebook,
    IconBrandTwitter,
} from '@tabler/icons-react';
import clsx from 'clsx';
export default function App() {
    return (
        <div
            className={
                'flex flex-col items-center justify-center h-screen bg-slate-900'
            }
        >
            <div className={'flex gap-x-2'}>
                <Button
                    className={'bg-pink-500 hover:bg-pink-700'}
                    type={'reset'}
                    onClick={() => {
                        console.log(123);
                    }}
                >
                    <IconBrandFacebook />
                    Login
                </Button>
                <Button type={'button'}>
                    <IconBrandTwitter />
                    Register
                </Button>
            </div>
        </div>
    );
}

function Button(props) {
    const {
        children,
        text,
        className = 'bg-blue-500 hover:bg-blue-700',
    } = props;
    return (
        <button
            {...props}
            className={clsx(
                className,
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white font-bold py-2 px-4 rounded mb-4',
            )}
        >
            {children || text}
        </button>
    );
}
