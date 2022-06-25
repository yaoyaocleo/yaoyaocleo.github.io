import { useContext } from "react";
import { TheContext } from "./context";

const GetContext: React.FC = () => {
    const context = useContext(TheContext);
    return (
            <div className='flex flex-col gap-2 p-2 rounded-xl bg-green-300'>
                <h1 className='text-lg mb-4'>Get Context &rarr;</h1>
                <div>context =&gt; <br/>{context.user}</div>
            </div>
    );
}

export default GetContext;
