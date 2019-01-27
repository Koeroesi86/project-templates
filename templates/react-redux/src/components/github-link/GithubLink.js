import React from 'react'
import GithubImage from './images/github.png'

export function GithubLink() {
    return (
        <a
            href="https://github.com/Koeroesi86"
            target="_blank"
            rel="noopener noreferrer"
            className="App-github-link"
            title="Visit my Github"
        >
            <img
                src={GithubImage}
                className="App-github-link-image"
                alt="Github"
            />
        </a>
    );
}