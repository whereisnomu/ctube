import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search  } from '@mui/icons-material'



const SearchBar = () => {
  return (
    <Paper component="form"
    onSubmit={() => {}}
    sx={{borderRadius: 16, padding: 1, border: '1px solid #e3e3e3', boxShadow: 'none'}}>
      <input type="text" className='search-bar' placeholder='Искать...' value="" onChange={() => {}} />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }}><Search/></IconButton>
    </Paper>
  )
}

export default SearchBar