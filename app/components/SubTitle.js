import React from 'react'

const SubTitle = ({ text, description, classes }) => {
    return (
        <div className={`title ${classes || ''}`} >
            <h2 dangerouslySetInnerHTML={{ __html: text }} />
            {
                description && <p>{description}</p>
            }
        </div>
    )
}

export default SubTitle