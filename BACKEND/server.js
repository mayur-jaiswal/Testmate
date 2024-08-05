const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const testRoutes = require('./routes/testRoutes');
const attemptRoutes = require('./routes/attemptRoutes');
const { Question, Option } = require('./models');


require('dotenv').config({ path: './.env' })

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const fileUpload = require("express-fileupload");
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

//cloud se connect karna
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/users', testRoutes);
app.use('/api/users', attemptRoutes);


const PORT = process.env.PORT || 8000;

// sequelize.sync()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// Sync database
(async () => {
  try {
    await sequelize.sync({ alter: true }); // Sync database with alter:true to update schema without dropping tables
    console.log('Database synced!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

