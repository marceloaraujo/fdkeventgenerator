//Aqui nós carregamos o gulp e os plugins através da função 'require' do nodejs
var gulp = require('gulp');
var insertLines = require('gulp-insert-lines');

//Insiro todos os events possíveis dentro do array
var eventsArr = [
    "replyClick", "sendReply", "forwardClick", "conversationForward",
    "forward", "notesClick", "addNote", "closeTicketClick",
    "deleteTicketClick", "previousTicketClick", "nextTicketClick",
    "startTimer", "stopTimer", "updateTimer", "deleteTimer",
    "priorityChanged", "statusChanged", "groupChanged",
    "agentChanged", "typeChanged", "propertiesUpdated"
];

gulp.task('insert', function() {
    var funcTest = [];

    var paramEvent = process.argv[3];
    var paramValue = process.argv[4];
    var functionName = paramValue + "Callback";
    if(paramEvent != undefined) {
        if(paramEvent == "--event") {
            var arrContainsEvent = (eventsArr.indexOf(paramValue) > -1);
            if(arrContainsEvent) {
                funcTest.push(
                    "var " + functionName + " = function(event) {\n",
                    "//TODO: PLEASE, INDENT ME FIRST!!!\n",
                    "//Insert your code here...\n",
                    "};\n",
                    "client.events.on('ticket." + paramValue + "', " + functionName + ", {intercept: true});"
                );

                gulp.src('./app/app.js')
                    .pipe(insertLines({
                        'after': /var client = _client;/,
                        'lineAfter': funcTest.join("")
                    }))
                    .pipe(gulp.dest('.'));
                    console.log("Evento criado com sucesso!!!");
            } else {
                console.log("Comando não encontrado. Por favor, utilize os eventos do Event API do Freshdesk.");
            }
        }
    } else {
        console.log("Falha ao executar comando. Execute o mesmo da seguinte forma: 'gulp insert --event replyClick'.");
    }
});

