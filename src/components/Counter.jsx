import Button from './Button';
import { useState } from 'react';

export default function Counter({ initialCount = 0 }) {
    const [count, setCount] = useState(initialCount);

    function handleClick() {
        setCount((x) => x + 1);
    }

    return (
        <div>
            <h1 className={'text-5xl font-bold'}>{count}</h1>
            <div className={'mt-4 flex items-center gap-x-2'}>
                <Button onClick={handleClick}>+1</Button>
                <Button
                    onClick={() => {
                        handleClick();
                        handleClick();
                        handleClick();
                    }}>
                    +3
                </Button>
            </div>
        </div>
    );
}
