import { Text } from "@chakra-ui/react"

const Tag = ({ text = '', color = '' }) => {
  return <Text display="inline-block" fontSize="xs" fontWeight="bold" color="white" bgColor={color} textTransform="uppercase" px={1} borderRadius={2} mr={2}>{text}</Text>
}

export default Tag;