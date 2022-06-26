import { useContext } from "react";
import Card from "./Card";
import { GlobalContext } from '../contexts/GlobalContext';

export default function ColorMode() {
    const context = useContext(GlobalContext);

    return (
        <Card>
            <h2 className='text-2xl mb-4'>Color Mode &rarr;</h2>
            <p className='m-0 text-xl'>We are currently on {context?.colorMode}</p>
        </Card>
    );
}