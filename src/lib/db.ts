import mongoose from 'mongoose';

let isConnected: boolean = false; 

export const connectToDB = async () =>{
    mongoose.set('strictQuery', true);
    if (!process.env.MONGODB_URI) 
    return console.log("Missing MongoDB URL");

    if(isConnected){
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI as string, {
            dbName: "empowher",
        })
        isConnected = true;
        console.log("MongoDB connected");
    }catch(error){
        console.log(error);

    }
}