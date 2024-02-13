import express from "express";
import cors from "cors";
import generateID from "./generateID";
import simpleGit from "simple-git";

const app = express();
app.use(cors());
app.use(express.json());

app.post('/deploy', async(req,res)=>{
    const repoUrl = req.body.repoUrl;
    console.log(repoUrl)
    const id = generateID()
    await simpleGit().clone(repoUrl,`./output/${id}`)


    res.json({})
})


app.listen(3000, () => {
  console.log("Server iis running at http://localhost:3000");
});
