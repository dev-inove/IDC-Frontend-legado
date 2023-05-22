import { useState, useEffect } from 'react';
import * as db from '../db.json';
import * as S from '../styles';

import {Table} from "~/components/Table";
import { addZeros } from '~/utils/masks';

const AssistedTable = () => {
  const [tableData, setTableData] = useState<any[]>([]);
  const [ showMore, setShowMore ] = useState<boolean>(false);

  useEffect(()=> {
    if (showMore) {
      setTableData(JSON.parse(JSON.stringify(db.assisted)).slice(0,20))
    } else {
      setTableData(JSON.parse(JSON.stringify(db.assisted)).slice(0,4))
    }
  }, [showMore])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '20px' }}>
      <Table>
      <thead>
          <tr>
            <th style ={{width:'8.5%',textAlign:'start'}}>ID</th>
            <th style ={{width:'23%'}}>Nome completo</th>
            <th style ={{width:'23%'}}>Data de nascimento</th>
            <th style ={{width:'9.4%'}}>Idade</th>
            <th style ={{width:'13.3%'}}>Sexo</th>
            <th>Grau de deficiência visual</th>
          </tr>
        </thead>
        <tbody>
          {      
            tableData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{addZeros(item.id, 2)}</td>
                  <td>{item.fullName}</td>
                  <td>{item.birthDate}</td>
                  <td>{addZeros(item.age, 2)}</td>
                  <td>{item.gender == "Male"?"Masculino":"Feminino"}</td>
                  <td>{item.visualImpairment}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      <S.seeMore
       onClick={() => setShowMore(current => !current)}
      >{showMore? "Ver menos": "Ver mais"}
      </S.seeMore>
    </div>
  )
}

export default AssistedTable