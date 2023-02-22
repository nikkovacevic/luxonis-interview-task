const formatTitle = (title: string) => {
    return capitalize(title.slice(9))
};

export default formatTitle;

const capitalize = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}