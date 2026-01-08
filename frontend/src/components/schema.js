// Array of Simple Types (String, Number, etc.)
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  hobbies: [String], 
  scores: [Number], 
});

const User = mongoose.model('User', userSchema);

// Example of inserting
const user = new User({
  name: "Oluwagbenga",
  hobbies: ["coding", "reading", "traveling"],
  scores: [90, 85, 88]
});

user.save();

// Array of Subdocuments
const userSchema = new mongoose.Schema({
  name: String,
  addresses: [
    {
      street: String,
      city: String,
      country: String
    }
  ]
});

const User = mongoose.model('User', userSchema);

// Example
const user = new User({
  name: "Gbenga",
  addresses: [
    { street: "12 Unity Road", city: "Lagos", country: "Nigeria" },
    { street: "45 Peace Ave", city: "Abuja", country: "Nigeria" }
  ]
});

user.save();


// Array of ObjectIds (References to Other Documents)
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});

const userSchema = new mongoose.Schema({
  name: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

const Post = mongoose.model('Post', postSchema);
const User = mongoose.model('User', userSchema);

// Example
async function createData() {
  const post1 = await Post.create({ title: "First Post", content: "Hello world" });
  const post2 = await Post.create({ title: "Second Post", content: "Another one" });

  const user = await User.create({
    name: "Oluwagbenga",
    posts: [post1._id, post2._id]
  });

  console.log("User saved:", user);
}

// Mixed Array (Flexible Data)
const userSchema = new mongoose.Schema({
  data: [mongoose.Schema.Types.Mixed]
});

const User = mongoose.model('User', userSchema);

const user = new User({
  data: ["string", 123, { key: "value" }]
});
user.save();


// Array With Enum Constraint
const userSchema = new mongoose.Schema({
  roles: {
    type: [String],
    enum: ["student", "teacher", "admin"]
  }
});


// Array With Default Values
const productSchema = new mongoose.Schema({
  categories: {
    type: [String],
    default: ["general"]
  }
});
