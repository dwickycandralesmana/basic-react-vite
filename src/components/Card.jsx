function Card({ title, children, footer }) {
    return <div className='bg-white rounded-lg shadow-lg overflow-hidden w-full'>{children}</div>;
}

function Title({ children }) {
    return (
        <div className='p-4 border-b'>
            <h1 className='text-xl font-semibold'>{children}</h1>
        </div>
    );
}

function Body({ children }) {
    return <div className='leading-relaxed p-4'>{children}</div>;
}

function Footer({ children }) {
    return <div className='bg-gray-100 p-3 flex items-center gap-x-2'>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
