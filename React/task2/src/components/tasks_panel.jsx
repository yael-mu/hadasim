import React from 'react';

export default function TasksPanel({ selectedMemberId, tasks, setTasks }) {

    if (selectedMemberId === null) {
        return <>
            <div className="tasks-panel">
                <h2>Tasks</h2>
                <p>Select a member...</p>
            </div>
        </>
    }

    const memberTasks = tasks.filter(
        task => task.assignedTo === selectedMemberId
    );

    if (memberTasks.length === 0) {
        return <>
            <div className="tasks-panel">
                <h2>Tasks</h2>
                <p>No tasks yet</p>
            </div>
        </>
    }

    return <>
        <div className="tasks-panel">
            <h2>Tasks</h2>

            {memberTasks.map(task => (
                <div key={task.id} className="task-item">
                    <input
                        type="checkbox"
                        checked={task.done}
                    />
                    <span>{task.title}</span>
                </div>
            ))}
        </div>
    </>
}