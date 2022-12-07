import { Box, Container, Flex, InputGroup, InputLeftElement, Input, Select, Text } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { BiFilter } from "react-icons/bi"
import PreviewCard from "@components/previewCard"

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
              children={<SearchIcon color='gray.300' />}
            />
            <Input placeholder="Search Listings..." variant='filled' size="sm" borderRadius={4} />
          </InputGroup>
        </Flex>
      </Flex>
      <Flex justify="space-between" align="center" gap="3%">
        <Box width={{ base: '100%', md: '49%' }}>
          <PreviewCard
            imageUrl="/images/car-1.png"
            title="1990 Land Rover Defender 90"
            description="This week, Dream cars is featuring two very clean and nicely modified four-wheel drive vehicles, from two different manufacturers - both highly respected in the off"
            previewLineCount={2}
            bidPrice={5000}
            tags={[{text: 'featured', color: 'orange'}]}
          />
        </Box>
        <Box width={{ base: '100%', md: '49%' }}>
          <PreviewCard
            imageUrl="/images/car-2.png"
            title="1969 Ford Torino GT Coupe"
            description="Up for auction is this 1969 Ford Torino GT Coupe, finished in Royal Maroon over a black interior, powered by a 302 cubic-inch VB running through a three-speed three-speed"
            previewLineCount={2}
            bidPrice={500}
            tags={[{text: 'featured', color: 'orange'}, {text: 'no reserve', color: 'blue'}]}
          />
        </Box>
      </Flex>
    </Container>
  )
}
