import { useRouter } from "next/router";
import { Box, Button, Icon, Link, Text } from "@chakra-ui/react"
import { AiFillCloud } from "react-icons/ai"

const Header = () => {
  const router =  useRouter();

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={4} boxShadow="base">
      <Text display="flex" alignItems="center" gap={1} flexWrap="nowrap" fontSize="2xl" fontWeight="extrabold" color="blue.700"><Icon as={AiFillCloud} boxSize={10} color="blue.300" />DreamCars</Text>
      <Box display="flex" justifyContent="end" alignItems="center" gap={4} flexWrap="nowrap">
        {router.pathname != '/' && (
          <>
            <Link href="/" fontWeight="semibold" color="gray.700">Home</Link>
            <Link fontWeight="semibold" color="gray.700">Customer Support</Link>
          </>
        )}
        <Button colorScheme="gray" variant="outline" fontWeight="semibold">Sell a Car</Button>
        <Button colorScheme="blue" fontWeight="semibold">Sign Up</Button>
      </Box>
    </Box>
  );
};

export default Header;
