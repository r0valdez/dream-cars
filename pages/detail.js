import { Box, Center, Container, Flex, Grid, Heading, Image, Link, Select, Text } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { BiFilter } from "react-icons/bi"
import Tag from "@components/tag"

export default function Detail() {
  return <Container maxW="1280px" py={4}>
    <Tag text="featured" color="blue.500" />
    <Tag text="Reserve not met" color="red.500" />
    <Heading my={2}>1990 Land Rover Defender 90</Heading>
    <Text fontWeight="semibold" color="gray" textTransform="uppercase">MORGAN TWP, PA</Text>
    <Grid my={4} templateColumns="69% 29%" gap="2%">
      <Image src="/images/car-1.png" borderRadius={8} />
      <Grid templateColumns="49% 49%" gap="2%" justify="space-between">
        <Text flex="0 0 50%" fontWeight="bold" fontSize="lg">All Photos(50)</Text>
        <Select flex="0 0 40%" size="sm" borderRadius={4}>
          <option value="All">All</option>
        </Select>
        <Image src="/images/car-1.png" borderRadius={8} />
        <Image src="/images/car-1.png" borderRadius={8} />
        <Image src="/images/car-1.png" borderRadius={8} />
        <Image src="/images/car-1.png" borderRadius={8} />
        <Image src="/images/car-1.png" borderRadius={8} />
        <Image src="/images/car-1.png" borderRadius={8} />
        <Image src="/images/car-1.png" borderRadius={8} />
        <Box pos="relative" overflow="hidden" borderRadius={8}>
          <Image src="/images/car-1.png" />
          <Center pos="absolute" top={0} left={0} bg="rgba(0, 0, 0, .6)" color="white" width="100%" height="100%" >
            <Link>View All (50)</Link>
          </Center>
        </Box>
      </Grid>
    </Grid>
  </Container>
}