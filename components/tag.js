import { Text } from "@chakra-ui/react"

const Tag = ({ text = '', color = '' }) => {
  return <Text display="inline-block" fontSize="xs" fontWeight="semibold" color="white" bgColor={color} textTransform="uppercase" px={1} borderRadius={3}>{text}</Text>
}

export default Tag;