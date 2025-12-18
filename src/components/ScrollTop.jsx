import React,{useState, useEffect} from 'react'
import {Button,Box} from "@mui/material"
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import { shades } from '../theme';

const ScrollTop = ({isDarkMode}) => {
  const [isHovered, setIsHovered] = useState(false);
    function scrollToTop() {
        // Scroll to the top of the document
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // For smooth scrolling effect
      });
    }

    useEffect(() => {
      const handleScroll = () => {
        const btn = document.getElementById('scrollToTopButton');
        if (!btn) return;
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          btn.style.display = 'block';
        } else {
          btn.style.display = 'none';
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
      
      
  return (
    <Box>
      <Button
        id="scrollToTopButton"
        onClick={scrollToTop}
        sx={{
          display: 'none',
          position: 'fixed',
          bottom: '12px',
          right: '12px',
          zIndex: '99',
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          backgroundColor: '#dcdcdd',
          color: isDarkMode ? shades.secondary[300] : shades.secondary[500],
          fontSize: isHovered ? '28px' : '18px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          transform: isHovered ? 'translateY(-6px) scale(1.05)' : 'translateY(0)',
          transition: 'font-size 0.3s, transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <KeyboardArrowUpTwoToneIcon
          sx={{
            animation: isHovered ? 'bounce 0.6s ease-in-out infinite alternate' : 'none',
          }}
        />
      </Button>

      <style>
        {`
          @keyframes bounce {
            from { transform: translateY(0); }
            to { transform: translateY(-4px); }
          }
        `}
      </style>
    </Box>
  )
}

export default ScrollTop
