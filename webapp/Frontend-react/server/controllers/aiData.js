const { db } = require("../util/admin");

exports.aiData = async (req, res) => {
    const aiDataRef = db.collection('AIdata');
    try{
            aiDataRef.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))[0];
            console.log(data);
            return res.status(201).json(data);
        })
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }
};