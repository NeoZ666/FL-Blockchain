const { db } = require('../util/admin');
const admin = require('firebase-admin');

const data = {
  Price: 10000,
  Days: 314523,
  Deadline: 3554252,
};

const aiDataRef = db.collection('AIdata');

exports.getAIData = async (req, res) => {
  try {
    aiDataRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))[0];
      console.log(data);
      return res.status(201).json(data);
    });
  } catch (err) {
    return res
      .status(500)
      .json({ ERROR: err, general: 'Something went wrong, please try again' });
  }
};

exports.postAIData = async (req, res) => {
  try {
    // Extract data from the request body
    const { Price, Days, Deadline } = req.body;

    // Create an object with the new data
    const newData = {
      Price,
      Days,
      Deadline
    };
    
    const dataSent = await aiDataRef.add(newData);

    console.log('Data sent:', dataSent);
    console.log('POST REQ:', Price, Days, Deadline);

    // Send a success response with the newly added data
    res.status(201).json({
      message: 'success',
      data: {
        newData 
      }
    });
  } catch (err) {
    return res.status(500).json({
      ERROR: err,
      general: 'Something went wrong, please try again'
    });
  }
};


