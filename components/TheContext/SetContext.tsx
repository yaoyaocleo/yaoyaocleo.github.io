import { useContext } from "react";
import { TheContext } from "./context";

const SetContext: React.FC = () => {
    const context = useContext(TheContext);
    const setContext = () => {
        console.log('setContext');
        context.setUserName(`User-${new Date().toUTCString()}`);
    }

    return (
            <div className='flex flex-col p-2 rounded-xl bg-teal-300'>
                <h1 className='text-lg mb-4'>Set Context &rarr;</h1>
                <div>{context.user}</div>
                <button onClick={setContext} className='py-2 px-4 bg-yellow-300 rounded-md'>Set context</button>
            </div>
    );
}

export default SetContext;
