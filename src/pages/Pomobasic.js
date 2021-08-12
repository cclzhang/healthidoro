// import { pages } from '../pages.module.scss';
import { useEffect } from 'react';

const Pomobasic = ({setIsHealthidoro}) => {
  useEffect(() => {
    setIsHealthidoro(false);
  })

  return (
    <main 
      // className={pages}
    >
      <p>pomobasic</p>
    </main>
  )
}

export default Pomobasic;