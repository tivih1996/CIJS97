import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import PosterHome from './PosterHome'
import WeeklyTop from './WeeklyTop'
import Newrelease from './Newrelease'
import Trending from './Trending'

function Home() {
  return (
    <>
    <Container className='p-0'>
        <Container className='p-0'>
            <PosterHome/>
        </Container>
        <Container id='WeeklyTop'>
            <WeeklyTop />
        </Container>
        <Container id='NewRelease'>
            <Newrelease/>
        </Container>
        <Container id='Trending'>
            <Trending/>
        </Container>
        <Container id='PopularArtis'>

        </Container>
        <Container id='MusicVideo'>

        </Container>
        <Container id='TopAlbums'>

        </Container>
        <Container id='MoodPlaylist'>

        </Container>
    </Container>
    </>
  )
}

export default Home