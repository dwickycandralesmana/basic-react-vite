import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';
import { IconBrandGithub } from '@tabler/icons-react';
import Label from './components/Label';
import { useState } from 'react';

function App() {
    const [form, setForm] = useState({ name: '', email: '' });

    function onChange(e) {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    }

    function submit(event) {
        event.preventDefault();
        console.log(form);
    }

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Sign in to your account</Card.Title>
                <form onSubmit={submit}>
                    <Card.Body>
                        <div className='mb-5 border rounded-lg p-4'>
                            <p>Name: {form.name || '-----'}</p>
                            <p>Email: {form.email || '-----'}</p>
                        </div>
                        <div className='mb-6'>
                            <Label htmlFor='name' value={'Name'} />
                            <Input id={'name'} type={'text'} name={'name'} onChange={onChange} />
                        </div>
                        <div className='mb-6'>
                            <Label htmlFor='email' value={'Email'} />
                            <Input id={'email'} type={'email'} name={'email'} onChange={onChange} />
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Button>
                            <IconBrandGithub />
                            Sign in with GitHub
                        </Button>
                    </Card.Footer>
                </form>
            </Card>
        </PlaceContentCenter>
    );
}

export default App;
