import { TheContextProvider } from "./context";
import GetContext from "./GetContext";
import SetContext from "./SetContext";

const CardContext: React.FC = () => {
    
    return (
        <TheContextProvider>
            <div className='flex flex-col gap-2 m-4 p-2 text-left text-inherit border-[1px] border-[#eaeaea] rounded-xl w-[300px] transition-colors ease-in-out delay-150 hover:text-[#0070f3] hover:border-[#0070f3]'>
                <h1 className='text-2xl mb-4'>Context &rarr;</h1>
                <GetContext />
                <SetContext />
            </div>
        </TheContextProvider>
    );
}

export default CardContext;
