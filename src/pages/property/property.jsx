import React, { useEffect } from 'react'
import './property.css'
import Gallery from '../../components/gallery/gallery'
import Card from '../../components/card/Card'
import SideFilter from '../../components/side-filter/SideFilter';

export default function Property() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const contentList = [];
    for (let index = 0; index < 20; index++) {
        contentList.push({
            title: 'title ' + index,
            content: 'content ' + index,
            image_url: 'url' + index
        });
    }

    return (
        <div className="content-layout p-6">
            <div className="filter-content col-3">
                <SideFilter />
            </div>
            <div className="main-content max-h-100-px scroll-y p-4">
                {contentList.map((element, index) => (
                    <Card key={index} title={element.title} content={element.content} image_url={element.image_url} />
                ))}
            </div>
        </div>
    )
}
