"use client"
import { Box, Button } from '@chakra-ui/react'
import Snowfall from 'react-snowfall'

export const SnowEffect = () => {
  return (
    <Snowfall
      radius={[0.3, 1]}
      snowflakeCount={50}
    />
  )
}

export const ToggleSnowButton = (props: { toggleFn: () => void }) => {
  return (
    <Box
      position={"fixed"}
      top={"5px"}
      right={"5px"}
    >
      <Button
        onClick={() => props.toggleFn()} 
        size={"xs"}
        colorScheme="green"
      >
        {"Toggle ❄ ❅ ❆"}
      </Button>
    </Box>
  )
}
