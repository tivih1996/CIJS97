import React from 'react';
import '../../src/App.scss';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

function Trending() {
    const data = [{
        nameSong: 'Skyfall Beats',
        artis: 'Nightmares',
        imgLink: 'https://github.com/tivih1996/CIJS97/blob/master/melodies/src/image/Trending/The_Neighbourhood_-_The_Neighbourhood%202.png?raw=true',
        likes: 8000,
        relaseday: '04/10/2023',
        album: 'nightmares',
        time: '2:45'
    },
    {
        nameSong: 'Softcore',
        artis: 'The Neighbourhood',
        imgLink: 'https://github.com/tivih1996/CIJS97/blob/master/melodies/src/image/Trending/The_Neighbourhood_-_The_Neighbourhood%201.png?raw=true',
        likes: 9000,
        relaseday: '04/10/2023',
        album: 'Hard to Imagine the Neighbourhood Ever Changing',
        time: '3:26'

    },
    {
        nameSong: 'Greedy',
        artis: 'tate mcrae',
        imgLink: 'https://github.com/tivih1996/CIJS97/blob/master/melodies/src/image/Trending/The_Neighbourhood_-_The_Neighbourhood%203.png?raw=true',
        likes: 7000,
        relaseday: '30/12/2023',
        album: 'Greedy',
        time: '2:11'
    },
    {
        nameSong: 'Lovin On me',
        artis: ' jack harlow',
        imgLink: 'https://github.com/tivih1996/CIJS97/blob/master/melodies/src/image/Trending/The_Neighbourhood_-_The_Neighbourhood%204.png?raw=true',
        likes: 6000,
        relaseday: '30/12/2023',
        album: 'Lovin On me',
        time: '2:18'
    },
    {
        nameSong: 'pain the town red',
        artis: 'Doja Cat',
        imgLink: 'https://github.com/tivih1996/CIJS97/blob/master/melodies/src/image/Trending/The_Neighbourhood_-_The_Neighbourhood%206.png?raw=true',
        likes: 5000,
        relaseday: '29/12/2023',
        album: 'Paint The Town Red',
        time: '3:51'
    }]
    return (

        <>
            <h1 className='mt-5 mb-4' style={{ color: 'white', fontSize: '32px' }} >Trending <span style={{ color: 'rgba(238, 16, 176, 1)' }}>Songs</span> </h1>
            <Table  style={{color:'white', borderSpacing:'0px'}}  >
                <thead className='text-center' style={{color:'white'}} >
                    <tr >
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Release Date</th>
                        <th>Album</th>
                        <th></th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody className='border-0 align-middle text-center'>
                    {data.map((item, idx) => (
                        <tr key={`${item.nameSong}`}>
                            <td>{`#${idx + 1}`}</td>
                            <td>
                            <Image src={item.imgLink} rounded />
                            </td>
                            <td className='text-start'>
                                <h6>{item.nameSong}</h6>
                                <span>{item.artis}</span>
                            </td>
                            <td>{item.relaseday}</td>
                            <td>{item.album}</td>
                            <td><FontAwesomeIcon icon={faHeart} /></td>
                            <td>{item.time}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Trending