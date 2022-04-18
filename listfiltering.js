 function filter_list(l) {

    // We assign first the length of the array to a variable theLength
    theLength = l.length
    //console.log(theLength)

    // Then we create an array arr so we can use the for loop to iterate through the elements of the array and use the if conditional statement and use the function typeof to find out if the element is a number. If the condition is true, we push the element to the array arr
    arr = []
    for(i=0; i<=theLength-1; i++){
        if(typeof l[i] == 'number'){
            arr.push(l[i])
        }
    }

    console.log(arr)

   }
  filter_list([1,2,'a','b'])
  filter_list([1,'a','b',0,15])
  filter_list([1,2,'aasf','1','123',123])