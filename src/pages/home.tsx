import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImg from "../assets/hero.webp";
import { Link } from "@chakra-ui/react";

const MotionBox = motion(Box);
const AnimatedSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    return (
        <MotionBox
            id="como-funciona"
            ref={ref}
            w="100%"
            p={20}
            height="100vh"
            bg="#008B8B"
            color="white"
            textAlign="center"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}    
            transition={{ duration: 2.0, ease: "easeOut" }}
            justifyContent="center" alignItems="center" display="flex" flexDirection="column">
            <Heading as="h1" size="5xl">COMO FUNCIONA?</Heading>
    <Box width="100%" height="70%" display="grid" gridTemplateColumns="auto auto" alignItems="center" flexDirection="column" p={3} gap={77}>
    <Box position="relative" w="200px" h="100px">
        {/* Box Retangular */} 
        <Box style={{boxShadow: "2px 2px 15px 2px black", fontWeight: "600", color: "#004953", padding:"20%", paddingLeft:"70%", textAlign:"end", width: "700px", height: "150px", backgroundColor: "white", borderRadius: "10px 20px 10px 70px", position: "absolute", top: "60px", left: "140px", }} > 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis soluta veniam pariatur. Soluta veniam alias a, dolorum accusantium maiores.</p></Box>
        {/* Box redonda */}         
        <Box style={{ width: "270px", height: "270px", backgroundColor: "black", borderRadius: "50%", position: "absolute", left: "0px",}}><Image
                    src="/src/assets/a.jpg" 
                    borderRadius="full"
                    boxSize="100%"
                    objectFit="cover"
                    alt="Fisioterapeuta"
                    boxShadow="2px 2px 15px 2px black"/></Box>
        </Box>
        <Box position="relative" w="200px" h="100px">
        {/* Box Retangular */} 
        <Box style={{fontWeight: "500", color: "black", padding:"20%", paddingLeft:"70%", textAlign:"right", width: "700px", height: "150px", backgroundColor: "#D3D3D3", borderRadius: "10px 20px 10px 70px", position: "absolute", top: "60px", left: "140px", }} > 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis soluta veniam pariatur. Soluta veniam alias a, dolorum accusantium maiores.</p></Box>
        {/* Box redonda */} 
        <Box style={{ width: "270px", height: "270px", backgroundColor: "black", borderRadius: "50%", position: "absolute", left: "0px",}}><Image
                    src="/src/assets/a.jpg" 
                    borderRadius="full"
                    boxSize="100%"
                    objectFit="cover"
                    alt="Fisioterapeuta"
                    boxShadow="2px 2px 15px 2px black"
                /></Box>
        </Box>

        <Box position="relative" w="200px" h="100px">
        {/* Box Retangular */} 
        <Box style={{fontWeight: "500", color: "black", padding:"20%", paddingLeft:"70%", textAlign:"right", width: "700px", height: "150px", backgroundColor: "#D3D3D3", borderRadius: "10px 20px 10px 70px", position: "absolute", top: "60px", left: "140px", }} > 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis soluta veniam pariatur. Soluta veniam alias a, dolorum accusantium maiores.</p></Box>
        {/* Box redonda */} 
        <Box style={{ width: "270px", height: "270px", backgroundColor: "black", borderRadius: "50%", position: "absolute", left: "0px",}}><Image
                    src="/src/assets/a.jpg" 
                    borderRadius="full"
                    boxSize="100%"
                    objectFit="cover"
                    alt="Fisioterapeuta"
                    boxShadow="2px 2px 15px 2px black"
                /></Box>
        </Box>
         <Box position="relative" w="200px" h="100px">
         {/* Box Retangular */} 
         <Box style={{fontWeight: "500", color: "black", padding:"20%", paddingLeft:"70%", textAlign:"right", width: "700px", height: "150px", backgroundColor: "#D3D3D3", borderRadius: "10px 20px 10px 70px", position: "absolute", top: "60px", left: "140px", }} > 
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis soluta veniam pariatur. Soluta veniam alias a, dolorum accusantium maiores.</p></Box>
        {/* Box redonda */} 
        <Box style={{ width: "270px", height: "270px", backgroundColor: "black", borderRadius: "50%", position: "absolute", left: "0px",}}><Image
                    src="/src/assets/a.jpg" 
                    borderRadius="full"
                    boxSize="100%"
                    objectFit="cover"
                    alt="Fisioterapeuta"
                    boxShadow="2px 2px 15px 2px black"
                /></Box>
        </Box>
    </Box>
        </MotionBox>
    );
};
export default function Home() {
    return (
        <Box bg="#FFFfff" h="100vh">
            {/* Cabeçalho */}
            <Box bg="#F7931E" px={6} display="flex" alignItems="center" justifyContent="space-between" position="fixed" zIndex="1" width="100%" height="10%" border="none">
                <Box height="115%"> <Image src={heroImg} alt="Logo" height="100%" width="100%" justifyContent="center" /> </Box>
                <Box height="100%"> 
                 <Button mt={5} colorScheme="teal" size="2xl" display="flex" bg="orange.400" color="white" _hover={{ bg: "#008B8B", transform: "scale(1.1)", boxShadow: "md" }}>
                    <Link href="como-funciona"></Link>
                    COMO FUNCIONA?</Button>  </Box>
            </Box>

            {/* Conteúdo principal */}
            <Container maxW="container" display="flex" alignItems="center" justifyContent="space-between" py={10} height="100vh">
                <Box maxW="mx">
                    <Heading as="h1" size="6xl" color="#008B8B" marginBottom="3rem"  >
                        Seu momento de relaxar <br />  na palma da sua mão!
                    </Heading>
                    <Button mt={5} colorScheme="teal" size="2xl" fontSize="1.5rem" bg="#F7931E" color="white" border="1px, solid" _hover={{ color: "white", bg: "#004953", transform: "scale(1.1)", boxShadow: "md", }} borderRadius="10px">
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
            {/* Nova seção animada */}
            <AnimatedSection />
            <Box bg="orange" h="15vh" />
        </Box> 
    );
}


