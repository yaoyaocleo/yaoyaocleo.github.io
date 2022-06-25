import { Box } from "@chakra-ui/react";

type cardprops = {
    onClick?: React.MouseEventHandler<HTMLDivElement>,
    // onClick?: () => void,
    children: React.ReactNode
}

const Card: React.FC<cardprops> = ({ onClick, children }) => {
    return (
        <Box p={5} shadow='md' borderWidth='1px' onClick={onClick}>
            {children}
        </Box>
    );
}

export default Card;