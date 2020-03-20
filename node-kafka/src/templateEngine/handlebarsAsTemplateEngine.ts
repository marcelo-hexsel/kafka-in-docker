import Handlebars from "handlebars";

const eventContent = {
    id: 123456,
    description: "Bourbon Country",
    active: true,
    address: {
        street: "João Wallig",
        streetType: "Av",
        number: 844,
        city: "Porto Alegre",
        state: "RS",
        zipCode: "92480000"
    },
    numberField1: 10,
    numberField2: 15,
    numberField3: 20,
    items: [
        {
            id: 100,
            description: "Coca-Cola",
            price: 2.50,
            discount: 0.30
        },
        {
            id: 101,
            description: "Pepsi",
            price: 2.30
        },
        {
            id: 102,
            description: "Mirinda",
            price: 0.90
        }
    ]
};

const templateJSON = `{
    "identificador": {{id}},
    "descricao": {{description}},
    "items": [
        {{#each items}}
        {
            "identificador": {{id}},
            "descricaoItem": {{description}},
            "totalItem": {{math price '-' discount}}
        }
        {{/each}}
    ],
    "grandTotal": {{sum items "price"}}
}`;

//Custom Math operations example
Handlebars.registerHelper("math", (partOne, operator, partTwo) => {
    return eval(`${Number(partOne || 0)} ${operator} ${Number(partTwo || 0)}`);
});

//Custom aggregations example
Handlebars.registerHelper("sum", (collection, field) => {
    let total = 0;
    collection.forEach((item) => {
        total += Number(item[field] || 0);
    });
    return total;
});

export default () => {
    const compiledTemplate = Handlebars.compile(templateJSON);
    console.log(compiledTemplate(eventContent));
};