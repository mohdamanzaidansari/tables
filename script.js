let showMin = true;
let table = document.getElementById('active_table');
let employees = [
    {
        "id": "1",
        "firstname": "Ankit",
        "lastname": "Mittal",
        "email": "test@.com",
        "phone": "9876543210",
        "imageUrl": "https://picsum.photos/seed/picsum/200/300",
        "offerPrice": [
            {
                "id": "2",
                "title": "abc",
                "amount": 10000,
            },
            {
                "id": "3",
                "title": "def",
                "amount": 20000,
            },
            {
                "id": "3",
                "title": "def",
                "amount": 500,
            },
        ]
    },
    {
        "id": "2",
        "firstname": "Sarthak",
        "lastname": "Sethia",
        "email": "test@.com",
        "phone": "9876543210",
        "imageUrl": "https://picsum.photos/seed/picsum/200/300",
        "offerPrice": [
            {
                "id": "2",
                "title": "abc",
                "amount": 45000,
            },
            {
                "id": "3",
                "title": "def",
                "amount": 15000,
            },
            {
                "id": "3",
                "title": "def",
                "amount": 20000,
            },
        ]
    },
    {
        "id": "3",
        "firstname": "abc",
        "lastname": "def",
        "email": "test@.com",
        "phone": "9876543210",
        "imageUrl": "https://picsum.photos/seed/picsum/200/300",
        "offerPrice": [
            {
                "id": "2",
                "title": "abc",
                "amount": 3000,
            },
            {
                "id": "3",
                "title": "def",
                "amount": 5000,
            },
            {
                "id": "3",
                "title": "def",
                "amount": 10000,
            },
        ]
    },
];

employees = employees.map(employee => {
    const upDatedEmployee = { ...employee };
    upDatedEmployee.minAmount = employee.offerPrice.sort((a, b) => a.amount - b.amount)[0].amount;
    upDatedEmployee.maxAmount = employee.offerPrice.sort((a, b) => b.amount - a.amount)[0].amount;
    return upDatedEmployee;
});


let filteredEmployees = [...employees];

const removeEmployee = (id) => {
    employees = employees.filter(employee => employee.id !== id.toString());
    filteredEmployees = filteredEmployees.filter(employee => employee.id !== id.toString());
    renderTable(filteredEmployees);
}

const toggleAmount = () => {
    showMin = !showMin;
    renderTable(filteredEmployees);
}

const filterhandler = event => {
    filteredEmployees = employees.filter(employee => (employee.firstname + employee.lastname).toLowerCase().includes(event.target.value.toLowerCase()));
    renderTable(filteredEmployees);
}

const renderTable = (rendrableEmployees) => {
    table.innerHTML = '';
    rendrableEmployees.forEach((employee, index) => {
        table.innerHTML +=
            `<tr id=${employee.id}>
                    <td>${index}</td>
                    <td>
                        <figure class="table_avatar">
                            <img src=${employee.imageUrl} alt=${employee.firstname + ' ' + employee.lastname} />
                        </figure>
                    </td>
                    <td>${employee.firstname + ' ' + employee.lastname}</td>
                    <td>${employee.email}</td>
                    <td>${employee.phone}</td>
                    <td>${showMin ? employee.minAmount : employee.maxAmount}</td>
                    <td><i class="fa fa-trash-o" style="font-size:24px" onclick="removeEmployee(${employee.id})"></i>
                    </td>
                </tr>`;
    })
}

renderTable(filteredEmployees);