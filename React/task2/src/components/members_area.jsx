import React from 'react'

export default function MembersArea({ member }) {

    const initials = member.name
        .split(" ")
        .map(word => word[0])
        .join("");

    const roleColors = {
        Leader: "blue",
        Member: "green",
        Guest: "purple"
    };

    return <>
        <article className='profile-card'>
            <div className='avatar'>
                {initials}
            </div>
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            <button style={{ backgroundColor: roleColors[member.role] }} disabled={!member.isActive}>
                {member.role}
            </button>
        </article>
    </>
}
