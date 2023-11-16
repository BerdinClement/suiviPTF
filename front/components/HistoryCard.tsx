import React from 'react';

interface HistoryCardProps {
    date: string;
    title: string;
    content: string;
}

const HistoryCard = ({date, title, content}:HistoryCardProps) => {
    return (
        <div className={`flex rounded-lg w-72 bg-grey`}>
            <div className="flex flex-1 bg-grey p-2 rounded-lg">
                <div className="flex flex-col">
                    <h3 className="text-sm">{date}</h3>
                    <h1 className="text-xl">{title}</h1>
                    <h3 className="text-sm">{content}</h3>
                </div>
            </div>
        </div>
    )
}

export default HistoryCard;