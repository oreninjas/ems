const employees_details = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123"
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123"
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123"
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123"
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123"
    }
]

const admin_details = [
    {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
    }
];

const data = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Update Website",
                "description": "Make necessary updates to the company website.",
                "date": "2024-10-20",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Prepare Monthly Report",
                "description": "Compile data and prepare the report for the monthly meeting.",
                "date": "2024-09-30",
                "category": "Reporting"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": true,
                "title": "Conduct Team Training",
                "description": "Organize a training session for the new software.",
                "date": "2024-10-25",
                "category": "Training"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Client Follow-Up",
                "description": "Reach out to clients for feedback on recent projects.",
                "date": "2024-10-15",
                "category": "Client Relations"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Social Media Update",
                "description": "Update social media channels with recent news.",
                "date": "2024-09-29",
                "category": "Marketing"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Budget Review",
                "description": "Review and adjust the budget for the upcoming quarter.",
                "date": "2024-10-30",
                "category": "Finance"
            }
        ]
    }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees_details))
    localStorage.setItem('admin', JSON.stringify(admin_details))
}

export const getLocalStorage = ()=>{
    const employees = localStorage.getItem('employees')
    const admin = localStorage.getItem('admin')

    return {employees, admin}
}