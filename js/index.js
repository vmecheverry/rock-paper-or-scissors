const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const user_selected_dection =document.getElementById("user_selected_dection");
const cpu_selected_dection =document.getElementById("cpu_selected_dection");
const restart =document.getElementById("restart");
const choices = ['rock', 'paper', 'scissors'];
let cpu_choice=0;
const user_results_spam = document.getElementById("user_results");
const cpu_results_spam = document.getElementById("cpu_results");
const round_spam = document.getElementById("round");
const board_spam = document.getElementById("board");
let user_results =0
let cpu_results = 0
let random=1;
let round=0;
function game() {
 rock.addEventListener('click', function() {
        play_game(0);
    })
    
    paper.addEventListener('click', function() {
        play_game(1);
    })
    
    scissors.addEventListener('click', function() {
        play_game(2);
    })

    restart.addEventListener('click', function() {
        window.location.reload(true);
    })
  }

  function play_game(user_value){
    round++;  
    round_spam.innerHTML = round;
    cpu_value=play_cpu();
    draw_selected_action(user_value,cpu_value);
    get_results(user_value,cpu_value);
    if(round>=3){
        document.getElementById('id01').style.display='block';
        board.style.display = "none";
        final_user_results.innerHTML = user_results;
        final_cpu_results.innerHTML = cpu_results;
        if(cpu_results<user_results){
            final_results.innerHTML = `<p>Result: <strong>User Win</strong></p>`;
        }else if(cpu_results>user_results){
            final_results.innerHTML = `<p>Result: <strong>CPU Win</strong></p>`;
        }else{
            final_results.innerHTML = `<p>Result: <strong>Deuce</strong></p>`;
        }
        
    }
  }

  function get_results(user_value,cpu_value){
      if(user_value==cpu_value){
        result.innerHTML = `<p>Result: <strong>Deuce</strong></p>`;
      }else{
            if(user_value==0 && cpu_value==1){
                result.innerHTML = `<p>Result: <strong>CPU Win</strong></p>`;
                cpu_results++;
                cpu_results_spam.innerHTML = cpu_results;
                
            }
            if(user_value==0 && cpu_value==2){
                result.innerHTML = `<p>Result: <strong>User Win</strong></p>`;
                user_results++;
                user_results_spam.innerHTML = user_results;
            }

            if(user_value==1 && cpu_value==0){
                result.innerHTML = `<p>Result: <strong>User Win</strong></p>`;
                user_results++;
                user_results_spam.innerHTML = user_results;
            }
            if(user_value==1 && cpu_value==2){
                result.innerHTML = `<p>Result: <strong>CPU Win</strong></p>`;
                cpu_results++;
                cpu_results_spam.innerHTML = cpu_results;
            }

            if(user_value==2 && cpu_value==0){
                result.innerHTML = `<p>Result: <strong>CPU Win</strong></p>`;
                cpu_results++;
                cpu_results_spam.innerHTML = cpu_results;
            }
            if(user_value==2 && cpu_value==1){
                result.innerHTML = `<p>Result: <strong>User Win</strong></p>`;
                user_results++;
                user_results_spam.innerHTML = user_results;
            }
    }
  }

  function draw_selected_action(user_value,cpu_value){
     switch (user_value){
         case 0:
            user_selected_dection.innerHTML = `<div><center><img src="images/hand-rock.png" alt=""></center></div>`;
            break;
        case 1:
            user_selected_dection.innerHTML = `<div><center><img src="images/hand-paper.png" alt=""></center></div>`;
            break;
        case 2:
                user_selected_dection.innerHTML = `<div><center><img src="images/hand-scissors.png" alt=""></center></div>`;
            break;
        default: null;
            break;    
    }

    switch (cpu_value){
        case 0:
            cpu_selected_dection.innerHTML = `<div><center><img src="images/hand-rock.png" alt=""></center></div>`;
           break;
       case 1:
            cpu_selected_dection.innerHTML = `<div><center><img src="images/hand-paper.png" alt=""></center></div>`;
           break;
       case 2:
            cpu_selected_dection.innerHTML = `<div><center><img src="images/hand-scissors.png" alt=""></center></div>`;
           break;
       default: null;
           break;    
   }

  }


  function play_cpu() {
    return Math.floor(Math.random() * 3);
  }

  function closeForm() {
    window.location.reload(true);
  }

  game();