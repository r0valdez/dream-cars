import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react"
import { ArrowForwardIcon, CalendarIcon } from '@chakra-ui/icons'
import Tag from "@components/tag"

const Card = ({ imageUrl = '', bidPrice = 0, date = '', tags = [], title = '', description = '', previewLineCount = 1, address = '', isSmall = false }) => {
  return (
    <Box boxShadow={isSmall ? 'none' : 'base'} borderRadius={isSmall ? 0 : 8} p={isSmall ? 0 : 4}>
      <Box pos="relative" w="100%">
        <Image src={imageUrl} boxSize="100%" alt={title} borderRadius={8} mb={4} />
        <Box pos="absolute" left="3%" bottom="5%" display="inline-flex" alignItems="center" gap={1} fontSize="xs" backgroundColor="rgba(0, 0, 0, .6)" px={2} py={0.5} borderRadius={5}>
          {!isSmall && <Text color="whiteAlpha.600">Current Bid: </Text>}
          <Text color="whiteAlpha.800">${bidPrice.toFixed(2)}</Text>
        </Box>
        <Box pos="absolute" right="3%" bottom="5%" display="inline-flex" alignItems="center" gap={1} fontSize="xs" backgroundColor="rgba(0, 0, 0, .6)" px={2} py={0.5} borderRadius={5}>
          <CalendarIcon color="whiteAlpha.800" />
          <Text color="whiteAlpha.800">{date}</Text>
        </Box>
      </Box>
      <Flex align="center" gap={2} mb={3}>
        {tags.map((tag) => {
          return <Tag key={tag.text} text={tag.text} color={tag.color} />
        })}
      </Flex>
      <Heading as='h4' size='md'>{title}</Heading>
      {address && <Text fontWeight="semibold" color="gray" textTransform="uppercase" fontSize="xs" mt={2}>{address}</Text>}
      <Text my={2} noOfLines={previewLineCount} fontSize="sm" color="blackAlpha.800">{description}</Text>
      {!isSmall && <Link color="blue.400" fontWeight="bold">View Listings <ArrowForwardIcon /></Link>}
    </Box>
  );
};

export default Card;