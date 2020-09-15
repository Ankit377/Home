import React from 'react';
import Player from "./Player"
import ButtonAppBar from './ButtonAppBar';



export default function EnglishCourse() {

    return (
        <>
            <ButtonAppBar title="English Crash Course" />
            <Player title="1. Introduction" url="https://www.youtube.com/watch?v=ysz5S6PUM-U" width='100%'
            />
            <Player title="2. Tense" url="https://www.youtube.com/watch?v=ysz5S6PUM-U" width='100%'
            />
        </>
    );
}
