const prompt = require('prompt-sync')({sigint: true});

const fishBreed = ['Flounder', 'Trout', 'Goldfish', 'Magikarp']
function fishWeight(){
return Math.floor(Math.random()*10)
}
let bucket = []
let weight = []
function getRandomFish(max){
    return Math.floor(Math.random()* max)
}

const setLine = (prompt('Would you like to set your line [y] for YES and [n] for NO: '))
    if (setLine === 'y'){
        if (getRandomFish(4) == 0){
            bucket.push(fishBreed[0])
            console.log("Congrats you caught a ", fishBreed[0], "that weighs", weight.push(fishWeight()),"pounds")
        }
        else if (getRandomFish(4) == 1){
            bucket.push(fishBreed[1])
            console.log("Congrats you caught a ", fishBreed[1],"that weighs", weight.push(fishWeight()),"pounds")
        }
        else if (getRandomFish(4) == 2){
            bucket.push(fishBreed[2])
            console.log("Congrats you caught a ", fishBreed[2],"that weighs", weight.push(fishWeight()),"pounds") 
        }
        else if (getRandomFish(4) == 3){
            bucket.push(fishBreed[3])
            console.log("Congrats you caught a ", fishBreed[3],"that weighs", weight.push(fishWeight()),"pounds")
        }
        console.log('Your bucket now contains',bucket)
        console.log('Your fish weigh', weight);
        const bucketFish = (prompt('To keep this fish enter [k] to toss back enter [t]'))
            if (bucketFish === 'k'){
                bucket.unshift(fishBreed)
            }
            else{
                console.log(setLine)
            }
}
else{
    console.log('Your bucket contains ',bucket)
    console.log('Your fish weigh ',weight)
}

