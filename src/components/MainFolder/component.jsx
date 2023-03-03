import { Table } from "antd";
import { FolderTwoTone } from '@ant-design/icons';
import Column from "antd/es/table/Column";
import ColumnGroup from "antd/es/table/ColumnGroup";
import { useNavigate } from "react-router-dom";

const MainFolder = () =>{
    const navigate = useNavigate();

    const data  = [
        {
            key: '1',
            name: 'Folder1',
            type: 'folder',
            size: null,
            atime: null,
            mtime: null,
        },
        {
            key: '2',
            name: 'Folder2',
            type: 'folder',
            size: null,
            atime: null,
            mtime: null,
        },
        {
            key: '3',
            name: 'Folder3',
            type: 'folder',
            size: null,
            atime: null,
            mtime: null,
        },
      ];

    return(
        <>
            <h1>Files</h1>
                <Table dataSource={data} onRow={(record) => {
                        return {
                        onClick: () => {
                            navigate(`/folder${record.key}`)
                        },
                        };
                    }}>
                    <ColumnGroup title="" >
                                <Table.Column
                                    title=""
                                    dataIndex="icon"
                                    key="icon"
                                    align="right"
                                    width="5%"
                                    render={ () => (
                                        <FolderTwoTone style={{ fontSize: '30px', color: '#08c' }} />
                                    )}
                                />
                            <Column title="Name" dataIndex="name" key="name"/>
                    </ColumnGroup>
                    <Column title="Type" dataIndex="type" key="type"/>
                    <Column title="Size" dataIndex="size" key="size"/>
                    <Column title="atime" dataIndex="atime" key="atime"/>
                    <Column title="mtime" dataIndex="mtime" key="mtime"/>
                </Table>
        </>
    )
}

export default MainFolder;