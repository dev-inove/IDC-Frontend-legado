import React, {useState,useEffect,useRef} from 'react';
import axios from 'axios';

import AssistedFiltersForm from '~/components/AssistedFilterForm';
import * as S from './styles';

function Assisted() {
  const [assisteds,setAssisteds] = useState([]);
  const [filteredAssisteds , setFilteredAssisteds] = useState([]);
  const prev = useRef();

  


  useEffect(()=>{
      if(prev.current === assisteds)return
      axios.get('http://localhost:4000/assisteds')
      .then((res)=>{
        prev.current = res.data;
        setAssisteds(res.data)       
      })
    },[filteredAssisteds,assisteds]
  )

  return (
    <S.AssistedsContainer>
      <h1>Assistidos</h1>
      < AssistedFiltersForm filteredAssisteds={filteredAssisteds} setFilteredAssisteds={setFilteredAssisteds} />
    </S.AssistedsContainer>
  );
}

export default Assisted;
