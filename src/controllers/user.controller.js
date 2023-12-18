const soma = (req, res) => {
    const soma = 10 + 1;

    res.json({soma: soma});
};

module.exports = {soma};