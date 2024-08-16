import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import PosterHome from './PosterHome'

function Home() {
  return (
    <>
    <Container className='p-0'>
        <Container className='p-0'>
            <PosterHome/>
        </Container>
        <Container id='WeeklyTop'>

        </Container>
        <Container id='NewRelease'>

        </Container>
        <Container id='Trending'>

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