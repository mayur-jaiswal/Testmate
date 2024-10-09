// Import necessary modules
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const db = require("./config/database"); // Adjust path as necessary for your project structure
const sequelize = require("./config/database"); // Import your Sequelize database connection
const userRoutes = require("./routes/userRoutes");
const testRoutes = require("./routes/testRoutes");
const attemptRoutes = require("./routes/attemptRoutes");
const cloudinary = require("./config/cloudinary");
const teacherRoutes = require("./routes/teacherRoutes");
const bcrypt = require("bcrypt");
require("dotenv").config({ path: "./.env" });

const app = express();

// Middleware setup
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend origin
    credentials: true, // Allow credentials (cookies) to be sent
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Cloudinary setup
cloudinary.cloudinaryConnect();

// Define API endpoints for teacher management
app.get("/api/teachers", async (req, res) => {
  try {
    const teachers = await db.query(
      'SELECT * FROM users WHERE role = "teacher"'
    );
    res.json(teachers[0]); // Assuming db.query returns an array where the first element is the result
  } catch (error) {
    console.error("Error fetching teachers:", error);
    res.status(500).json({ message: "Failed to fetch teachers" });
  }
});

app.post("/api/teachers", async (req, res) => {
  try {
    const { name, email, username, password, branch } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const newTeacher = await db.query(
      "INSERT INTO users (name, email, username, password, role, branch) VALUES (?, ?, ?, ?, ?, ?) RETURNING *",
      [name, email, username, hashedPassword, "teacher", branch]
    );

    res.status(201).json(newTeacher[0]); // Return the newly created teacher
  } catch (error) {
    console.error("Error adding teacher:", error);
    res.status(500).json({ message: "Failed to add teacher" });
  }
});

app.delete("/api/teachers/:id", async (req, res) => {
  try {
    const teacherId = req.params.id;
    await db.query("DELETE FROM users WHERE id = ? AND role = ?", [
      teacherId,
      "teacher",
    ]);
    res.json({ message: "Teacher deleted successfully" });
  } catch (error) {
    console.error("Error deleting teacher:", error);
    res.status(500).json({ message: "Failed to delete teacher" });
  }
});

// Other API routes
app.use("/api", userRoutes);
app.use("/api", testRoutes);
app.use("/api", attemptRoutes);
app.use("/api/teacherRoutes", teacherRoutes);

// Sync database
// (async () => {
//     try {
//         await sequelize.sync({ alter: true }); // Sync database with alter:true to update schema without dropping tables
//         console.log('Database synced!');
//     } catch (error) {
//         console.error('Error syncing database:', error);
//     }
// })();

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
