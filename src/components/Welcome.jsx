import { Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
    return (
        <>
            <div className="Container-Bienvenido">
                <Center>
                    <Box boxSize={"50%"}>
                        <Image src="https://cdn.pixabay.com/photo/2016/11/21/12/16/computer-1844996_1280.jpg"
                        alt="pc-gaming"
                        borderRadius={"15px"}
                        />
                    </Box>
                </Center>
            </div>
        </>
    );
};

export default Welcome;