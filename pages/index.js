import { Box, Container, Flex, InputGroup, InputLeftElement, Input, Select, Text } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { BiFilter } from "react-icons/bi"
import Card from "@components/card"

export default function Home() {
  return (
    <Container maxW="1280px">
      <Flex justify="space-between" align="center" my={4}>
        <Flex align="center" gap={8}>
          <Select borderRadius={4}>
            <option value="Live Actions">Live Actions</option>
          </Select>
          <Text fontWeight="semibold" display="flex" alignItems="center" gap={1}><BiFilter />Filter</Text>
        </Flex>
        <Flex align="center" gap={4}>
          <Select borderRadius={4}>
            <option value="Recently Listed">Recently Listed</option>
          </Select>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
            >
              <SearchIcon color='gray.400' />
            </InputLeftElement>
            <Input placeholder="Search Listings..." variant='filled' borderRadius={4} />
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
            date="3 days"
            tags={[{text: 'featured', color: 'orange.300'}]}
          />
        </Box>
        <Box width={{ base: '100%', md: '49%' }}>
          <Card
            imageUrl="/images/car-2.png"
            title="1969 Ford Torino GT Coupe"
            description="Up for auction is this 1969 Ford Torino GT Coupe, finished in Royal Maroon over a black interior, powered by a 302 cubic-inch VB running through a three-speed powered by a 302 cubic-inch VB running through a three-speed"
            previewLineCount={2}
            bidPrice={500}
            date="7 days"
            tags={[{text: 'featured', color: 'orange.300'}, {text: 'no reserve', color: 'blue.500'}]}
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
            date="3 days"
            tags={[{text: 'featured', color: 'orange.300'}]}
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
            date="3 days"
            tags={[{text: 'featured', color: 'orange.300'}]}
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
            date="3 days"
            tags={[{text: 'featured', color: 'orange.300'}]}
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
            date="3 days"
            tags={[{text: 'featured', color: 'orange.300'}]}
            isSmall={true}
          />
        </Box>
      </Flex>
    </Container>
  )
}
