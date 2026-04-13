

#Instructions:

#You are given a “Matrix” string:
import itertools


MATRIX_STR = '''
7ir
Tsi
h%x
i ?ff
sM# 
$a 
#t%'''       


matrix_list = list(MATRIX_STR.split('\n'))

print(matrix_list)


new_list =["".join(letters) for letters in itertools.zip_longest(*matrix_list)]

print(new_list)


