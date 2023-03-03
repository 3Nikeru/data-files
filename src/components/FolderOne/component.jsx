import { Table, Card } from "antd";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Column from "antd/es/table/Column";
import useData from "../../hooks/data";
import { Link } from "react-router-dom";
import { FileImageTwoTone, ArrowLeftOutlined } from "@ant-design/icons";
import "../css/style.css";
import Cookies from 'js-cookie';

const FolderOne = () =>{
    const data = useData();
    const folder_data = data.data.Folder1;

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
      Cookies.set('sortOrder', sorter.order);
      Cookies.set('sortField', sorter.field);
    };
    const sortOrder = Cookies.get('sortOrder') || 'descend';
    const sortField = Cookies.get('sortField') || 'mtime';

    return(
         <>
            <h1>Folder One</h1>
            <Link to='/' className="link"><ArrowLeftOutlined /></Link>
            {(folder_data !== undefined) ? 
            <Card>
              <Table dataSource={folder_data} onChange={onChange} defaultSortOrder={sortOrder} 
              defaultSortField={sortField} scroll={{ x: true }}>
                <ColumnGroup title="" >
                        <Table.Column
                           title=""
                           dataIndex="icon"
                           key="icon1"
                           align="right"
                           width="5%"
                           render={ () => (
                                <FileImageTwoTone  style={{ fontSize: '30px', color: '#08c' }} />
                                )}
                        />
                        <Column 
                          title="Name" 
                          dataIndex="name" 
                          key="name1" 
                          filterMode="tree" 
                          filterSearch={true} 
                          sorter = {(a, b) => a.name.length - b.name.length}
                          sortDirections = {['descend']}
                          />
                </ColumnGroup>
                <Column title="Type" dataIndex="type" key="type1"/>
                <Column title="Size" dataIndex="size" key="size1" defaultSortOrder='descend' sorter = {(a, b) => a.size - b.size} render={(size) => `${(size / 1024).toFixed(2)} KB`}/>
                <Column title="Сreate Time" dataIndex="atime" key="atime1" render={(atime) => {
                const date = new Date(atime * 1000); 
                const formattedDate = date.toLocaleDateString();
                return formattedDate;
                }} 
                sorter={(a, b) => a.atime - b.atime}/>
                <Column title="Modification Time" dataIndex="mtime" key="mtime1" render={(mtime) => {
                const date = new Date(mtime * 1000); 
                const formattedDate = date.toLocaleDateString();
                return formattedDate;
                }}
                sorter={(a, b) => a.mtime - b.mtime} />
  
              </Table>
            </Card>
            :
            <Table></Table>
            }
         </>
    )
}

export default FolderOne;