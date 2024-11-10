var names=new Array();
names[0]="Yaakov";
names[1] = "Michael";
names[2] = "Sophia";
names[3] = "David";
names[4] = "Emily";
names[5] = "Daniel";
names[6] = "Sarah";
names[7] = "Chris";
names[8] = "Olivia";
names[9] = "Ethan";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}