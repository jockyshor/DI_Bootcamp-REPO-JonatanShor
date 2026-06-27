import { getAllBlogs, getOneBlog, createNewBlog, updateBlog, deleteBlog } from "../models/blogmodels.js";

export async function getBlogs(req, res){
    try {
        const results = await getAllBlogs();
        res.json(results.rows)
    } catch (error) {
        console.error(error);
        res.status(404).json({message: "not found"})
    }
}

export async function getSpecificBlog(req, res){
    const { id } = req.params;
    
    if (!id) {
        return res.status(400).json({ error: "ID is required..." });
    }


    try {
        const result = await getOneBlog(id);
        res.status(202).json(result.rows)
        
    } catch (error) {
         console.error(error);
        res.status(404).json({message: 'blog not found' })
    }
}

export async function createBlog(req, res){
    const { title, content } = req.body;
    try {
        const result = await createNewBlog(title, content)
        res.status(202).json(result.rows)
        
    } catch (error) {
        console.error(error);
        res.status(404).json({message: 'something went wrong' })
        
    }
}

export async function updateThisBlog(req, res){
     const { id } = req.params;
     const { content } = req.body;

     if (!id || !content) {
        return res.status(400).json({ error: "ID  and Content are required..." });
    }

    try {
        const result = await updateBlog(id, content);
        res.status(202).json(result.rows)
    } catch (error) {
        console.error(error);
        res.status(404).json({message: 'There seems to be a problem' })
    }
}


export async function deleteSpecificBlog(req, res){
    const { id } = req.params;
    
    if (!id) {
        return res.status(400).json({ error: "ID is required..." });
    }


    try {
        const result = await deleteBlog(id);
        res.status(202).json(result.rows)
        
    } catch (error) {
         console.error(error);
        res.status(404).json({message: 'blog not found' })
    }
}