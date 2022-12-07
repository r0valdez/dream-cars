import { Box, Container, Flex, InputGroup, InputLeftElement, Input, Select, Text } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { BiFilter } from "react-icons/bi"
import Card from "@components/card"

export default function Home() {
  return (
    <Container maxW="1280px">
      <Flex justify="space-between" align="center" my={4}>
        <Flex align="center" gap={8}>
          <Select size="sm" borderRadius={4}>
            <option value="Live Actions">Live Actions</option>
          </Select>
          <Text fontWeight="bold" fontSize="sm" display="flex" alignItems="center" gap={1}><BiFilter />Filter</Text>
        </Flex>
        <Flex align="center" gap={4}>
          <Select size="sm" borderRadius={4}>
            <option value="Recently Listed">Live Actions</option>
          </Select>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
            >
              <SearchIcon color='gray.300' />
            </InputLeftElement>
            <Input placeholder="Search Listings..." variant='filled' size="sm" borderRadius={4} />
          </InputGroup>
        </Flex>
      </Flex>
      <Flex justify="space-between" align="center" gap="3%" my={4}>
        <Box width={{ base: '100%', md: '49%' }}>
          <Card
            imageUrl="/images/car-1.png"
            title="1990 Land Rover Defender 90"
            description="This week, Dream cars is featuring two very clean and nicely modified four-wheel drive vehicles, from two different manufacturers - both highly respected in the off both highly respected in the off"
            previewLineCount={2}
            bidPrice={5000}
            tags={[{text: 'featured', color: 'orange'}]}
          />
        </Box>
        <Box width={{ base: '100%', md: '49%' }}>
          <Card
            imageUrl="/images/car-2.png"
            title="1969 Ford Torino GT Coupe"
            description="Up for auction is this 1969 Ford Torino GT Coupe, finished in Royal Maroon over a black interior, powered by a 302 cubic-inch VB running through a three-speed powered by a 302 cubic-inch VB running through a three-speed"
            previewLineCount={2}
            bidPrice={500}
            tags={[{text: 'featured', color: 'orange'}, {text: 'no reserve', color: 'blue'}]}
          />
        </Box>
      </Flex>
      <Flex justify="space-between" align="center" gap="2%" my={4}>
        <Box width={{ base: '50%', md: '24%' }}>
          <Card
            imageUrl="/images/car-3.png"
            title="1990 Land Rover Defender 90"
            description="This week, Dream cars is featuring two very clean and nicely modified four-wheel drive vehicles, from two different manufacturers - both highly respected in the off"
            previewLineCount={3}
            address="Morgan Twp, PA"
            bidPrice={500}
            tags={[{text: 'featured', color: 'orange'}]}
            isSmall={true}
          />
        </Box>
        <Box width={{ base: '50%', md: '24%' }}>
          <Card
            imageUrl="/images/car-3.png"
            title="1990 Land Rover Defender 90"
            description="This week, Dream cars is featuring two very clean and nicely modified four-wheel drive vehicles, from two different manufacturers - both highly respected in the off"
            previewLineCount={3}
            address="Morgan Twp, PA"
            bidPrice={500}
            tags={[{text: 'featured', color: 'orange'}]}
            isSmall={true}
          />
        </Box>
        <Box width={{ base: '50%', md: '24%' }}>
          <Card
            imageUrl="/images/car-3.png"
            title="1990 Land Rover Defender 90"
            description="This week, Dream cars is featuring two very clean and nicely modified four-wheel drive vehicles, from two different manufacturers - both highly respected in the off"
            previewLineCount={3}
            address="Morgan Twp, PA"
            bidPrice={500}
            tags={[{text: 'featured', color: 'orange'}]}
            isSmall={true}
          />
        </Box>
        <Box width={{ base: '50%', md: '24%' }}>
          <Card
            imageUrl="/images/car-3.png"
            title="1990 Land Rover Defender 90"
            description="This week, Dream cars is featuring two very clean and nicely modified four-wheel drive vehicles, from two different manufacturers - both highly respected in the off"
            previewLineCount={3}
            address="Morgan Twp, PA"
            bidPrice={500}
            tags={[{text: 'featured', color: 'orange'}]}
            isSmall={true}
          />
        </Box>
      </Flex>
    </Container>
  )
}
