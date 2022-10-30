import React from "react";
import { useNavigate } from "react-router-dom/dist/index.js";
import { BackgroundImage, Body, DirectoryContainer } from './directory-item.styles.jsx';

const DirectoryItem = ({ category: { title, imageUrl, route } }) => {
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route)
    return (
        <DirectoryContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryContainer>
    )
}

export default DirectoryItem;