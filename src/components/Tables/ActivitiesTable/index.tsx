import { useState, useEffect } from 'react';
import * as db from '../db.json';

import {Table} from "~/components/Table";

const ActivitiesTable = () => {

  const [tableData, setTableData] = useState<any[]>([]);
  const [ showMore, setShowMore ] = useState<boolean>(false);

  useEffect(() => {
    setTableData(JSON.parse(JSON.stringify(db.activities)))
  }, [])

  useEffect(()=> {
    if (showMore) {
      setTableData(JSON.parse(JSON.stringify(db.activities)))
    } else {
      setTableData(JSON.parse(JSON.stringify(db.activities)).slice(0,4))
    }
  }, [showMore])

  return (
    <div style={{ display: 'flex', width: '100%', marginTop: '20px' }}>


      <Table>
        <thead>
          <tr>
            <th style ={{width:'5%',textAlign:'start'}}>ID</th>
            <th>Nome da atividade, ação ou projeto</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.activities}</td>
                </tr>
              )
            })
          }
      </tbody>
      </Table>

    </div>
  
  )
}

export default ActivitiesTable;