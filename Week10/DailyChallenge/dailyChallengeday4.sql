--In this puzzle you have to go through all the SQL queries and provide us the output of the requests before executing them (ie. make an assumption).
--Then, execute them to make sure you were correct.

Q1. What will be the OUTPUT of the following statement?

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );

    -- response: It is going to be 0, because it is 

--     SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );
 
    -- response: I think the response is going to be 3, because there are 3 values that are not id = 5;
    -- It was actually 2, becaue it doest count null


--  SELECT COUNT(*) 
--  FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
    
    --response:  think the outcome will be 0, because comparisson to null, is undefined and will return 0.
    


-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

 -- response: i think it will be 2, because it has  2 values that do not match the values of SecondTab
