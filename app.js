
// QUESTIONS
const questions = [
    {
      "question": "When it comes to a creative meeting do you prefer to",
      "answers":[
        {
            "text": "Turn up with your notepad and pen, full of energy and ready to brainstorm",
            "euthusiast": 1,
            "achiever": 0,
            "helper": 0,
            "investigator": 0,
            "individualist": 0.5,
            "peacemaker": 0,
            "improver": 0

        },
        {
          "text": "Arrive armed with a detailed agenda cross-referenced against the company’s latest strategy of objectives",
          "euthusiast": 0,
          "achiever": 1,
          "helper": 0,
          "investigator": 0,
          "individualist": 0,
          "peacemaker": 0,
          "improver": 0.5
      }
    ]
    },
    {
      "question": "Your boss has noticed the mood seems low in the office lately and asks you to plan something to boost morale. Do you",
      "answers":[
        {
            "text": "Organise a fun, team-building day, putting ideas for the activity to the vote first",
            "euthusiast": 0.5,
            "achiever": 0,
            "helper": 1,
            "investigator": 0,
            "individualist": 0,
            "peacemaker": 0,
            "improver": 0

        },
        {
          "text": "Arrange one-to-ones with everyone to find out what's wrong before looking into ways to address any issues",
          "euthusiast": 0,
          "achiever": 0,
          "helper": 0,
          "investigator": 1,
          "individualist": 0,
          "peacemaker": 0.5,
          "improver": 0
      }
    ]
    },
    {
      "question":
        "You’re asked to design an online training session for a complicated new system that could bring huge benefits for the organisation once used effectively. How do you feel?",
      "answers":[
        {
            "text": "You like the autonomy of this and focus on creating an engaging and innovative seminar which all types of learner can understand",
            "euthusiast": 0,
            "achiever": 0,
            "helper": 0,
            "investigator": 0,
            "individualist": 1,
            "peacemaker": 0,
            "improver": 0.5

        },
        {
          "text": "You ask IT to come up with an incentive-driven app that provides staff with a bonus when they pass each stage of the training",
          "euthusiast": 0.5,
          "achiever": 1,
          "helper": 0,
          "investigator": 0,
          "individualist": 0,
          "peacemaker": 0,
          "improver": 0
      }
    ]
    },
    {
      "question": "You're asked to lead a role play exercise to help assess whether candidates are a right fit for the organisation’s code of ethics.  Where do you start?",
      "answers":[
        {
            "text": "You study every detail of the company’s values and behaviours and ask managers for examples of real-life situations where staff have demonstrated them well",
            "euthusiast": 0,
            "achiever": 0,
            "helper": 0,
            "investigator": 1,
            "individualist": 0,
            "peacemaker": 0,
            "improver": 0.5

        },
        {
          "text": "You have loads of brilliant role play ideas and will improvise on the day. You’re a firm believer in getting people to think on their feet as it shows how they react instinctively",
          "euthusiast": 1,
          "achiever": 0,
          "helper": 0,
          "investigator": 0,
          "individualist": 0.5,
          "peacemaker": 0,
          "improver": 0
      }
    ]
    },
    {
      "question": "A stressed colleague has forgotten to do something, and another, who isn't feeling great either, has had to deal with the fallout. Neither have spoken to each other about it but there's a bit of an atmosphere. What do you do?",
      "answers":[
        {
            "text": "Have a chat with both separately, explaining each other's point of view, then suggest a team social at the weekend. Everyone’s been under a lot of pressure lately and it's ages since you’ve had a laugh together",
            "euthusiast": 0,
            "achiever": 0,
            "helper": 0.5,
            "investigator": 0,
            "individualist": 0,
            "peacemaker": 1,
            "improver": 0

        },
        {
          "text": "You’ve noticed neither seem as motivated lately and their skills complement each other, so you suggest they work together on a project which takes them out of the office",
          "euthusiast": 0,
          "achiever": 0,
          "helper": 0,
          "investigator": 0,
          "individualist": 0.5,
          "peacemaker": 0,
          "improver": 1
      }
    ]
    },
    {
      "question": "There’s been a bad news story in the press portraying your organisation unfairly. How do you react?",
      "answers":[
        {
            "text": "Release a brief company statement putting the incident in context, using the opportunity to mention excellent achievements linked to some current national news",
            "euthusiast": 1,
            "achiever": 0,
            "helper": 0,
            "investigator": 0,
            "individualist": 0,
            "peacemaker": 0,
            "improver": 0.5

        },
        {
          "text": "Gather and consider all details of the incident before quoting a spokesperson in a fact-based counter story with reassurance to the public that it was not a true account",
          "euthusiast": 0,
          "achiever": 0,
          "helper": 0.5,
          "investigator": 1,
          "individualist": 0,
          "peacemaker": 0,
          "improver": 0
      }
    ]
    },
    {
      "question": "Your telephone operators are competent and empathetic individuals but there’s been sudden flurry of complaints which point to a system error. Do you",
      "answers":[
        {
            "text": "Check all calls flagged thoroughly before taking action. It's vital you have the facts to rectify it fairly for all involved and ensure the system works going forward",
            "euthusiast": 0,
            "achiever": 0,
            "helper": 0,
            "investigator": 1,
            "individualist": 0,
            "peacemaker": 0,
            "improver": 0.5

        },
        {
          "text": "Inform staff who’ve taken the calls that the issue is being addressed, and contact everyone who’s complained apologising for the error",
          "euthusiast": 0,
          "achiever": 0,
          "helper": 0.5,
          "investigator": 0,
          "individualist": 0,
          "peacemaker": 1,
          "improver": 0
      }
    ]
    },
    {
      "question": "It’s been an especially busy night and you arrive at work to discover some vehicles have been broken into overnight and your boss has been called away urgently. How do you react?",
      "answers":[
          {
              "text": "It doesn’t faze you – your boss runs a slick operation so you can easily step in. In fact you’ll relish the chance to take charge and show what you can do",
              "euthusiast": 0,
              "achiever": 1,
              "helper": 0,
              "investigator": 0,
              "individualist": 0,
              "peacemaker": 0,
              "improver": 0.5

          },
          {
            "text": "You get stuck in with the team to ensure the right number of vehicles are ready for duty, with all hands on deck you’ll soon have things sorted",
            "euthusiast": 0.5,
            "achiever": 0,
            "helper": 1,
            "investigator": 0,
            "individualist": 0,
            "peacemaker": 0,
            "improver": 0
        }
      ]
    },
    {
      "question": "There’s a been a big drive on fitness for wellbeing on the intranet and you want to get your team motivated to exercise more. What's your approach?",
      "answers":[
          {
              "text": "Challenging another department to a competition will get results and you love a bit of friendly rivalry. Plus you can rely on your team to get stuck in, especially with a few incentives thrown in",
              "euthusiast": 0.5,
              "achiever": 1,
              "helper": 0,
              "investigator": 0,
              "individualist": 0,
              "peacemaker": 0,
              "improver": 0

          },
          {
            "text": "A sponsored event in aid of a good cause is likely to be the most inclusive, so you put it to the vote to decide what activity and charity will work for everyone",
            "euthusiast": 0,
            "achiever": 0,
            "helper": 0.5,
            "investigator": 0,
            "individualist": 1,
            "peacemaker": 0,
            "improver": 0
        }
      ]
    },
    {
      "question": "You’re in charge of organising the Christmas celebrations. Usually each department has its own but this year lots of employees are asking for a big joint party, and for it to be fancy dress. Do you",
      "answers":[
          {
              "text": "Embrace the idea and start planning an appropriate theme  - it’s a fabulous way to bring everyone together and feel comfortable about being creative",
              "euthusiast": 0.5,
              "achiever": 0,
              "helper": 0,
              "investigator": 0,
              "individualist": 1,
              "peacemaker": 0,
              "improver": 0

          },
          {
            "text": "Start looking at venues and the budget – you’ll have to get in quick to book something big enough that won’t break the bank and you don’t want people to be disappointed",
            "euthusiast": 0,
            "achiever": 0,
            "helper": 1,
            "investigator": 0,
            "individualist": 0,
            "peacemaker": 0.5,
            "improver": 0
        }
      ]
    },
    {
      "question": "You get called to a job in the middle of the night It’s cold and wet, and you know the area is quite hilly and remote. What are your immediate thoughts?",
      "answers":[
          {
              "text": "You’re happy to  go with the flow. You take your dog out on long runs whatever the weather so a bit of bad weather won’t stop you homing in on the task at hand",
              "euthusiast": 1,
              "achiever": 0.5,
              "helper": 0,
              "investigator": 0,
              "individualist": 0,
              "peacemaker": 0,
              "improver": 0

          },
          {
            "text": "You’re well prepared both physically and mentally for this type of call and will approach the task with patience, creativity and an open mind,",
            "euthusiast": 0,
            "achiever": 0,
            "helper": 0,
            "investigator": 1,
            "individualist": 0.5,
            "peacemaker": 0,
            "improver": 0
        }
      ]
    }
  ]
  
  
  let currentQuestion = 0;
  let score = 0;
  let selectedAnswersData = [];
  let answerEuthusiast = 0;
  let answerAchiever = 0;
  let answerHelper = 0;
  let answerInvestigator = 0;
  let answerIndividualist = 0;
  let answerPeacemaker = 0;
  let answerImprover = 0;
  const totalQuestions =questions.length;
  
  const container = document.querySelector('.quiz-container');
  const questionEl = document.querySelector('.question');
  const option1 = document.querySelector('.option1');
  const option2 = document.querySelector('.option2');
  const nextButton = document.querySelector('.next');
  const previousButton = document.querySelector('.previous');
  const restartButton = document.querySelector('.restart');
  const result = document.querySelector('.result');
  

  //Function to generate question 
  function generateQuestions (index) {
      //Select each question by passing it a particular index
    const question = questions[index];
    const euthusiast1 = question.answers[0].euthusiast;
    const euthusiast2 = question.answers[1].euthusiast;
    option1.setAttribute('data-euthusiast', `${euthusiast1}`);
    option2.setAttribute('data-euthusiast', `${euthusiast2}`);
    const achiever1 = question.answers[0].achiever;
    const achiever2 = question.answers[1].achiever;
    option1.setAttribute('data-achiever', `${achiever1}`);
    option2.setAttribute('data-achiever', `${achiever2}`);
    const helper1 = question.answers[0].helper;
    const helper2 = question.answers[1].helper;
    option1.setAttribute('data-helper', `${helper1}`);
    option2.setAttribute('data-helper', `${helper2}`);
    const investigator1 = question.answers[0].investigator;
    const investigator2 = question.answers[1].investigator;
    option1.setAttribute('data-investigator', `${investigator1}`);
    option2.setAttribute('data-investigator', `${investigator2}`);
    const individualist1 = question.answers[0].individualist;
    const individualist2 = question.answers[1].individualist;
    option1.setAttribute('data-individualist', `${individualist1}`);
    option2.setAttribute('data-individualist', `${individualist2}`);
    const peacemaker1 = question.answers[0].peacemaker;
    const peacemaker2 = question.answers[1].peacemaker1;
    option1.setAttribute('data-peacemaker', `${peacemaker1}`);
    option2.setAttribute('data-peacemaker', `${peacemaker2}`);
    const improver1 = question.answers[0].improver1;
    const improver2 = question.answers[1].improver2;
    option1.setAttribute('data-improver', `${improver1}`);
    option2.setAttribute('data-improver', `${improver2}`);



      //Populate html elements 
      questionEl.innerHTML = `${index + 1}. ${question.question}`
      option1.innerHTML = question.answers[0].text;
      option2.innerHTML = question.answers[1].text;
  }  
  

  //reminder 
  function loadNextQuestion () {
      const selectedOption = document.querySelector('input[type="radio"]:checked');
      //Check if there is a radio input checked
      if(!selectedOption) {
          alert('Please select your answer!');
          return;
      }

      //Get value of selected radio
    //   const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
      const answerA = Number(selectedOption.nextElementSibling.getAttribute('data-euthusiast'));
      answerEuthusiast += answerA;
      const answerB = Number(selectedOption.nextElementSibling.getAttribute('data-achiever'));
      answerAchiever += answerB;
      const answerC = Number(selectedOption.nextElementSibling.getAttribute('data-helper'));
      answerHelper += answerC;
      const answerD = Number(selectedOption.nextElementSibling.getAttribute('data-investigator'));
      answerInvestigator += answerD;
      const answerE = Number(selectedOption.nextElementSibling.getAttribute('data-individualist'));
      answerIndividualist += answerE;
      const answerF = Number(selectedOption.nextElementSibling.getAttribute('data-peacemaker'));
      answerPeacemaker += answerF;
      const answerG = Number(selectedOption.nextElementSibling.getAttribute('data-improver'));
      answerImprover += answerG;
      // answerAchiever = answerAchiever + answerA;
      selectedAnswersData.push()
      
      //Finally we incement the current question number ( to be used as the index for each array)
      currentQuestion++;
  
    //once finished clear checked
          selectedOption.checked = false;
      //If quiz is on the final question
      if(currentQuestion == totalQuestions - 1) {
          nextButton.textContent = 'Finish';
      }


      let scoreArray = [
        {
            type: 'euthusiast',
            score : answerEuthusiast
        },
        {
            type: 'achiever',
            score : answerAchiever
        },
        {
            type: 'helper',
            score : answerHelper
        },
        {
            type: 'investigator',
            score : answerInvestigator
        },
        {
            type: 'individualist',
            score : answerIndividualist
        },
        {
            type: 'peacemaker',
            score : answerPeacemaker
        },
        {
            type: 'improver',
            score : answerImprover
        }
      ]

      scoreArray = scoreArray.sort((a,b) => a.score < b.score ? -1:1);
      console.log('test');
      console.log(scoreArray);

      let whatAreYou = scoreArray[0].type;

      //If the quiz is finished then we hide the questions container and show the results 
      if(currentQuestion == totalQuestions) {
          result.style.display = "flex";
          container.style.display = 'none';
          result.innerHTML =
           `<h1 class="final-score"> ${whatAreYou}</h1>
          <button class="restart">Restart Quiz</button>
           `;
          return;
      }
      generateQuestions(currentQuestion);
  }


//start quiz
  function startBtn() {
    let start = document.querySelector('.quiz-container')
    let hide = document.querySelector('.begin')

    start.classList.toggle('active');
    hide.classList.toggle('active');
}

  //Function to load previous question
  function loadPreviousQuestion() {
      //Decrement quentions index
      currentQuestion--;
      //remove last array value;
      score.pop();
      //Generate the question
      generateQuestions(currentQuestion);
  }
  
  //Fuction to reset and restart the quiz;
  function restartQuiz(e) {
      if(e.target.matches('button')) {
      //reset array index and score
      currentQuestion = 0;
      score = [];
      //Reload quiz to the start
      location.reload();
      }
  
  }
  
  generateQuestions(currentQuestion);
  nextButton.addEventListener('click', loadNextQuestion);
  result.addEventListener('click',restartQuiz);