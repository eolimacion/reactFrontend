import Button from '@mui/material/Button';


export const NavAbout = ({ setAbout }) => {
    return (
        <nav className='firstNavFav'>
          <Button variant="contained" size= 'large' style= {{backgroundColor: 'white', color: 'var(--color-boton-motogp)', fontWeight: '600', fontSize: '15px', margin: '2rem', width: '150px'}} onClick={() => {setAbout("mission")
      }}>Mission</Button>

    
    <Button variant="contained" size= 'large' style= {{backgroundColor: 'white', color: 'var(--color-boton-motogp)', fontWeight: '600', fontSize: '15px', margin: '2rem', width: '150px'}} onClick={() => {
            setAbout("commitment")}}>Commitment</Button>
    

    
    <Button variant="contained" size= 'large' style= {{backgroundColor: 'white', color: 'var(--color-boton-motogp)', fontWeight: '600', fontSize: '15px', margin: '2rem', width: '150px'}} onClick={() => {setAbout("discover") 
          }}>Discover</Button>
    

        </nav>
      );
    }