let boxes = [
    {
        name: "",
        color: "",
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
        id++;
        const newBox = {
            name: request.body.name,
            color: request.body.color,
            id: id
        }
        boxes.push(newBox);
        response.status(200).send(boxes)
    },

    updateBox: function(request, response)
    {

    },

    deleteBox: function(request, response)
    {
        boxes = boxes.filter((curVal) =>
        {
            return curVal.id !== parseInt(request.params.id,10);
        })
        response.status(200).send(boxes);
    },

}