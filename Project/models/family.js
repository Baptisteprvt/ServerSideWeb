const mongoose = require('mongoose');

const familySchema = new mongoose.Schema({
    name: String,
    dob: String,
    imageurl: String,
    hobbies: [String]
})

const Family = mongoose.model('Family', familySchema)


readFamily = async (options = {}) => {
    if (Object.entries(options).length == 0)
        return Family.find().lean();

    else if (options.name)

        return Family.findOne(options).lean();

    else
        return undefined;

}

createFamily = async (data) => {
    let familyDoc = new Family(data);
    await familyDoc.save();
}


deleteFamily = async (name) => {
    const family = await Family.findOne({ name: name });
    await family.remove();

}

updateFamily = async (data) => {
    var id = data._id;
    console.log(id);
    console.table(data)
    await Family.findByIdAndUpdate({_id: id}, {...data})
}


exports.readFamily = readFamily;
exports.createFamily = createFamily;
exports.deleteFamily = deleteFamily;
exports.updateFamily = updateFamily;