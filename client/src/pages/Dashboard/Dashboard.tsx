import {Box,Stack,Container,Grid, Divider} from '@mui/material'
import Navbar from '../../components/Navbar/Navbar'

const Dashboard = () => {
  return (
    <Box>
        <Container maxWidth='xl'>
         <Navbar dashboard={true}/>
            <Divider />
            <Stack color={'black'} mt={10}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora autem illum iusto temporibus ipsa aut. Ad assumenda sed, laboriosam voluptatibus molestiae ullam laudantium cupiditate aut magni quisquam repudiandae iste.
            </Stack>
        </Container>
    </Box>
  )
}

export default Dashboard