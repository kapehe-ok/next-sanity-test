import React from 'react';

const Column = ({ title, icon, description }) => {
    return (
        <div>
            <h2>{title}</h2>
            {icon}
            <p>{description}</p>
        </div>
    );
};

const columnsData = [
    { title: "Mobile", icon: "", description: "Description for Mobile section." },
    { title: "Web", icon: "", description: "Description for Web section." },
    { title: "Machine Learning", icon: "", description: "Description for Machine Learning section." },
];

export default function WhyMe() {
    return (
        <div>
            <h1>Why Me?</h1>
            <div className="grid grid-cols-3 gap-4">
                {columnsData.map((data, index) => (
                    <Column key={index} title={data.title} icon={data.icon} description={data.description} />
                ))}
            </div>
        </div>
    );
}