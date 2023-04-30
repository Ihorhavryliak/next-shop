'use client'
import { Link } from '@chakra-ui/next-js'

export default function Home() {
  return (
    <Link href='/about' color='brand.900' _hover={{ color: 'blue.500' }}>
      About
    </Link>
  )
}