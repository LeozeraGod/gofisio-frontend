import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";
import heroImg from "../assets/hero.webp"; // Ajuste o caminho



export default function Home() {
    return (
        <Box bg="#FFFfff" h="100vh">
            {/* Cabeçalho */}
            <Box bg="#F7931E" px={6} display="flex" alignItems="center" justifyContent="space-between" position="fixed" zIndex="1" width="100%" height="10%" border="none">
                <Box height="115%"> <Image src={heroImg} alt="Logo" height="100%" width="100%" justifyContent="center" /> </Box>
                <Box height="100%"> <Button mt={5} colorScheme="teal" size="2xl" display="flex" bg="orange.400" color="white" _hover={{ bg: "#6A9C89", transform: "scale(1.1)", boxShadow: "md" }} >COMO FUNCIONA?</Button> </Box>
            </Box>

            {/* Conteúdo principal */}
            <Container maxW="container" display="flex" alignItems="center" justifyContent="space-between" py={10}>
                <Box maxW="mx">
                    <Heading as="h1" size="6xl" color="#6A9C89" marginBottom="3rem"  >
                        Seu momento de relaxar <br />  na palma da sua mão!
                    </Heading>
                    <Button mt={5} colorScheme="teal" size="2xl" fontSize="1.5rem" bg="#F7931E" color="white" border="1px, solid" _hover={{ color: "white", bg: "#6A9C89", transform: "scale(1.1)", boxShadow: "md", }} borderRadius="10px">
                        Agende Seu Horário
                    </Button>
                </Box>
                <Image
                    src="/src/assets/a.jpg"
                    borderRadius="full"
                    boxSize="500px"
                    objectFit="cover"
                    alt="Fisioterapeuta"
                    marginTop="120px"
                    boxShadow="3px 5px 10px 3px grey"
                />
            </Container>
            <Box bg="#F7931E" h="100vh" />
        </Box>
    );
}
