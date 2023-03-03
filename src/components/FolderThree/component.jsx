import { Table } from "antd";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Column from "antd/es/table/Column";
import useData from "../../hooks/data";
import { FileTwoTone, ArrowLeftOutlined } from "@ant-design/icons";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import "../css/style.css";

const FolderThree = () =>{
  const data = useData()
  const folder_data = data.data.Folder3;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
    Cookies.set('sortOrder', sorter.order);
    Cookies.set('sortField', sorter.field);
  };
  const sortOrder = Cookies.get('sortOrder') || 'descend';
  const sortField = Cookies.get('sortField') || 'mtime';
    return(
        <>
          <h1>Folder Three</h1>
          <Link to='/' className="link"><ArrowLeftOutlined /></Link>
          {(folder_data !== undefined) ? 
           <Table dataSource={folder_data} onChange={onChange} defaultSortOrder={sortOrder} 
           defaultSortField={sortField}>
              <ColumnGroup title="" >
                      <Table.Column
                         title=""
                         dataIndex="icon"
                         key="icon3"
                         align="right"
                         width="5%"
                         render={ () => (
                          <FileTwoTone />
                         )}
                      />
                      <Column title="Name" dataIndex="name" key="name3" sorter = {(a, b) => a.name.length - b.name.length}
                        sortDirections = {['descend']}/>
              </ColumnGroup>
              <Column title="Type" dataIndex="type" key="type3"/>
              <Column title="Size" dataIndex="size" key="size3" defaultSortOrder='descend' sorter = {(a, b) => a.size - b.size} render={(size) => `${(size / 1024).toFixed(2)} KB`}/>
              <Column title="Сreate Time" dataIndex="atime" key="atime3" render={(atime) => {
              const date = new Date(atime * 1000); 
              const formattedDate = date.toLocaleDateString();
              return formattedDate;
              }} 
              sorter={(a, b) => a.atime - b.atime}/>
              <Column title="Modification Time" dataIndex="mtime" key="mtime3" render={(mtime) => {
              const date = new Date(mtime * 1000); 
              const formattedDate = date.toLocaleDateString();
              return formattedDate;
              }}
              sorter={(a, b) => a.mtime - b.mtime} />
            </Table>
            :
            <Table></Table>
            }
        </>
    )
}

export default FolderThree;