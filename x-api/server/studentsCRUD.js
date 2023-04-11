const {MongoClient} = require('mongodb');


// initiate connection to MongoDB server
async function connect_to_DB(uri){
    let mongoClient;

    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');

        return mongoClient;
    } catch (err) {
        console.error(err)
        process.exit();
    }
}



// CREATE: create a new student document
async function createNewStudent_document(collection){
    const studentDocument = {
        name: 'John Smith',
        birthdate : new Date(2000, 11, 20),
        address: { street: 'Pike Lane', city: 'Los Angeles', state: 'CA' }
    };
    await collection.insertOne(studentDocument);
}

// READ: find student by name
async function findStudentByName(collection, studentName){
    return collection.find({studentName}).toArray();
}

// UPDATE: edit student data
async function updateStudentByName(collection, name, updatedField){
    await collection.updateMany({name}, {$set: updatedField});
}

// DELETE: permanently remove student document that matches query
async function deleteStudentByName(collection, name){
    await collection.deleteMany({name});
}

// perform CRUD operations on the server
async function performStudent_CRUD(){
    const uri  = process.env.DB_URI;
    let mongoClient;

    try {
        mongoClient = await connect_to_DB(uri);
        const db_name = mongoClient.db('studentsAPI');
        const collection_name = db_name.collection('students');

        // create new student
        // await createNewStudent_document(collection_name);
        
        // edit student birthday data
        // await updateStudentByName(collection_name, 'John Smith', {birthdate: new Date(2001, 5, 5)});
        // console.log(await findStudentByName(collection_name, "John Smith"));

        // find student data from database
        // console.log(await findStudentByName(collection_name, "John Smith"));

        // remove student from database
        // await deleteStudentByName(collection_name, 'John Smith', 'John Smith');
        // console.log(await findStudentByName(collection_name, "John Smith"));
        

    } finally{
        mongoClient.close();
    }
}



// module functions export
module.exports = {
    connect_to_DB, 
    performStudent_CRUD,
    createNewStudent_document,
    findStudentByName,
    updateStudentByName,
    deleteStudentByName
}
