var task;
$(document).ready(function() {

	// Parameters
	var ntask = 2; // how many different demo animal tasks are there?
	var nway = 4; // n-way classification task - matrix size 
	// SWITCHING SYNTAX 

	// Selected demo images
	//latin_id = 2;
	Task1a_id = 3;
	Task2a_id = 4;
	Task3a_id = 2;
	Task4a_id = 4;
	Task5a_id = 3;
	Task6a_id = 1;
	Task7a_id = 2;
	Task8a_id = 3;
	Task9a_id = 1;
	Task10a_id = 3;
	Task11a_id = 4;
	Task12a_id = 4;
//	Q1_id = 1;
//	Q2_id = 2;



	//took out line 18,19 added line 16, shit, turns out you need spec.list_condition 
	//var spec = {};
	var spec = {};
	spec.list_condition = ['a','a'];

	task = classification(spec);
	var condition = task.getCondition();

	var data = {};
	var inds = shuffle([0,12]);
//	data.imglist_demo = getlist_test_demo(Q1_id,Q2_id,inds);
        data.imglist_demo = getlist_test_demo(task1a_id,task2a_id,task3a_id,task4a_id,task5a_id,task6a_id,task7a_id,task8a_id,task9a_id,task10a_id,task11a_id,task12a_id,inds);
	data.imglist_list_demo = getlist_train_demo(nway,inds);
	data.imglist_test = getlist_test(condition,ntask,nway);
	data.imglist_list_train = getlist_train(condition,ntask,nway);
	task.load_images(data);
	console.log("imglist_test:"+data.imglist_test);
	console.log("imglist_train:"+data.imglist_list_train);
});

// shuffle I found on stack overflow
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Get just the two test images for the demo
  var getlist_test_demo = function (task1a_id,task2a_id,task3a_id,task4a_id,task5a_id,task6a_id,task7a_id,task8a_id,task9a_id,task10a_id,task11a_id,task12a_id,r) {
//var getlist_test_demo = function (Q1_id,Q2_id,r) {

	var list = new Array();
	var dname = 'images_classif_demo/';
//  	list[0] = dname + 'latin_test' + latin_id + '.png';
//	list[r[0]] = dname + 'Q1_test' + Q1_id + '.png';
//	list[r[1]] = dname + 'Q2_test' + Q2_id + '.png';
	list[r[0]] = dname + 'task1a_test' + task1a_id + '.png';
	list[r[1]] = dname + 'task2a_test' + task2a_id + '.png';
	list[r[2]] = dname + 'task3a_test' + task3a_id + '.png';
	list[r[3]] = dname + 'task4a_test' + task4a_id + '.png';
	list[r[4]] = dname + 'task5a_test' + task5a_id + '.png';
	list[r[5]] = dname + 'task6a_test' + task6a_id + '.png';
	list[r[6]] = dname + 'task7a_test' + task7a_id + '.png';
	list[r[7]] = dname + 'task8a_test' + task8a_id + '.png';
	list[r[8]] = dname + 'task9a_test' + task9a_id + '.png';
	list[r[9]] = dname + 'task10a_test' + task10a_id + '.png';
	list[r[10]] = dname + 'task11a_test' + task11a_id + '.png';
	list[r[11]] = dname + 'task12a_test' + task12a_id + '.png';
	return list;
};

// Get two lists of training images
var getlist_train_demo = function (nway,r) {
	var list = new Array();
	var dname = 'images_classif_demo/';
//

	list[r[0]] = new Array();
	for (var c=1; c <= nway; c++ ) {
  		list[r[0]][c-1] = dname + 'task1a_train' + c + '.png';
    }

	list[r[1]] = new Array();
	for (var c=1; c <= nway; c++ ) {
	  	list[r[1]][c-1] = dname + 'task2a_train' + c + '.png';
    }
	
	list[r[2]] = new Array();
	for (var c=1; c <= nway; c++ ) {
  		list[r[0]][c-1] = dname + 'task3a_train' + c + '.png';
    }

	list[r[3]] = new Array();
	for (var c=1; c <= nway; c++ ) {
	  	list[r[1]][c-1] = dname + 'task4a_train' + c + '.png';
    }
	list[r[4]] = new Array();
	for (var c=1; c <= nway; c++ ) {
  		list[r[0]][c-1] = dname + 'task5a_train' + c + '.png';
    }

	list[r[5]] = new Array();
	for (var c=1; c <= nway; c++ ) {
	  	list[r[1]][c-1] = dname + 'task6a_train' + c + '.png';
    }
	
	list[r[6]] = new Array();
	for (var c=1; c <= nway; c++ ) {
  		list[r[0]][c-1] = dname + 'task7a_train' + c + '.png';
    }

	list[r[7]] = new Array();
	for (var c=1; c <= nway; c++ ) {
	  	list[r[1]][c-1] = dname + 'task8a_train' + c + '.png';
    }

	list[r[8]] = new Array();
	for (var c=1; c <= nway; c++ ) {
  		list[r[0]][c-1] = dname + 'task9a_train' + c + '.png';
    }

	list[r[9]] = new Array();
	for (var c=1; c <= nway; c++ ) {
	  	list[r[1]][c-1] = dname + 'task10a_train' + c + '.png';
    }
	
	list[r[10]] = new Array();
	for (var c=1; c <= nway; c++ ) {
  		list[r[0]][c-1] = dname + 'task11a_train' + c + '.png';
    }

	list[r[11]] = new Array();
	for (var c=1; c <= nway; c++ ) {
	  	list[r[1]][c-1] = dname + 'task12a_train' + c + '.png';
    }	

	
	return list;
};

// randomly choose a "test" image for each trial
// THIS IS THE demo task now with animals!!! So change to IQ instead of "task"
var getlist_test = function (type,ntask,nway,oops) {
    var list = new Array();
    var dname = 'images_classif/';
  	var count = 0;
  	for (var i=1; i <= ntask; i++) {
  		var c = tu.randint(1,nway); // random choice of the image
  		list[count] = dname + 'Q' + i + type + '_test' + c + '.png';
  		count++;
  	}
    return list;
};

// enumerate the image set which is the training images
var getlist_train = function (type,ntask,nway) {
    var list = new Array();
    var dname = 'images_classif/';
  	for (var i=1; i <= ntask; i++) {
  		list[i-1] = new Array();
  		for (var c=1; c <= nway; c++ ) {
  			list[i-1][c-1] = dname + 'Q' + i + type + '_train' + c + '.png';
  		}
  	}
    return list;
};


