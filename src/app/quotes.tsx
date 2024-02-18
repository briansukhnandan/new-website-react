import { Box } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import Typed from 'typed.js';

export const Quotes = () => {
	const typedRef = useRef(null);
  useEffect(() => {
    const options = {
    	strings: [
        "You've met with a terrible fate, haven't you?",
        "The Arcana is the means by which all is revealed.",
        "Time passes, people move. Like a river's flow, it never ends.",
        "What's your favorite... scary movie?",
        "Were it so easy?",
        "Fate had us meet as foes, but this Ring will make us brothers!",
        "I am thou. Thou art I. Thou hast established a new bond...",
        "To the heart seeking freedom, this Island is a prison surrounded by water."
      ].map(str => `<i>${str}</i>`),
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      shuffle: true,
    };
    
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    }
  }, [])

  return (
    <Box className="type-wrap">
      <span style={{ whiteSpace: 'pre' }} ref={typedRef} />
    </Box>
  );
}
