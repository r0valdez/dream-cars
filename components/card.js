import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react"
import { ArrowForwardIcon, CalendarIcon } from '@chakra-ui/icons'
import Tag from "@components/tag"

const Card = ({ imageUrl = '', bidPrice = 0, date = '', tags = [], title = '', description = '', previewLineCount = 1, address = '', isSmall = false }) => {
  return (
    <Box boxShadow={isSmall ? 'none' : 'base'} borderRadius={isSmall ? 0 : 8} p={isSmall ? 0 : 4}>
      <Box pos="relative" w="100%">
        <Image src={imageUrl} boxSize="100%" alt={title} borderRadius={8} mb={4} />
        <Box pos="absolute" left="3%" bottom="5%" display="inline-flex" alignItems="center" gap={1} fontSize="xs" backgroundColor="rgba(26, 32, 44, 0.8)" px={2} py={0.5} borderRadius={6}>
          {!isSmall && <Text color="whiteAlpha.700">Current Bid: </Text>}
          <Text color="white">${bidPrice.toFixed(2)}</Text>
        </Box>
        <Box pos="absolute" right="3%" bottom="5%" display="inline-flex" alignItems="center" gap={1} fontSize="xs" backgroundColor="rgba(26, 32, 44, 0.8)" px={2} py={0.5} borderRadius={6}>
          <CalendarIcon color="whiteAlpha.700" />
          <Text color="white">{date}</Text>
        </Box>
      </Box>
      <Flex align="center" mb={2}>
        {tags.map((tag) => {
          return <Tag key={tag.text} text={tag.text} color={tag.color} />
        })}
      </Flex>
      <Heading as='h4' fontSize="18px" lineHeight="28px" color="#1A202C">{title}</Heading>
      {address && <Text fontWeight="semibold" color="rgba(26, 32, 44, 0.5)" textTransform="uppercase" fontSize="xs" mt={1}>{address}</Text>}
      <Text my={1} noOfLines={previewLineCount} fontSize="sm" fontWeight="medium" color="rgba(26, 32, 44, 0.7)">{description}</Text>
      {!isSmall && <Link color="#3182CE" fontSize="sm" fontWeight="semibold" href="/detail">View Listings <ArrowForwardIcon /></Link>}
    </Box>
  );
};

export default Card;