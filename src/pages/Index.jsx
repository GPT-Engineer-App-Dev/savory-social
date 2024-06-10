import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, Flex } from "@chakra-ui/react";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Chicken Tikka Masala",
    description: "Chunks of grilled chicken (tikka) cooked in a creamy, spiced tomato sauce.",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Beef Stroganoff",
    description: "A Russian dish of sautéed pieces of beef served in a sauce with smetana (sour cream).",
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Box as="header" w="100%" bg="teal.500" color="white" p={4} textAlign="center">
          <Heading as="h1" size="xl">Recipe Sharing Website</Heading>
        </Box>

        <Box as="main" w="100%">
          <Heading as="h2" size="lg" mb={4}>Recipes</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {recipes.map((recipe, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={recipe.image} alt={recipe.title} />
                <Box p={4}>
                  <Heading as="h3" size="md">{recipe.title}</Heading>
                  <Text mt={2}>{recipe.description}</Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box as="footer" w="100%" bg="teal.500" color="white" p={4} textAlign="center">
          <Text>&copy; 2023 Recipe Sharing Website. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;