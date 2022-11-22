function check(){

	  
	  for(i=0 ; i<3 ; i++){
		  
				var user1 = prompt("User 1 please select: Rock, Paper or Scissors?");
				var myArray = ["Rock","Paper","Scissors"];
				var user2 = myArray[Math.floor(Math.random()*myArray.length)];
	  
	  			if(user1!="Paper" && user1!="Rock" && user1!="Scissors"){
					alert("Invalid input, please try again!");
				}
					else if(user2!="Paper" && user2!="Rock" && user2!="Scissors"){
						alert("Invalid input, please try again!");
					}
		
	  
					else if(user1=="Paper" && user2=="Paper"){
						alert("It's a draw");
						
					}
					else if(user1=="Rock" && user2=="Rock"){
						alert("It's a draw");
						
					}
					else if(user1=="Scissors" && user2=="Scissors"){
						alert("It's a draw");
						
					}
					else if(user1=="Rock" && user2=="Paper"){
						alert("Computer winning!");
						
					}
					else if(user1=="Paper" && user2=="Rock"){
						alert("Player winning! Game over!");
						i=3;
					}
					else if(user1=="Rock" && user2=="Scissors"){
						alert("Player winning! Game over!");
						i=3;
					}
					else if(user1=="Scissors" && user2=="Rock"){
						alert("Computer winning!");
						
					}
					else if(user1=="Paper" && user2=="Scissors"){
						alert("Computer winning!");
						
					}
					else if(user1=="Scissors" && user2=="Paper"){
						alert("Player winning! Game over!");
						i=3;
					}
					else{
						alert("Invalid input, please try again!");
					}
	  }
}

function beer(){

	for( i=99; i>=1; i--){
			if(i>=2){
				document.getElementById("beer").innerHTML+="<br/>"+i+" bottles of beer on the wall, "+i+" bottles of beer";
				document.getElementById("beer").innerHTML+="<br/>"+"Take one down and pass it around, "+(i-1)+" bottles of beer on the wall";
			}
			else{
			document.getElementById("beer").innerHTML+="<br/>"+"1 bottle of beer on the wall, 1 bottle of beer";
			document.getElementById("beer").innerHTML+="<br/>"+"Take one down and pass it around, no more bottles of beer on the wall";
			document.getElementById("beer").innerHTML+="<br/>"+"No more bottles of beer on the wall, no more bottles of beer";
			document.getElementById("beer").innerHTML+="<br/>"+"Go to the store and buy some more, 99 bottles of beer on the wall";
				}

			}
}

/*for(int i=99; i>=1; i--){
			if(i>=2){
				System.out.println(+i+" bottles of beer on the wall, "+i+" bottles of beer");
				System.out.println("Take one down and pass it around, "+(i-1)+" bottles of beer on the wall");
			}
			else{
			System.out.println("1 bottle of beer on the wall, 1 bottle of beer");
			System.out.println("Take one down and pass it around, no more bottles of beer on the wall");
			System.out.println("No more bottles of beer on the wall, no more bottles of beer");
			System.out.println("Go to the store and buy some more, 99 bottles of beer on the wall");
				}

			}*/