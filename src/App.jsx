import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';
import Button from './components/Button';
import Card from './components/Card';

function App() {
    return (
        <div className={'flex flex-col items-center justify-center h-screen bg-slate-900'}>
            <div className={'flex gap-x-2 max-w-md w-full'}>
                <Card>
                    <Card.Title>Card 1</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores placeat nostrum nobis excepturi eligendi doloribus neque
                        unde odit incidunt quibusdam corrupti quos, culpa repudiandae sit ut a animi dicta fuga?
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

export default App;
