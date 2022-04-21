/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.0.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Banner from "views/admin/default/components/Banner";

// Custom components
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import NFT from "components/card/NFT";

// Assets
import Nft1 from "assets/img/nfts/Nft1.jpg";
import Nft2 from "assets/img/nfts/Nft2.jpg";
import Nft3 from "assets/img/nfts/Nft3.jpg";
import Avatar1 from "assets/img/avatars/avatar1.png";
import Avatar2 from "assets/img/avatars/avatar2.png";
import Avatar4 from "assets/img/avatars/avatar4.png";
import { GiAstronautHelmet, GiWallet } from "react-icons/gi";

export default function UserReports() {
  // Chakra Color Mode
  const textColorBrand = useColorModeValue("brand.500", "white");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 3 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={GiAstronautHelmet} color={brandColor} />
              }
            />
          }
          name='Astronauts in liberty'
          value='3018'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={GiWallet} color={brandColor} />
              }
            />
          }
          name='Number of holders'
          value='680'
        />
        <MiniStatistics growth='+23%' name='Number of trade' value='1545' />        
      </SimpleGrid>
    
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
        {/* If not connected -> <Banner/> */}
      </SimpleGrid>
      <Flex direction='column'>
        <Flex
          mt='45px'
          mb='20px'
          justifyContent='space-between'
          direction={{ base: "column", md: "row" }}
          align={{ base: "start", md: "center" }}
        >          
          <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
            In your wallet
          </Text>         
        </Flex>
        <SimpleGrid columns={{ base: 2, md: 3, xl: 4 }} gap='20px'>
          <NFT
            name='Abstract Colors'
            author='By Esthera Jackson'
            bidders={[Avatar4,              
            ]}
            image={Nft1}
            currentBid='0.91 ETH'
            download='#'
            height='300px'
          />
          <NFT
            name='ETH AI Brain'
            author='By Nick Wilson'
            bidders={[Avatar2,
              
            ]}
            image={Nft2}
            currentBid='0.91 ETH'
            download='#'
          />
          <NFT
            name='Mesh Gradients '
            author='By Will Smith'
            bidders={[
              Avatar1             
            ]}
            image={Nft3}
            currentBid='0.91 ETH'
            download='#'
          />
        </SimpleGrid>       
      </Flex>
  
    </Box>
  );
}
