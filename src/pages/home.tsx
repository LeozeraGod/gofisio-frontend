import { Box, Button, Container, Heading, Image, Link, Text, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImg from "../assets/hero.webp";

const MotionBox = motion(Box);

const AnimatedSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const items = [
    "Busque pelo serviço desejado! Acesse as categorias de serviços e encontre o que precisa.",
    "Localize profissionais qualificados e agende seu horário.",
    "É simples e fácil! Você será notificado quando o profissional confirmar o agendamento.",
    "Nossa equipe de suporte está pronta para ajudar."
  ];

  return (
    <MotionBox
      id="como-funciona"
      ref={ref}
      w="100%"
      p={[5, 10, 20]}
      bg="#008B8B"
      color="white"
      textAlign="center"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2.0, ease: "easeOut" }}
    >
      <Heading as="h1" size="2xl" mb={10}>COMO FUNCIONA?</Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} px={[2, 4, 10]}>
        {items.map((text, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection={['column', 'row']}
            alignItems="center"
            justifyContent="center"
            gap={5}
          >
            <Box
              w={"270px"}
              h={"270px"}
              borderRadius="full"
              overflow="hidden"
              flexShrink={0}
              boxShadow="2px 2px 15px 2px black"
            >
              <Image
                src="/src/assets/a.jpg"
                alt="Fisioterapeuta"
                boxSize="100%"
                objectFit="cover"
              />
            </Box>

            <Box
              flex="1"
              bg={index === 0 ? "white" : "#D3D3D3"}
              color={index === 0 ? "#004953" : "black"}
              p={[4, 6, 8]}
              borderRadius="10px 20px 10px 70px"
              textAlign="right"
              boxShadow="2px 2px 15px 2px black"
            >
              <Text fontWeight="600">{text}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
};

export default function Home() {
  return (
    <Box bg="#FFFfff">
      {/* Cabeçalho */}
      <Box
        as="header"
        bg="#F7931E"
        px={6}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        position="sticky"
        top={0}
        zIndex="999"
        width="100%"
        height="10vh"
      >
        <Box height="100%">
          <Image src={heroImg} alt="Logo" height="100%" width="100%" />
        </Box>
        <Box>
          <Button
            mt={5}
            colorScheme="teal"
            size="lg"
            bg="orange.400"
            color="white"
            _hover={{ bg: "#008B8B", transform: "scale(1.1)", boxShadow: "md" }}
          >
            <Link href="#como-funciona">COMO FUNCIONA?</Link>
          </Button>
        </Box>
      </Box>

      {/* Conteúdo principal */}
      <Container
        maxW="container.xl"
        display="flex"
        flexDirection={["column", "column", "row"]}
        alignItems="center"
        justifyContent="space-between"
        py={32}
        px={[4, 6, 10]}
        textAlign={["center", "center", "left"]}
        mt="10vh"
      >
        <Box maxW={["100%", "100%", "50%"]}>
          <Heading as="h1" size="2xl" color="#008B8B" mb={6}>
            Seu momento de relaxar <br /> na palma da sua mão!
          </Heading>
          <Button
            mt={5}
            colorScheme="teal"
            size="lg"
            fontSize="1.2rem"
            bg="#F7931E"
            color="white"
            _hover={{ color: "white", bg: "#004953", transform: "scale(1.1)", boxShadow: "md" }}
            borderRadius="10px"
          >
            Agende Seu Horário
          </Button>
        </Box>

        <Image
          src="/src/assets/a.jpg"
          borderRadius="full"
          boxSize={["250px", "350px", "500px"]}
          objectFit="cover"
          alt="Fisioterapeuta"
          mt={["2rem", "3rem", "0"]}
          boxShadow="3px 5px 10px 3px grey"
        />
      </Container>

      {/* Seção animada */}
      <AnimatedSection />

      <Box bg="orange" h="15vh" />
    </Box>
  );
}
