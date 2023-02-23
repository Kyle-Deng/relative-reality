import React from 'react';
import withPageLayout from "../../hocs/withPageLayout";

function Init() {
    const content = (
        <div>
            <article className="article">
                <h1>Hello, machine</h1>
            </article>
        </div>
    );
    return (
        withPageLayout(content)
    )
}
export default Init;