import { Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Switch, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '../components/Card';
import { TbToggleLeft, TbToggleRight, TbZodiacTaurus } from 'react-icons/tb';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>yaoyaoCleo</title>
        <meta name="description" content="a Home of Cleo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex justifyContent='flex-end' p={4}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<TbZodiacTaurus />}
          />
          <MenuList>
            <MenuItem icon={<TbToggleRight />}>
              <Text pb={1}>Toggle Color Mode</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <VStack spacing='24px' mt={8}>
        <Heading noOfLines={1}>
          a Home of Cleo
        </Heading>
        <Card>
          <h2 className='text-2xl mb-4'>Go dark &rarr;</h2>
          <Flex alignItems='center' gap='2'>
            <Switch colorScheme='gray' /><Text pb={1}>Dark Mode</Text>
          </Flex>
        </Card>
        <Card>
          <h2 className='text-2xl mb-4'>Documentation &rarr;</h2>
          <p className='m-0 text-xl'>Find in-depth information about Next.js features and API.</p>
        </Card>
      </VStack>
    </div>
  )
}

export default Home
