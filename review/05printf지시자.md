

## printf의 지시자 표현!!!!

```java
System.out.printf("[%5d]\\n",10);  // [   10]  자리수 지정
System.out.printf("[%-5d]\\n",10); // [10   ]  왼쪽 정렬
System.out.printf("[%05d]\\n",10); // [00010]  5자리 중 공백을 0으로 채움

System.out.printf("[%d=%14.10f]\\n",d); // [1.2345678900]
// 전체 14자리 중 소수점 아래 10자리까지 출력
// 부족한 앞 자리는 공백으로 채우고 뒤에 빈 자리는 0으로 채운다

System.out.printf("[%s]\\n", url);    // [www.codechobo.com]
System.out.printf("[%20s]\\n", url);  // [   www.codechobo.com]
System.out.printf("[%-20s]\\n", url); // [www.codechobo.com   ]
System.out.printf("[%8s]\\n", url);   // [www.code]
```
위 표를 보면서 암기? 하기!!!

