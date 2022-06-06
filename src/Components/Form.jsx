import React,{useState} from 'react'
import {Box,Stack,Input,Button,InputGroup, InputLeftElement ,Text} from "@chakra-ui/react"
const Form = () => {
 const [un, setun] = useState('');
 const [n, setn] = useState('');
 const [m, setm] = useState('');
 const [y, sety] = useState('');
 const [cvc, setcvc] = useState('');
 
 
 
 
 
  
  return (
  

      <div>
        <div>
          <div
        style={{width:"400px",height:"250px",border:"1px solid black",borderRadius:"20px",margin:"auto",marginTop:"20px" ,padding:"30px",backgroundImage: `url("https://www.sbicard.com/sbi-card-en/assets/media/images/who-we-are/about-us/d-abtus.jpg")`}} >
          <div style={{display:"flex",justifyContent:"space-between"}}><img src="https://img.icons8.com/office/344/sim-card-chip.png" width={'40px'} height={'40px'}  alt="" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/1024px-SBI-logo.svg.png" width={'40px'} height={'40px'}  alt="" />
          </div>
          <div style={{marginTop:"20px"}}><h1 style={{fontFamily: "'Saira', sans-serif",fontSize:"25px",letterSpacing:'5px'}}>{n}</h1></div>
          <div style={{display:'flex',marginTop:'30px',justifyContent:'space-between',textAlign:'left'}}>
          <div >
            <div><p style={{fontSize:'9px',fontWeight:'500'}}>CARD HOLDER</p></div>
            <div><h3 style={{fontSize:'13px',fontWeight:'500'}}>{un}</h3></div>
          </div>
          <div>
            <div><p style={{fontSize:'9px',fontWeight:'500'}}>EXPIRES</p></div>
            <div><h3 style={{fontSize:'13px',fontWeight:'500'}}>{m}/{y}</h3></div>
          </div>
          <div>
            <div><p style={{fontSize:'9px',fontWeight:'500'}}>CVC</p></div>
            <div><h3 style={{fontSize:'13px',fontWeight:'500'}}>{cvc}</h3></div>
          </div>
          </div>
        </div>
      </div>
       <Box as={'form'} width="400px" margin={'auto'} mt={10} display={'flex'} flexDirection={'column'} justifyItems={'center'} >
           <Stack gap="10px" display={'flex'} flexDirection={'column'} justifyItems={'center'} >
           <Text  fontSize='10' textAlign='left'>USERNAME</Text>
           <InputGroup>

          <InputLeftElement children={<i class="fa-solid fa-id-badge"></i>}/>
          <Input border={'0px'} borderRadius={'none'} borderBottom={'1px solid pink'} onChange={(e)=>setun(e.target.value)}/>
          </InputGroup>
          <Text  fontSize='10' textAlign='left'>CARDNUMBER</Text>
          <InputGroup>
          <InputLeftElement children={<i class="fa-solid fa-credit-card"></i>}/>
          <Input border={'0px'} borderRadius={'none'} borderBottom={'1px solid pink'} onChange={(e)=>setn(e.target.value)} />
          </InputGroup>
          <div style={{display:"flex"}}>
          <InputGroup>
          <InputLeftElement children={<i class="fa-solid fa-calendar"></i>}/>
          <Input border={'0px'} borderRadius={'none'} width={"100px"} borderBottom={'1px solid pink'} onChange={(e)=>setm(e.target.value)} />
          </InputGroup>
          <InputGroup>
          <InputLeftElement children={<i class="fa-solid fa-calendar-days"></i>}/>
          <Input border={'0px'} borderRadius={'none'} width={"100px"} borderBottom={'1px solid pink'} onChange={(e)=>sety(e.target.value)} />
          </InputGroup>
          <InputGroup>
          <InputLeftElement children={<i class="fa-solid fa-lock"></i>}/>
          <Input border={'0px'} borderRadius={'none'} width={"100px"} borderBottom={'1px solid pink'} onChange={(e)=>setcvc(e.target.value)} />
          </InputGroup>
          </div>
              
            
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'100px'}
              // margin={'auto'}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}>
              Pay
            </Button>
           </Stack>
          
          </Box>
          
    </div>

  
  )
}

export default Form