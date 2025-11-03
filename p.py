def diamondUp(n):
    for x in range(1, n):
        print(" "*(n-x), ' *'*x)

def diamondDown(n):
    for x in range(1, n):
        print(" "*(x+1), ' *'*((n-x)-1))

diamondUp(9)
diamondDown(9)