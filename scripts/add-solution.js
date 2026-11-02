import fs from 'fs';
import path from 'path';
import process from 'node:process';

const solutionsPath = path.resolve('src/data/solutions.json');
const stagingPath = path.resolve('src/data/new-solution.json');


try{

    const solutionsData = fs.readFileSync(solutionsPath, 'utf8');
    const stagingData = fs.readFileSync(stagingPath, 'utf8');

    const solutions = JSON.parse(solutionsData);
    const newSolution = JSON.parse(stagingData);

    if(!newSolution.title || !newSolution.title.trim()){
        console.error('Error: Please provide a "title" in new-solution.json before running the script.' );
        process.exit(1)
    }

    const maxId = solutions.reduce((max,item) => Math.max(max, item.id), 0);

    const finalSolution = {
        id: newSolution.id = maxId + 1,
        ...newSolution
    }
    

    solutions.push(finalSolution);

    fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));

    const emptyTemplate = {
        title : "",
        language : "javaScript",
        difficulty : "Easy",
        category : "Basic Algorithm Scripting",
        description : "",
        src: "freeCodeCamp",
        approaches : [
            {
                "name" : "Approach 1: ",
                "description" : "",
                "code": ""
            }
        ]
    };

    fs.writeFileSync(stagingPath, JSON.stringify(emptyTemplate, null, 2));

    console.log(`Success! Added "${newSolution.title}" with ID #${newSolution.id} to your solutions library.`);


} catch (error) {
    console.log("Automation failed:", error.message);
}
