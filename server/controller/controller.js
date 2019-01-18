let boxes = [
    {
        name: "asdf",
        color: "#123456",
        id: 0
    }
];
let id = 0;








module.exports = {
    getAll: function(request, response)
    {
        response.status(200).send(boxes);
    },

    createBox: function(request, response)
    {

    },

    updateBox: function(request, response)
    {

    },

    deleteBox: function(request, response)
    {

    },

}