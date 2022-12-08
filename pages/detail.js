import { Box, Button, Center, Container, Divider, Flex, Grid, Heading, Image, Link, Select, Text, Table, Tbody, Tr, Td, TableContainer, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { RxDotsHorizontal } from "react-icons/rx"
import Tag from "@components/tag"

export default function Detail() {
  return <Container maxW="1280px" py={4}>
    <Tag text="featured" color="blue.500" />
    <Tag text="Reserve not met" color="red.500" />
    <Flex justify="space-between" align="center">
      <Heading my={2} color="gray.900" fontSize="30px">1990 Land Rover Defender 90</Heading>
      <RxDotsHorizontal color="gray.700" />
    </Flex>
    <Text fontWeight="semibold" color="gray.500" fontSize="sm" textTransform="uppercase">MORGAN TWP, PA</Text>
    <Grid my={4} templateColumns="69% 29%" gap="2%">
      <Image src="/images/car-1.png" borderRadius={8} alt="Car" />
      <Grid templateColumns="49% 49%" gap="2%" justify="space-between">
        <Text flex="0 0 50%" fontWeight="bold" fontSize="18px" color="gray.900">All Photos(50)</Text>
        <Select flex="0 0 40%" size="sm" borderRadius={4} color="gray.700">
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
          <Center pos="absolute" top={0} left={0} bg="linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))" color="white" width="100%" height="100%" >
            <Link fontWeight="bold">View All (50)</Link>
          </Center>
        </Box>
      </Grid>
    </Grid>
    <Grid my={4} templateColumns="69% 29%" gap="2%">
      <Box>
        <TableContainer border="1px" borderColor="gray.200" borderRadius={8}>
          <Table color="gray.700" fontWeight="medium">
            <Tbody>
              <Tr>
                <Td colSpan={4} bg="#F7FAFC">
                  <Grid templateColumns="25% 36% 40%">
                    <Center>Ends in: <Text display="inline" fontWeight="bold">2 Days</Text></Center>
                    <Flex align="center">
                      <Divider orientation="vertical" height="3rem" mx={4} />
                      <Box>
                        <Flex align="center" gap={2} mb={2}>Highest Bid: <Text display="inline" fontSize="2xl" fontWeight="bold">${2599.99.toFixed(2)}</Text></Flex>
                        <Tag text="Reserve not met" color="red.500" />
                      </Box>
                    </Flex>
                    <Flex align="center" gap={6}>
                      <Divider orientation="vertical" height="3rem" mx={4} />
                      <Text fontWeight="medium" color="blue.500">27 Bids</Text>
                      <Button flexGrow={1} colorScheme="blue" size="md" fontWeight="semibold">Place Bid</Button>
                    </Flex>
                  </Grid>
                </Td>
              </Tr>
              <Tr>
                <Td width="20%">Seller</Td>
                <Td width="30%" color="blue.500">jeepthing</Td>
                <Td width="20%">Body Style</Td>
                <Td width="30%">SUV</Td>
              </Tr>
              <Tr>
                <Td>Make</Td>
                <Td fontWeight="bold">Jeep</Td>
                <Td>Model</Td>
                <Td fontWeight="bold">Wrangler</Td>
              </Tr>
              <Tr>
                <Td>Year</Td>
                <Td fontWeight="bold">2013</Td>
                <Td>Mileage</Td>
                <Td fontWeight="bold">57,100</Td>
              </Tr>
              <Tr>
                <Td>Interior Color</Td>
                <Td fontWeight="bold">Black Leather</Td>
                <Td>Exterior Color</Td>
                <Td fontWeight="bold">Silver</Td>
              </Tr>
              <Tr>
                <Td>Engine</Td>
                <Td fontWeight="bold">3.6 Liter V6</Td>
                <Td>Drivertrain</Td>
                <Td fontWeight="bold">4WD</Td>
              </Tr>
              <Tr>
                <Td>VIN</Td>
                <Td fontWeight="bold">1CHASDF23891JASDFH</Td>
                <Td>Owners</Td>
                <Td fontWeight="bold">2</Td>
              </Tr>
              <Tr>
                <Td>Transmission</Td>
                <Td fontWeight="bold">Five-Speed Automatic</Td>
                <Td colSpan={2}></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Tabs mt={4} border="1px" borderColor="gray.200" borderRadius={8} overflow="hidden">
          <Text fontSize="2xl" fontWeight="bold" px={4} pt={4} pb={2} bg="#F7FAFC">Additional Information/Pictures</Text>
          <TabList bg="#F7FAFC" fontSize="18px">
            <Tab fontWeight="medium" color="gray.500" _selected={{ color: 'gray.900', fontWeight: 'medium', borderBottom: '2px', borderColor: 'blue.500'}}>General</Tab>
            <Tab fontWeight="medium" color="gray.500" _selected={{ color: 'gray.900', fontWeight: 'medium', borderBottom: '2px', borderColor: 'blue.500'}}>Exterior</Tab>
            <Tab fontWeight="medium" color="gray.500" _selected={{ color: 'gray.900', fontWeight: 'medium', borderBottom: '2px', borderColor: 'blue.500'}}>Interior</Tab>
            <Tab fontWeight="medium" color="gray.500" _selected={{ color: 'gray.900', fontWeight: 'medium', borderBottom: '2px', borderColor: 'blue.500'}}>Mechanical</Tab>
            <Tab fontWeight="medium" color="gray.500" _selected={{ color: 'gray.900', fontWeight: 'medium', borderBottom: '2px', borderColor: 'blue.500'}}>Extra</Tab>
          </TabList>
          <TabPanels color="gray.700" fontWeight="medium" fontSize="18px">
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
        <Box border="1px" borderColor="gray.200" color="gray.900" p={4} borderRadius={8}>
          <Text fontSize="2xl" fontWeight="bold" mb={2}>{`Seller's notes`}</Text>
          <Text fontSize="18px" fontWeight="medium">{`Up for auction is this 2013 Jeep Wrangler Unlimited four-door, finished in silver over a black interior, powered by a 3.6 liter V6 running through a five speed automatic transmission with selectable four-wheel drive, and 57,100 miles on the clock.`}</Text>
        </Box>
      </Box>
    </Grid>
  </Container>
}