import { useRouter } from "next/router";
import { Box, Button, Image, Link } from "@chakra-ui/react"

const Header = () => {
  const router =  useRouter();

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={4} boxShadow="base">
      <Image src="/images/logo.png" alt="Logo Image" />
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
