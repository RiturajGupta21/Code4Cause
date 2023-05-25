import React from "react";

const SocialIcons = ({ Icons }) => {
    return (
        <div className="text-teal-500">
            {Icons.map((icon) => (
                <span key={icon.name} className="cursor-pointer inline-flex items-center rounded-full mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300 " >
                    <a href={icon.link}><ion-icon name={icon.name}></ion-icon></a>
                </span>
            ))}
        </div>
    );
};

export default SocialIcons;
