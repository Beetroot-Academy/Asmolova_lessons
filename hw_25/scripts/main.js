var playList = [

    {
    
     author: "LED ZEPPELIN",
    
     song:"STAIRWAY TO HEAVEN"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"BOHEMIAN RHAPSODY"
    
    },
    
    {
    
     author: "LYNYRD SKYNYRD",
    
     song:"FREE BIRD"
    
    },
    
    {
    
     author: "DEEP PURPLE",
    
     song:"SMOKE ON THE WATER"
    
    },
    
    {
    
     author: "JIMI HENDRIX",
    
     song:"ALL ALONG THE WATCHTOWER"
    
    },
    
    {
    
     author: "AC/DC",
    
     song:"BACK IN BLACK"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"WE WILL ROCK YOU"
    
    },
    
    {
    
     author: "METALLICA",
    
     song:"ENTER SANDMAN"
    
    }
    
];


function AddPlayList(list) {
    const player = document.getElementsByClassName('playlist-section');
    const songList = document.createElement('ol');
    player[0].append(songList);
    
    for (let i in playList) {
        const songListBlock = document.createElement('li');
        songListBlock.innerHTML = `${list[i].author} - ${list[i].song}`;
        songList.append(songListBlock);
    }

}

AddPlayList(playList);



// task_2


let openBtn = document.querySelector('.btn');
let closeBtn = document.querySelector('.mymodal__close');
let modal = document.querySelector('.mymodal');

openBtn.addEventListener('click', function() {
    modal.classList.add('active');
});

closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
});



//task_3

let redColor = document.querySelector('.red');
let yellowColor = document.querySelector('.yellow');
let greenColor = document.querySelector('.green');
let score = 0;

function start() {
    if (score === 0) {
        redColor.classList.toggle('active');
        score++
        return;
    }
    else if (score === 1) {
        redColor.classList.toggle('active');
        yellowColor.classList.toggle('active');
        score++
        return;
    }
    else if (score === 2) {
        yellowColor.classList.toggle('active');
        greenColor.classList.toggle('active');
        score++
        return;
    }
    else if (score === 3) {
        greenColor.classList.toggle('active');
        yellowColor.classList.toggle('active');
        score ++;
        return;
    }
    else {
        yellowColor.classList.toggle('active');
        score = 0;
        return
    }
}