function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = ' text-danger'
        document.getElementById('response-img').src = '#BAD/BROKENIMAGE' //FIX THIS LTR// 
        return
    }

    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }
    const randomNumber = Math.floor(Math.random()*8); 
    let answer, image, color; 

    switch (randomNumber){ 
        case 0: 
            answer = "Yes";
            image = "yes-image.jpg" //change this!//;
            color = "text-success"; 
            break; 
        case 1: 
            answer = "No";
            image = "no-image.jpg" //change this!//;
            color = "text-danger"; 
            break; 
        case 2: 
            answer = "Ask again later"; 
            image = "askagainlater-image.jpg" //change this!//; 
            color = "text-secondary";
            break; 
        case 3: 
            answer = "Maybe";
            image = "maybe-image.jpg" //change this!//;
            color = "text-warning"; 
            break; 
        case 4: 
            answer = "Cannot predict now";
            image = "cannotpredict-image.jpg" //change this!//;
            color = "text-muted"; 
            break; 
        case 5: 
            answer = "Don't count on it";
            image = "don't-count-on-it-image.jpg" //change this!//;
            color = "text-danger"; 
            break; 
        case 6: 
            answer = "Not likely";
            image = "not-likely-image.jpg" //change this!//;
            color = "text-danger"; 
            break; 
        case 7: 
            answer = "Without a doubt";
            image = "without-a-doubt-image.jpg" //change this!//;
            color = "text-success"; 
            break; 
    }

    const responseText = document.getElementById('response-text'); 
    responseText.innerText = answer; 
    responseText.classList = `display-4 ${color}`; 
    document.getElementById('response-image').src = image; 
}