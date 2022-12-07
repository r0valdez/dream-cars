import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Tag from "@components/tag"

const PreviewCard = ({ imageUrl = '', bidPrice = 0, date = '', tags = [], title = '', description = '', previewLineCount = 1 }) => {
  return (
    <Box boxShadow="base" borderRadius={8} p={4}>
      <Image src={imageUrl} boxSize="100%" alt={title} borderRadius={8} mb={4} />
      <Flex align="center" gap={2} mb={3}>
        {tags.map((tag) => {
          return <Tag index={tag.text} text={tag.text} color={tag.color} />
        })}
      </Flex>
      <Heading as='h4' size='md'>{title}</Heading>
      <Text my={2} noOfLines={previewLineCount}>{description}</Text>
      <Link color="blue.400" fontWeight="bold">View Listings <ArrowForwardIcon /></Link>
    </Box>
  );
};

export default PreviewCard;