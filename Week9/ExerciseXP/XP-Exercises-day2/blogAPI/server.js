const express = require ('express');

const app = express();



const postsDatabase = [
  {
    id: 1,
    title: "Getting Started with Node.js File System",
    content: "The built-in 'fs' module allows you to closely interact with your computer's files and folders using asynchronous methods..."
  },
  {
    id: 2,
    title: "Understanding JavaScript Array Methods",
    content: "Methods like .find(), .filter(), and .reduce() are essential tools when manipulating and looking up datasets in arrays..."
  },
  {
    id: 3,
    title: "The Difference Between CommonJS and ES Modules",
    content: "While require() and module.exports have powered Node.js for a decade, modern applications rely heavily on standard import and export syntax..."
  },
  {
    id: 4,
    title: "Why Code Modularity Matters",
    content: "Defining distinct modules isolates your codebase logic, keeping variables safely scoped and making your software highly reusable..."
  },
  {
    id: 5,
    title: "Mastering Asynchronous JavaScript",
    content: "Using async/await syntax wraps your promises cleanly, ensuring your code reads like synchronous code while remaining non-blocking..."
  }
];



app.listen(5001, () => {
    console.log('server is listening on port 5001')
})

app.get('/posts', (req, res) => {
    res.json(postsDatabase)
});


app.get('/post/:postID', (req, res) => {
  const id = Number(req.params.postID);
  const post = postsDatabase.find((post) => post.id === id);
  
  if (!post) {
    return res.status(404).send("Post not found");
  }
  res.json(post);

});


app.post('/newpost', (req, res) => {
    // 1. Get data from the request body
    const newPostData = req.body; 

    // 2. Create a new post object 
    const newPost = {
        id: postsDatabase.length + 1,
        title: newPostData.title,
        content: newPostData.content
    };

    // 3. Update your list by pushing the new post
    postsDatabase.push(newPost);

    // 4. Respond with the updated list or the new item
    res.status(201).json({
        message: "Post added!"
    });
});

app.put('/uptadepost/:id', (req, res) => {
    // 1. Get the ID from the URL (convert string to number)
    const requestedId = parseInt(req.params.id); 
    
    // 2. Get the updated data from the request body
    const updatedPost = req.body; 

    // 3. Find the item in your data source
    const postIndex = postsDatabase.findIndex(post => post.id === requestedId);

    // 4. If the item doesn't exist, send a 404 error
    if (postIndex === -1) // .findIndex returs -1 if it didnt find a maatch
    {
        return res.status(404).json({ message: "Post not found" });
    }

    // 5. Overwrite the old item with the new data
    postsDatabase[postIndex] = {
        id: requestedId, 
        ...updatedPost 
    } 

    // 6. Send back the updated item
    res.json({
        message: "Post updated successfully",
    });
});


app.put('/post/delete/:id', (req, res) => {
    const requestedId = parseInt(req.params.id); 
    
   
    const postIndex = postsDatabase.findIndex(post => post.id === requestedId);

    
    if (postIndex === -1) // .findIndex returs -1 if it didnt find a match
    {
        return res.status(404).json({ message: "Post not found" });
    }

    postsDatabase.splice(postIndex, 1);

    res.json({
        message: "Post updated successfully",
    });
});

/// Keep in mind i changed the routes, because it had the same names, bit they all have the same functiionality




