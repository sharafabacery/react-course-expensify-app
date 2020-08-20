export default    (expenses) => {
    if (!expenses.length) {
        return 0
    }
    return expenses
    .map((expense) => expense.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

}