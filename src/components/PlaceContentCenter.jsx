export default function PlaceContentCenter({ children }) {
    return (
        <div className={'bg-black'}>
            <div className={'bg-slate-900 min-h-screen flex flex-col justify-center items-center antialiased tracking-tight'}>
                <div className={'max-w-lg w-full text-slate-900'}>{children}</div>
            </div>
        </div>
    );
}
