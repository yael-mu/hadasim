import React, { useState } from 'react'
import MembersArea from './members_area';

export default function FilterBar() {
    const [showOnlyActive, setShowOnlyActive] = useState(false);
    const [layout, setLayout] = useState("list");
    const members = [
        {
            id: 1,
            name: "Daniel Cohen",
            role: "Leader",
            isActive: true
        },
        {
            id: 2,
            name: "Sarah Levi",
            role: "Member",
            isActive: true
        },
        {
            id: 3,
            name: "David Mizrahi",
            role: "Member",
            isActive: false
        },
        {
            id: 4,
            name: "Rachel Goldberg",
            role: "Guest",
            isActive: true
        },
        {
            id: 5,
            name: "Michael Rosen",
            role: "Leader",
            isActive: false
        },
        {
            id: 6,
            name: "Noa Friedman",
            role: "Guest",
            isActive: true
        }
    ];
    const filteredMembers = showOnlyActive
        ? members.filter(member => member.isActive)
        : members;

    return <>
        <div>
            <input
                type="checkbox"
                checked={showOnlyActive}
                onChange={(e) => setShowOnlyActive(e.target.checked)}
            />
            <label>Show only active members</label>

            <button onClick={() => setLayout("list")}>
                List
            </button>
            <button onClick={() => setLayout("grid")}>
                Grid
            </button>
            <div className={layout}>
                {filteredMembers.map(member => (
                    <MembersArea member={member}/>
                ))}
            </div>
        </div>
    </>
}