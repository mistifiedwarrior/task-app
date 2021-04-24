require('./src/db/connect');
const User = require('./src/model/user.js');

// create operation =============

const user = new User({
  name: 'Aditi',
  username: 'aditigupta',
  email: 'aditi@gmail.com',
});

const createUser = async () => {
  await user
    .save()
    .then(() => {
      console.log('successfully saved');
    })
    .catch((error) => console.log(error));
};
createUser();

//read operation ===============
// const readUser = async () => {
//   const user = await User.findOne({name: 'Aditi'});
//   console.log(user);
// };
// readUser();

//update operation =============
// const updateUser = async () => {
//   await User.findOneAndUpdate({name: 'Aditi'}, {name: 'Aditi Gupta'});
// };
// updateUser().then(() => console.log('updated successfully'));

//Delete operation ==============
// const deleteUser = async () => {
//   const user = await User.findOneAndDelete({name: 'Aditi Gupta'});
//   console.log(user);
// };
// deleteUser();
