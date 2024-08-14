import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fecthAllUserArtis } from '../service/UserService';


function ListArtis() {
    const [listArtis, setListArtis] = useState([])
    useEffect(() => {
        getAllUserArtis()
    }, [])

    const getAllUserArtis = async () => {
        let res = await fecthAllUserArtis();
        if (res && res.data) {
            setListArtis(res.data)
        }
        console.log(res)
    }
    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên nghệ sĩ </th>
                        <th>Email</th>
                        <th>Số bài hát</th>
                        <th>Số bài hát</th>
                    </tr>
                </thead>
                <tbody>
                    {listArtis.map((item) => (
                        <tr key={`${item.name}${item.id}`}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.songs}</td>
                            <td>{item.albums}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default ListArtis