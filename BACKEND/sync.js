// sync.js
const { sequelize, Question, Option,Response} = require('./models');

(async () => {
  try {
    await sequelize.sync({ alter: true }); // Use 'alter: true' to update the schema without dropping tables
    console.log('Database synced!');
    
    // Verify associations
    console.log('Associations:', Question.associations, Option.associations, Response.associations);
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();
