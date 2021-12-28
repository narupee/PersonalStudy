1. 테이블의 모든 내용 보기 <br>
   *(asterisk)는 테이블의 모든 컬럼을 뜻함
```
SELECT * FROM Customers;

-- 이와 같이 주석을 달 수 있습니다.
-- 나는 모든걸 가져올거임 커스터머스에서 
-- SELECT : 가져오다(mysql식뜻), * : 테이블 전체 컬럼, Customers : 이 테이블들을
```

2. 원하는 column(열)만 골라서 보기
```
SELECT CustomerName FROM Customers;

SELECT CustomerName, ContactName, Country
FROM Customers;
```

3. 테이블의 컬럼이 아닌 값도 선택할 수 있다 <br>
   아래 구문의 1과 Hello, NULL을 확인
```
SELECT CustomerName, 1, 'Hello', NULL
FROM Customers;

-- 컬럼명 CustomerName 에서 1에 해당하는 문자열 '헬로우'와 
   NULL(비어있는)을 Customers로 부터 가져와라
```

4. 원하는 조건의 row(행)만 걸러서 보기 <br>
   WHERE 구문 뒤에 조건을 붙여 원하는 데이터만 가져올 수 있다
```
SELECT * FROM Orders
WHERE EmployeeID = 3;

-- Orders를 모두 가져와라 무엇을? WHERE(조건)에서 
   EmployeeID(컬럼명)에 해당하는 3번들을 가져와!


SELECT * FROM OrderDetails 
WHERE Quantity < 5;

-- Orde~ls에서 Qu~ty(컬럼명)에서 5 이하인 애들을 모두 가져와!
```

5. 원하는 순서로 데이터 가져오기 <br>
   `ORDER BY 구문`을 사용해서 특정 컬럼을 기준으로 데이터를 정렬<br>
   `구문:` `ASC (오름차순)` , `DESC (내림차순)`
```
SELECT * FROM Customers
ORDER BY ContactName;

-- 아무것도 안쓴 이 상태는 기본적으로 ASC(오름차순)의 기준으로 정렬됨
-- Cust~rs 테이블에서 Cont~Name을 오름차순으로 정렬해줘!

SELECT * FROM Customers
ORDER BY ContactName DESC;

-- 아무것도 안쓴 이 상태는 기본적으로 DESC(내림차순)의 기준으로 정렬됨

SELECT * FROM OrderDetails
ORDER BY ProductID ASC, Quantity DESC;

-- order~ls 테이블에서 ID는 오름차순으로 Quan는 내림차순으로 정렬해줘!
-- ASC를 빼도 오름차순으로 정렬되며, Qu는 그대로 내림차순 정렬됨
   (OR~BY를 쓰면 기본 오름차순 이기 때문에 빼도 오름차순으로 되는 것)
-- DESC를 빼면 기본 오름차순으로 정렬됨
```
6. 원하는 만큼만 데이터 가져오기 <br>
   `LIMIT {가져올 갯수}`또는`LIMIT {건너뛸 갯수}, {가져올 갯수}`를 사용하여, <br>
   원하는 위치에서 원하는 만큼만 데이터를 가져올 수 있다
```
SELECT * FROM Customers
LIMIT 10;

SELECT * FROM Customers
LIMIT 0, 10;

-- LIMIT 에서 0은 건너뛸 갯수, 10은 가져올 갯수를 뜻함

SELECT * FROM Customers
LIMIT 30, 10;

-- 30을 건너뛰고 31부터 10개를 가져옴
```
7. ㅇㅇㅇ <br>
```

```