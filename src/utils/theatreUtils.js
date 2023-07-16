

const Columns = [
    {
        name: "name",
        lable : "Theatre Name",
        options: {
            filter : "true",
            sort : "true",
        }
    },

    {
        name: "description",
        lable : "Description",
        options: {
            filter : "true",
            sort : "true",
        }
    },

    {
        name: "city",
        lable : "City",
        options: {
            filter : "true",
            sort : "true",
        }
    },

    {
        name: "pinCode",
        lable : "PinCode",
        options: {
            filter : "true",
            sort : "true",
        }
    },


];

const options =  {
    filterType :'checkbox',
}
export default TheatreTableMetaData = {Columns, options};