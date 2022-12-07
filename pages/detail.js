import { Box, Button, Center, Container, Divider, Flex, Grid, Heading, Image, Link, Select, Text, Table, Tbody, Tr, Td, TableContainer, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Tag from "@components/tag"

export default function Detail() {
  return <Container maxW="1280px" py={4}>
    <Tag text="featured" color="blue.500" />
    <Tag text="Reserve not met" color="red.500" />
    <Heading my={2}>1990 Land Rover Defender 90</Heading>
    <Text fontWeight="semibold" color="gray" textTransform="uppercase">MORGAN TWP, PA</Text>
    <Grid my={4} templateColumns="69% 29%" gap="2%">
      <Image src="/images/car-1.png" borderRadius={8} alt="Car" />
      <Grid templateColumns="49% 49%" gap="2%" justify="space-between">
        <Text flex="0 0 50%" fontWeight="bold" fontSize="lg">All Photos(50)</Text>
        <Select flex="0 0 40%" size="sm" borderRadius={4}>
          <option value="All">All</option>
        </Select>
        <Image src="/images/car-1.png" borderRadius={8} alt="Car" />
        <Image src="/images/car-1.png" borderRadius={8} alt="Car" />
        <Image src="/images/car-1.png" borderRadius={8} alt="Car" />
        <Image src="/images/car-1.png" borderRadius={8} alt="Car" />
        <Image src="/images/car-1.png" borderRadius={8} alt="Car" />
        <Image src="/images/car-1.png" borderRadius={8} alt="Car" />
        <Image src="/images/car-1.png" borderRadius={8} alt="Car" />
        <Box pos="relative" overflow="hidden" borderRadius={8}>
          <Image src="/images/car-1.png" />
          <Center pos="absolute" top={0} left={0} bg="rgba(0, 0, 0, .6)" color="white" width="100%" height="100%" >
            <Link>View All (50)</Link>
          </Center>
        </Box>
      </Grid>
    </Grid>
    <Grid my={4} templateColumns="69% 29%" gap="2%">
      <Box>
        <TableContainer border="1px" borderColor="gray.300" borderRadius={8}>
          <Table>
            <Tbody>
              <Tr>
                <Td colSpan={4} bg="gray.50">
                  <Grid templateColumns="25% 36% 40%">
                    <Center>Ends in: <Text display="inline" fontWeight="bold">2 Days</Text></Center>
                    <Flex align="center">
                      <Divider orientation="vertical" height="3rem" mx={4} />
                      <Box>
                        Highest Bid: <Text display="inline" fontSize="xl" fontWeight="bold">${2599.99.toFixed(2)}</Text>
                        <br />
                        <Tag text="Reserve not met" color="red.500" />
                      </Box>
                    </Flex>
                    <Flex align="center" gap={6}>
                      <Divider orientation="vertical" height="3rem" mx={4} />
                      <Text color="blue.500">27 Bids</Text>
                      <Button flexGrow={1} colorScheme="blue" size="md">Place Bid</Button>
                    </Flex>
                  </Grid>
                </Td>
              </Tr>
              <Tr>
                <Td width="20%">Seller</Td>
                <Td width="30%">jeepthing</Td>
                <Td width="20%" isNumeric>Body Style</Td>
                <Td width="30%" isNumeric>SUV</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
              <Tr>
                <Td width="20%">inches</Td>
                <Td width="30%">millimetres (mm)</Td>
                <Td width="20%" isNumeric>25.4</Td>
                <Td width="30%" isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Tabs mt={4} border="1px" borderColor="gray.300" borderRadius={8} overflow="hidden">
          <Text fontSize="lg" fontWeight="bold" p={4} bg="gray.50">Additional Information/Pictures</Text>
          <TabList bg="gray.50">
            <Tab>General</Tab>
            <Tab>Exterior</Tab>
            <Tab>Interior</Tab>
            <Tab>Mechanical</Tab>
            <Tab>Extra</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text>
                {'This is a very clean and extensively modified "JKU" chassis Wrangler, a two-owner example from Hawaii that is very clean inside, out, and underneath.'}
              </Text>
              <Image src="/images/car-4.png" width="100%" mt={4} borderRadius={8} alt="Car" />
            </TabPanel>
            <TabPanel>
              <Text>
              {'This is a very clean and extensively modified "JKU" chassis Wrangler, a two-owner example from Hawaii that is very clean inside, out, and underneath. Exterior'}
              </Text>
              <Image src="/images/car-1.png" width="100%" mt={4} borderRadius={8} alt="Car" />
            </TabPanel>
            <TabPanel>
              <Text>
                {'This is a very clean and extensively modified "JKU" chassis Wrangler, a two-owner example from Hawaii that is very clean inside, out, and underneath. Interior'}
              </Text>
              <Image src="/images/car-4.png" width="100%" mt={4} borderRadius={8} alt="Car" />
            </TabPanel>
            <TabPanel>
              <Text>
                {'This is a very clean and extensively modified "JKU" chassis Wrangler, a two-owner example from Hawaii that is very clean inside, out, and underneath. Mechanical'}
              </Text>
              <Image src="/images/car-1.png" width="100%" mt={4} borderRadius={8} alt="Car" />
            </TabPanel>
            <TabPanel>
              <Text>
                {'This is a very clean and extensively modified "JKU" chassis Wrangler, a two-owner example from Hawaii that is very clean inside, out, and underneath. Extra'}
              </Text>
              <Image src="/images/car-4.png" width="100%" mt={4} borderRadius={8} alt="Car" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box>
        <Box border="1px" borderColor="gray.300" p={4} borderRadius={8}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>{`Seller's notes`}</Text>
          <Text>{`Up for auction is this 2013 Jeep Wrangler Unlimited four-door, finished in silver over a black interior, powered by a 3.6 liter V6 running through a five speed automatic transmission with selectable four-wheel drive, and 57,100 miles on the clock.`}</Text>
        </Box>
      </Box>
    </Grid>
  </Container>
}