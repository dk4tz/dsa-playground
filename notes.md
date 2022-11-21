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

## Sorting Algorithms
    - Rearrage the items in a collection (e.g. array) so that items are in some kind of order
        -- numbers --> smallest to largest
        -- names --> alphabetically
        -- movies --> based on release year
    - Built-in JavaScript Sort (array.sort())
        -- default (no params) sorts by unicode character #
        -- accepts an optional comparator function (what do we want to sort by?)
        -- comparator function looks at a pair of elements and determines their sort order based on the return value
    - Bubble Sort
        -- largest values will bubble to the top one at a time
        -- compare two adjacent values and swap if the left value is larger
        -- O(n) or O(n^2) without optimizations --> not so efficient or commonly used
        -- pseudocode:
            --- initialize noSwaps
            --- start looping through the array w a variable called "i" coming from the end to the beginning. noSwaps = true
            --- start an inner loop w a variable called "j" from the beginning until j = i - 1
            --- if arr[j] > arr[j+1] --> swap those two vals (create a temp var... temp = arr[j], arr[j] = arr[j+1], arr[j+1] = temp) --> set noSwaps = false
            --- if noSwaps, break (we're sorted)
    - Selection Sort
        -- similar to bubble sort, but instead of placing large values at the end, we put small values at the beginning
        -- find min value and swap with index 0... 
        -- O(n^2) --> not especially effective or commonly used
        -- pseudocode:
            -- store first element as min
            -- if next item is smaller, update min and continue to end of the array
            -- if the min value is not the same index as where you started, swap those two values
            -- repeat with the next element in the array, until the array is sorted


    

