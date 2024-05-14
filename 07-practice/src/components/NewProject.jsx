import Input from './Input';
export default function NewProject() {
    return (
        <div>
            <menu>
                <li>
                    <button>Cancel</button>
                </li>
                <li>
                    <button>Save</button>
                </li>
                <div>
                    <Input label='Title' />
                    <Input label='Description' isTextArea/>
                    <Input label='Due Date' />
                </div>
            </menu>
        </div>
    )
}