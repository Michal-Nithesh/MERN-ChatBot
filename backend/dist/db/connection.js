import { connect, disconnect } from 'mongoose';
export default async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log('Error connecting to the database: ', error);
        throw new Error('Error connecting to the database');
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log("error");
        throw new Error("Could not Disconnect from MongoDB");
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map