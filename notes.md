# Big O Notation 
- What is Big O? 
    - a common framework for comparing algorithms
    - Useful for discussing trade-offs between different coding approaches
- What does better mean?
    - Fewest # of operations
- NOT fastest
    - Different machines record different times
    - The same machine will record different times
    - Speed might not be precise enough (for super fast algos)

# Big O and Objects
- Objects
    - Insertion = O(1)
    - Removal = O(1)
    - Search = O(N)
    - Access = O(1)
- Object Methods
    - Object.keys(obj) = O(N)
    - Object.values(obj) = O(N)
    - Object.entries(obj) = O(N)
    - obj.hasOwnProperty('key') = O(1)

# When are Arrays Slow?
- When to use an array?
    - When you need order
    - When you need fast access / insertion and removal
- Arrays
    - Insertion = depends... 
    - Removal = depends...
        - At beginning is O(N) **this is because of re-indexing everything**
        - At end is O(1)
    - Search = O(N)
    - Access = O(1)
- Array Methods
    - sort = O(N*log(N))
    - forEach/map/reduce = O(N)

# Algorithms
- A process or set of steps to accomplish a certain task
- Understand the problem
    - Can I restate the problem in my own words?
    - What are the inputs that go into the problem?
    - What should the outputs look like?
    - Can the outputs be determined from the inputs?
    - How should I label the important pieces of data that are part of the problem? 
- Explore concrete examples
    - Think of a few simple examples
    - Progress to more complex examples
    - Explore examples with empty / invalid inputs
- Break it down
    - "Here are the steps I'm trying to take..."
    - Write basic components of the solution - explicitly write the steps
- Solve / Simplify
    - If you can solve... solve!
    - If there's a part you are unsure about... simplify!
        - Find the core difficulty in what you're trying to do
        - Temporarily ignore that difficulty
        - Write a simplified solution
        - Then incorporate the difficulty back in
- Look back and refactor
    - Can you derive the result differently?
    - Can you understand it at a glance?
    - Can you use the result or method for some other problem?
    - Can you improve the performance of your solution?
    - Can you think of other ways to refactor? e.g. company styling guides, etc.
    - How have other people solved this problem?

# Common problem solving patterns / blueprints
- Frequency counter
    - great for avoiding nested loops when trying to evaluate 2 strings, arrays, objs, ...
    - e.g. validAnagrams(w1, w2)

- Multiple pointers 
    - creating pointers (or values) that correspond to an index and move towards the beginning, end, or middle based on a certain condition
    - very efficient for solving problems with minimal space complexity
    - e.g. sumZero([arr]) --> accepts a sorted array of integers and finds the first pair where the sum is 0. 
        -- output both values or undefined if none exists
    - e.g. countUniqueValues([arr]) --> accepts sorted array and counts # of unique vals in that array

- Sliding window
    - creating a window (which can either be an array or a number) from one position to another
    - depending on a certain condition, the window either increases or closes (and then we create a new window)
    - very useful for keeping track of a subset of data in an array or string
    - e.g. maxSum([arr], num) --> accepts an array of integers and a number (num) 
        -- calculates the max sum of num consecutive elements in the array

- Divide and conquer
    - dividing a dataset into smaller chunks and then repeating a process on a smaller subset of data
    - can decrease time complexity
    - e.g. Binary search --> given a sorted array, and value find idx of value. return -1 if not present

# Recursion
    - a function that calls itself
    - sometimes a cleaner alternative to iteration
    - *the call stack* = stack data structure the browser uses to execute javascript
        -- any time the browser invokes a function, it places it at the top of the call stack
        -- when javascript sees the *return* keyword (or the function ends), the compiler will remove (or pop) the function from the top of the call stack
        -- like a stack of papers --> remove from top
        -- recursive functions keep pushing same function to the top of the call stack
    - *base case* = condition when the recursion stops
    - *different input* = parameter to inject into the recursive function over and over
    - where things go wrong :/
        -- no base case
        -- returning the wrong thing or forgetting to return
        -- stack overflow = recursion never stops (too many calls in the call stack)
    - tip --> when using pure recursion (no helper function), using spread operator, concat, and slice can make copies of arrays so you don't mutate them 

# Search
## Linear Search
    - checking every single element in the array one at a time
    - Javascript builtin examples
        -- indexOf
        -- includes
        -- find
        -- findIndex
    - O(n) time complexity
## Binary Search
    - much faster than linear search
    - instead of eliminating one element at a time, you can eliminate *half* of the remaining elements at a time
    - *only* works on sorted arrays
    - pseudocode
        -- function accepts a sorted array and a value
        -- create (1) a left pointer at the start of the array and (2) a right pointer at the end of the array
        -- while the left pointer comes before the right pointer:
            --- create a pointer in the middle (e.g. average)
            --- if the middle val === the desired value, return the index
            --- if the middle val is too small, move the start pointer up (to middle pointer + 1)
            --- if the middle val is too large, move the end pointer down (to middle pointer - 1)
            --- if you never find the desired value, return -1

# Sort
## Basic Sorting - Time: O(n^2)
    - Rearrage the items in a collection (e.g. array) so that items are in some kind of order
        -- numbers --> smallest to largest
        -- names --> alphabetically
        -- movies --> based on release year
    - Built-in JavaScript Sort (array.sort())
        -- default (no params) sorts by unicode character #
        -- accepts an optional comparator function (what do we want to sort by?)
        -- comparator function looks at a pair of elements and determines their sort order based on the return value
    - Bubble Sort - Time: O(n^2), Space: O(n)
        -- largest values will bubble to the top one at a time
        -- compare two adjacent values and swap if the left value is larger
        -- O(n) or O(n^2) without optimizations --> not so efficient or commonly used
        -- pseudocode:
            --- initialize noSwaps
            --- start looping through the array w a variable called "i" coming from the end to the beginning. noSwaps = true
            --- start an inner loop w a variable called "j" from the beginning until j = i - 1
            --- if arr[j] > arr[j+1] --> swap those two vals (create a temp var... temp = arr[j], arr[j] = arr[j+1], arr[j+1] = temp) --> set noSwaps = false
            --- if noSwaps, break (we're sorted)
    - Selection Sort - Time: O(n^2), Space: O(n)
        -- similar to bubble sort, but instead of placing large values at the end, we put small values at the beginning
        -- find min value and swap with index 0... 
        -- O(n^2) --> not especially effective or commonly used
        -- pseudocode:
            --- store first element as min
            --- if next item is smaller, update min and continue to end of the array
            --- if the min value is not the same index as where you started, swap those two values
            --- repeat with the next element in the array, until the array is sorted
    - Insertion Sort - Time: O(n^2), Space: O(n)
        -- builds up the sort by gradually creating a larger left half, which is always sorted
        -- O(n^2) worst case... good if data is nearly sorted or if data is streaming (not all data available at start of sort)
        -- pseudocode:
            --- start by picking the second element in the array
            --- compare the second element with the first element, and swap if necessary
            --- continue to the next element
            --- iterate through the sorted portion to place the element in the correct place
            --- repeat until array is sorted
    - These basic algos excel when the dataset is small

## Merge Sort - Time: O(n log n), Space: O(n)
    - Combination of splitting up, sorting, and merging
    - Divide and conquer into smaller sub arrays
    - Tip: Start with a helper function for merging two sorted arrays
    - pseudocode (merge):
        -- create an empty array
        -- look at smallest vals (index 0) of input arrays 
        -- while there are still values we haven't look at
            * compare arr1[0] with arr2[0]
            * push smaller value to result
            * move onto next val of arr1
            * once we finish one array, we push all the remaining values of the remaining array to the end of the result
    - pseudocode (mergesort):
        -- break up array into halves until you have arrays that are empty or have 1 element
        -- once we have smaller arrays (empty or 1 element), we use the merge method to merge those arrays with other sorted arrays until we're back to the full length
        -- once we are done, return the merged sorted array
    - O(n) decompositions * O(log n) comparisons per decomposition
        O(n * log n) is the best we can do for a vanilla sorting algorithms. Others that are better take advantages of quirks in data

## Quick Sort - Time: O(n^2) worst case, Space: O(log n)
    - Like merge sort, it takes advantage of the fact the arrays of 0 or 1 element are already sorted
    - Work by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
    - Recursively repeat for all other elements in the array
    - Run-time does depend on which pivot you choose. Ideally, you want to pick the median value 
    - pseudocode (partition/pivot):
        - challenge:
        - given an arry, select pivot point, rearrange values so all vals to left are less and all vals to right are greater
        - inside the left and right, order doesn't matter
        - helper should do this *in-place* (not create new array)
        - when complete, return index of the pivot
        ******
        - pivot helper: 
        - helper function accepts 3 arguments: an array, a start index (default 0), and an end index (default array.length - 1)
        - grab the pivot from the start of the array
        - store the current pivot index in a variable (this should keep track of where the pivot should end up)
        - loop through array from start til end
            -- if pivot > current element, increment the pivot index variable. swap the current element w the element at the pivot index
            -- swap the starting element (i.e. the pivot) with the pivot index
            -- return the pivot index
        ******
        - quicksort:
        - call pivot helper on the array
        - when helper returns the pivot index, recursively call the pivot helper on the left subarray and the right subarray
        - base case: subarray has less than 2 elements 
    
## Radix Sort - Time: O(n * # of digits) --> ca, Space: O(n + # of digits)
    - special sorting algorithm that doesn't make comparisons
    - only works on lists of numbers  
    - exploits the fact that information about the size of a number is encoded in the # of digits
        -- more digits = bigger!! 
    -- theoretically faster than comparison sorts, but there's debate
    - helper methods
        -- getDigit(num, position) --> returns the digit in num at the specified position
            --- e.g. getDigit(123456, 0) --> 6, getDigit(123456, 1) --> 5
        -- digitCount(num) --> returns the number of digits in num
            -- e.g. digitCount(123456) --> 6
        -- mostDigits(numArray) --> given an array of numbers, return the # of digits of the largest num in the list
            -- e.g. mostDigits([1, 22, 333, 4444]) --> 4
    - radix sort pseudocode:
        -- define a function that accepts a list of numbers
        -- determine how many digits the largest # has
        -- loop from i=0 to the largest # of digits
        -- each iteration:
            --- create buckets (empty arrays) for each digit
            --- place each number in its bucket based on its i'th digit
        -- replace existing array with values in the buckets, starting with 0 and going up to 9
        -- return sorted list

# Data Structures o.O
    - What makes something a data structure?
        -- They are collections of values, the relationships between those values, and functions / operations that we can apply to that data
    - Why are there so many ???
        -- Different data structures excel at different things --> certain ones are very useful in special cases
        -- Some are highly specialized while others (like arrays) are more general
    - ES2015 Class Syntax
        -- What's a class? --> a blueprint for creating objects with predefined properties and methods (*instances*)
        -- JavaScript doesn't have *true* object-oriented programming --> takes advantage of "prototype-based inheritance"
        -- In JavaScript, we implement data structures as classes
        -- Syntax
            --- The class keyword creates a constant, so you cannot redefine it!! 
            --- The method to create a new object *must* be called constructor(){}

            class Student {
                constructor(firstName, lastName) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                }

                fullName() {
                    return `Your name is ${this.firstName} ${this.lastName};
                }

                static enrollStudents(...students) {
                    // maybe add them to a database? 
                    // maybe send an email?
                }
            }

            -- instantiate a class instance using the "new" keyword

            cool_guy = new Student("marty", "mcfly");

        -- Instance methods
            --- Provide functionality that pertains to a specific instance of a class
                *** e.g. Array.push() or Array.slice()
                *** e.g. Student.fullName()
        -- Class methods
            --- Define functionality that's relevant to classes but not necessarily individual instances
                *** e.g. Student.enrollStudents([cool_guy, nerd, goth])
            --- Not super common. Often used to create utility functions for an application
            --- *static* methods are called without instantiating their class. a class instance *cannot* call a static method
            --- 

## Singly Linked 
    - A linked list is a data structure that contains a head, tail, and length property
    - Consists of of *nodes* and each node has a value and a pointer to another node (or null)
    - Like a bunch of train cars connected
    - Lists vs. Arrays
        -- Lists do not have indices, Arrays are indexed in order
        -- Lists are connected via nodes with the *next* pointer
        -- In Arrays, insertion / deletion can be expensive (need to reindex everything)
        -- Lists do not allow random access (e.g. specific index), Arrays do allow this
    - Linked lists are great for insertion and deletion
    - Pop = remove a node from the end of a linked list
    - Shift = remove a node from beginning of the linked list
    - Unshift = add a new node to the beginning of the new list
        -- accepts a value
        -- creates a new node w the value
        -- if there is no head, set the new node to be head and tail
        -- if there is a head, set the new node's .next property to be the current head
        -- if there is a head, update current head to new node
    - Get = retrieve a node by its position in the linked list (0-indexed. manually counting)
        -- accepts an index
        -- if index < 0 or >= length, return null
        -- loop through list until you reach index and find node at given index
    - Set = given a position and a value, set the position in the linked list to that value
        -- accepts an index and a value
        -- you can use the "get" method to find that node
        -- if the node isn't there, return false
        -- if the node is there, update the value and return true
    - Insert = adding a new node at a specific position
        -- accepts an index and a value
        -- if index < 0 or index > length, return false
        -- if index === length, add new node to end of list (i.e. "push")
        -- if index === 0, add new node to beginning of list (i.e. "unshift")
        -- else, use the "get" method to access the node at index - 1
        -- set the next property on node(idx-1) to equal the new node
        -- set the next property on the new node to equal node(idx-1).next (will need a temp variable)
        -- increment length 
        -- return true
    - Remove = remove a node from a specific position in the Linked List
        -- accepts an index
        -- if index < 0 or index >= length, return undefined
        -- if index === length - 1 (i.e. last node), use the "pop" method
        -- otherwise, use "get" to access the node at idx - 1
        -- set the next property of (idx - 1) to be the next property of idx
        -- decrement length
        -- return value of removed node
    - Reverse = reverse the Linked List in place
        -- swap the head and tail
        -- create a var called "next"
        -- create a var called "previous"
        -- create a var called "current" and initialize it to the "head" property
        -- loop through the list
        -- set "next" to be current.next
        -- set "next" property on "current" to be "previous"
        -- set "previous" to be the value of "current"
        -- set "current to be the value of "next"
    - BIG OOOOOO of Singly-Linked List
        -- Insert -> O(n)
        -- Remove -> O(1) (beginning) - O(n) (end)
        -- Search -> O(n)
        -- Access -> O(n)
        -- Excel at insertion / deletion at beginning / end relative to arrays

## Doubly Linked List 
    - Almost identical to singly linked lists, except every node has another pointer to the previous node
    - It's great! Except it takes up more memory than a Singly Linked List
    - More memory = more flexibility
    - Pointers for .next and .prev
    - Methods:
        -- PUSH: add a node to the end of the doubly linked list
            -- create new node with a val passed in
            -- check if length is 0 --> new node becomes head & tail 
            -- else, 
                --- take tail and set .next to be new node
                --- set .prev of new node to be the old tail
                --- set tail of list to be new node
            -- add 1 to length
            -- return this
        -- POP: remove a node from the end of the doubly linked list
            -- if no head, return undefined
            -- else, store current tail in var
            -- if length === 1, set head and tail to be null
            -- update the tail to be the previous node
            -- take new tail, and set .next = null
            -- set oldTail's .prev = null
            -- decrement the length
            -- return the val we removed 
        -- SHIFT: remove a node from the beginning of a doubly linked list
            -- if no head, return undefined
            -- else, store current head in var (oldHead)
            -- if length === 1, set head and tail to be null
            -- set head to head.next
            -- set head.prev to null
            -- set oldHead.next to null
            -- increment length
            -- return node old head
        -- UNSHIFT: add a node to the beginning of a doubly linked list
            -- create new node with given value
            -- if no head, make current node head and tail
            -- set this.head.prev to new node
            -- set new node .next to this.head
            -- set this.head to new node
            -- increment length
            -- return list
        -- GET: accessing a node in a doubly linked list by its position
            -- if given idx is < 0 or >= this.length, return null
            -- if idx <= this.length / 2
                -- counter = 0
                -- loop through list starting from beginning
                -- return node once counter === idx
            -- else
                -- counter = this.length - 1
                -- loop through the list starting from the end
                -- return node once counter === idx
        -- SET: replacing the value of a node in a doubly linked list
            -- create a var that represents the result of the GET method at the given index
            -- if GET returns a valid node, set the value of that node to be the given value
            -- return true
            -- else return false

                