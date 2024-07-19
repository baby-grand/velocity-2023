import * as React from 'react';
import p33 from "../data/p33-content"
// define the content type
// Render content from the p33-content.tsx file
const Html = ({ ...props }) => {
    const content = props.content;
    let styleString = '';
    // convert the style object into a string
    if (props.style) {
        for (let [key, value] of Object.entries(props.style)) {
            // convert camelCase to kebab-case
            key = key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
            // convert numbers to px
            if (typeof value === 'number') {
                value = value + 'px';
            }
            styleString += key + ':' + value + ';';
        }
    }
    // create the opening and closing tags
    let tag = ['<' + props.tag + ' style="' + styleString + '">', '</' + props.tag + '>'];
    if (!props.tag) {
        tag = ['', ''];
    }
    // get classname as string
    let className = p33[content]['className'].toString();
    // convert kebab-case to camelCase
    className = className.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    // render the content
    if (props.title) {
        return <div
            dangerouslySetInnerHTML={{ __html: tag[0] + p33[content]['title'] + tag[1] }}
            className={className}
        />;
    } else {
        return <div
            dangerouslySetInnerHTML={{ __html: tag[0] + p33[content]['content'] + tag[1] }}
            className={className}
        />;
    }
}
export default Html;