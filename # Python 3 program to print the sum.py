# Python 3 program to print the sum 
# of all numbers in range L and R 

# Function to return the sum of 
# all odd natural numbers 
def sumOdd(n):
	terms = (n + 1)//2
	sum1 = terms * terms
	return sum1

# Function to return the sum 
# of all odd numbers in range L and R 
def suminRange(l, r):
	return sumOdd(r) - sumOdd(l - 1)
	
# Driver code
l = 2; r = 20
print("Sum of odd natural number",
	"from L to R is", suminRange(l, r))
# This code is contributed by Shrikant13
