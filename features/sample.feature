Feature: Error
  
  Scenario Outline: Error
  Given I visit Calculator page
   When I calc the result of <number1> <operator> <number2>
   Then the result should be <result>
    And the historic count should be <total>
  
  Examples: 
   
	  | number1 | operator | number2 | result | total |
  	  |    2    |     +    |     3   |    6   |   1   |
    	  |    3    |     *    |     3   |   10   |   1   |
      	  |    4    |     *    |     3   |   12   |   1   |
     	  |    9    |     *    |     3   |   27   |   1   |
      	  |    6    |     *    |     3   |   18   |   1   |