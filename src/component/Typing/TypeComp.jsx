import { TypeAnimation } from 'react-type-animation';

const Type = () => {
    return ( 
        <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Developer',
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          'Engineer',
          2000
        ]}
        wrapper="span"
        speed={3}
        style={{ fontSize: '2.25rem', display: 'inline-block',lineHeight:'2.5rem',color:'rgb(29 78 216)' }}
        repeat={Infinity}
      />
     );
}
 
export default Type;