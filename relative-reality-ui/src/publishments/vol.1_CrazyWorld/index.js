import React from 'react';
import withPageLayout from "../../hocs/withPageLayout";
import styles from './styles.css';

function CrazyWorld() {
    const content = (
        <div>
            <article className="article">
                <h1>What a crazy world we're living in</h1>
                <div className="author">
                    <span className="name">dakezi</span>
                    <span> 2022-05-26</span>
                </div>
                <p>We connect our minds through the network, but never does the pain.</p>
            </article>
        </div>
    );
    return (
        withPageLayout(content)
    )
}

export default CrazyWorld;