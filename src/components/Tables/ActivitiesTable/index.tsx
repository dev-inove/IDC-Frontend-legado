import { useState, useEffect } from 'react';
import * as db from '../db.json';
import * as S from '../styles';

import {Table} from "~/components/Table";
import { addZeros } from '~/utils/masks';

const ActivitiesTable = () => {

  const [tableData, setTableData] = useState<any[]>([]);
  const [ showMore, setShowMore ] = useState<boolean>(false);

  useEffect(()=> {
    if (showMore) {
      setTableData(JSON.parse(JSON.stringify(db.activities)).slice(0,20))
    } else {
      setTableData(JSON.parse(JSON.stringify(db.activities)).slice(0,4))
    }
  }, [showMore])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '20px' }}>


      <Table>
        <thead>
          <tr>
            <th style ={{width:'8.5%',textAlign:'start'}}>ID</th>
            <th>Nome da atividade, ação ou projeto</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{addZeros(item.id, 2)}</td>
                  <td>{item.activities}</td>
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

export default ActivitiesTable;