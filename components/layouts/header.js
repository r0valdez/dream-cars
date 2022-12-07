import { useRouter } from "next/router";
import { Box, Button, Icon, Link, Text } from "@chakra-ui/react"
import { AiFillCloud } from "react-icons/ai"

const Header = () => {
  const router =  useRouter();

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={4} boxShadow="base">
      <Text display="flex" alignItems="center" gap={1} flexWrap="nowrap" fontSize="2xl" fontWeight="extrabold" color="blue.700"><Icon as={AiFillCloud} boxSize={10} color="blue.300" />Dream Cars</Text>
      <Box display="flex" justifyContent="end" alignItems="center" gap={4} flexWrap="nowrap">
        {router.pathname != '/' && (
          <>
            <Link href="/" fontWeight="bold">Home</Link>
            <Link fontWeight="bold">Customer Support</Link>
          </>
        )}
        <Button colorScheme="gray" variant="outline" fontWeight="bold" size="sm">Sell a Car</Button>
        <Button colorScheme="blue" size="sm">Sign Up</Button>
      </Box>
    </Box>
  );
};

export default Header;
