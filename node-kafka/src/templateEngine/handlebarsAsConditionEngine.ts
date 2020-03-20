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

const conditionWithString = "\"{{description}}\".includes('Country')";
const conditionWithBoolean = "{{active}} === false";
const conditionWithMathExpression = "{{math numberField1 '+' numberField2}} > 20";

Handlebars.registerHelper("math", (partOne, operator, partTwo) => {
    return eval(`${Number(partOne || 0)} ${operator} ${Number(partTwo || 0)}`);
});

export default () => {
    console.log(eval(Handlebars.compile(conditionWithString)(eventContent)));
    console.log(eval(Handlebars.compile(conditionWithBoolean)(eventContent)));
    console.log(eval(Handlebars.compile(conditionWithMathExpression)(eventContent)));
};