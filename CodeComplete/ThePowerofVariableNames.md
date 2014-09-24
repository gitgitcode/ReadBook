##  The Power of Variable Names 变量的命名

### Consideration in choosing good  names 选择好变量名的注意事项
     好的变量名是可读的，易记的和恰如其分的。
###    The most important naming consideration 最重要的命名注意事项

    为变量名时最终的考虑事项是，该命名要完全，准确地描述该变量所代表的事物。
    通常，对变量的描述就是最佳的变量名，这种名字容易阅读，因为其中并不包含晦涩的缩写，同时也没有歧义。
    到期的支票累积额 ： runningTotal，checkTotal；
    高速列车的速度：      velocity，trainVelocity，velocityInMph；
    当前日期：                  currentDate，todaysDate；
    每页的行数：             linesPerPage；
    
###    Problem orientation 以问题为导向

     一个好记得名字反映的通常都是问题，而不是解决方案。要表达的是 'what' 什么，而不是 'how' 如何。在名字中反映问题本身。
    员工数据记录：inputRec ，employeeData
    打印机状态 ：   bitFlag，printerReady
    财务软件：        calcVal，sum
    例子中第一个均比第二个更具计算机语言特征。
    
###    Optimum name length 最适当的名字长度
    
    变量名最佳长度似乎应该介于x 和maximumNamberOfPointsInModernOlympics之间，
    太短无法传达足够的信息，太长有难写同时会是程序的视觉结构变得模糊。
    
    平均名字长度在9到15，主要强调这些名字含义足够清晰。
    Goldilocks-and-the-Three-Bears(金发姑娘与三只小熊）的方法理解如何为变量命名。
    
    太长：numberOfPeopleOnTheUsOlympicTeam
    太短：ntm
    正好：numTeamMembers，teamMemberCount，numSeatsInStadium，seatCount，teamPointsMax，PointsRecord
    
###    The effoect of scope on variable names 作用域对变量的影响

    W.J.Hansen 研究表明 较长的名字适用于很少的用到的变量或者全局变量，而较短的名字则适用于局部变量或者循环变量。
    作为防御式变成策略，避免使用短的变量名。
    对于全局名空间的名字加以限定词。
    为全局可见的类加上带有子系统特种的前缀。用户接口部分的雇员类可以命名为uiEmployee，
    数据库部分的雇员类可以命名为dbEmployee，这样就能把全局命名空间的命名冲突降到最低。
    
###    Computed-Value qualifiers in variable names 变量名中的计算值限定词
    
    总额，平均值，最大值…… total，sum，max，min，record，string，pointer这样的限定词来修改某个名字，要把限定词加到名字的最后。
    优点：变量名中最重要的那部分，即为这一变量赋于主要含义的部分应当位于最前面，这一部分就可以显得最为突出，并会首先被阅读到。
    其次避免了歧义 totalRevenue 和revenueTotal。一致性性可以提高可读性，简化维护工作。
    例外，Num限定词的位置已经是约定俗称的。Num放在变量名的最开始最开始位置代表一个总数：numCustomers表示员工的总数。
    Num放在变量名的结束位置代表一个下表：customerNum表示当前员工的序号。然而由于这样使用Num常常会带来麻烦，为了避开，通常使用
    Count或者Total来代表员工总数，用Inedx来指代某个员工。这样customerCount代表员工总数，customerIndex代表某个特定的员工。
    
###    Common opposites in variable Names 变量名中的常用对仗词
    
    begin/end     fist/last     locked/unlocked          min/max      old/new
    opend/closed     visible/invisible     source/target     source/destination     up/down
    
##   Naming specific types of data 为特定类型的数据命名
     
###     Naming loop indexes  为循环变量命名
     
     循环是一种常见的计算机编程编程特征。i，j，k 约定俗成。  如果在循环外部使用，那么就使用要比i，j，k  更有意义的名字。
     比如读取文件记录的记录数量recordCount 
```     
     java 描述性较好的循环变量名
     recordCount=0；
     while（moreScores（））{
     	score[recordCount] = GetNextScore（）；
     	recordCount++；
     }
     // line useing recordCount
```
     因为代码容易扩充修改并容易忘记i这类变量的具体意义，故有经验的程序员不使用i这样的名字。
     
     导致循环变长的一个原因是出现循的环嵌套使用。
```
     java 嵌套循环中的好的循环变量
     for( teamIndex = 0;teamIndex < teamCount;teamIndex++){
     	for(eventIndex = 0;eventIndex < eventCount[teamIndex];eventIndex++){
     		score[teamIndex][eventIndex]=0;
     	}
     }
```     
     谨慎的使用循环下标变量名可以避免产生下标串话（index cross-talk）的常见问题：i，j用混。
*     score[teamIndex][eventIndex] 比 score[i][j] 确实让人更容易懂。


###     Naming status variables 为状态变量名命名
     
     状态变量用于描述你程序的状态。
     
     为状态变量取一个比flag更好的名字 做好是把标记（flag） 看作状态变量，
     标记的名字不应该含有flag。因为你根本不知道这是标记的什么。
     
     应该使用枚举类型，具体常量，或者用作具名常量的全局变量来对其赋值，而且其值应该与上面这些做比较。
```
     C++
     if( flag )....
     if( statusFlag & 0x0F)...
     if( printFlag == 16)...
     if( computeflag == 0 )...
     
     flag = 0x1;
     statusFlag = 0x80;
     computeflag = 0;
```
     
```
     C++
     if( dataReady )....
     if( characterType & PRINTABLE_CHAR )...
     if( reportTpey == ReportType_Annual )...
     if( recalcNeeded == false )...
     
     dataRaedy = true;
     characterType = ReportType_Annual;
     recalcNeede = false;
```     
*     reportTpey == ReportType_Annual       比  statusFlag = 0x80 更有意义
*     if( reportTpey == ReportType_Annual ) 比  printFlag == 16 更清晰

```
     C++ 声明状态变量
     //values for CharacterType
     
     const int LETTER = 0x01;
     const int DIGIT  = 0x02;
     const int PUNCTUATION = 0x04;
     const int LINE_DRAW = 0x08;
     const int PRINTABLE_CHAR = ( LETTER | DIGIT | PUNCTUATION | LINE_DRAW );
     const int CONTROL_CHARACTER = 0x08;
     
     //value for ReportType
     
     enum ReportType {
        ReportType_Daily,
        ReportTyep_Monthly,
        ReportTyep_Quarterly,
        ReportTyep_Annual,
        ReportTyep_All
     };
```

     如果你发现自己需要猜测某段的含义时候，就该考虑为变量重新命名。
     
###     Naming temporary variables 为临时变量命名
     
     临时变量用于存储计算中的中间结果，作为临时占位符，以及存储内务管理（housekeeping）值。
     通常，临时变量是一个信号，表明程序员还没有完全把问题弄清楚。
     而且，被赋予了一种“临时”状态，程序员更加随意的对待这些变量，更容易随意赋值，出错的可能性大大增加。
     
     警惕“临时”变量 临时性的保存一些值常常是很有必要的。
```     
     C++
     temp = sqrt(b^2 -4*a*c)
     root[0] = ( -b + temp )/( 2*a )
     root[1] = ( -b - temp )/( 2*a )
```     
     temp 没有反应该变量的功能
```     
     C++
     //compute root of a quadratic equation
     //this assumes that ( b^2-4*a*c ) is postive
     descriminant = sqrt(b^2 -4*a*c)
     root[0] = ( -b + descriminant )/( 2*a )
     root[1] = ( -b - descriminant )/( 2*a )
```     
     本质上上面两代码完全相同，但是第二段使用了具有描述性的变量命名(discriminant,判别式)

### 	Naming Enumerated Types 为枚举类型命名
	在使用枚举类型的时候，可以通过使用组前缀，如Color_，Planet_或者Month_来明确表示该类型的成员都属于一个组。
```
Visual Basic
Public Enum Color
	Color_Red
	Color_Green
	Color_Blue
End Enum

Public Enum Planet
	Planet_Earth
	Planet_Mars
	Planet_Venus
End Enum

Public Enum Month
	Month_January
	Month_Februay
	...
	Month_December
End Enum
```
对于枚举类型的两种看法：
用户定义类型，因此枚举名字的格式应该与其他用户定义的类型如类相同。
枚举是一种类型，同时也是常量，因此名字的格式与常量相同。


### Naming constants  为常量命名

	在具名常量时，应该根据常量所表示的含义，而不是常量所具体的数值为该抽象事物命名。
FIVE 是个很糟糕的常量名，CYLES_NEEDED 是个不错的名字。CYLES_NEEDED 可以等于0.5或0.6而FIVE
等于6 ：（ 。同样的，BAKERS_DOZEN是个糟糕的变量名，而DUNUTS_MAX很不错。

## The Power of Naming Conventions 命名规则的力量

	有效的标准是你所能掌握的最强到的工具之一。

### why have conventions 为什么要有规则

	命名规则可以带来的好处。
*	要求你更多地按规矩行事。
	通过一项全局决策而不是做许多局部决策，你可以集中精力关注代码的重要特征。

*      有助于在项目中间传递知识。名字的相似性能让你更容易，更自信地理解那些部署系的变量原本应该是做什么的。
*       有助于你在新项目中更快速地学习代码。
*       有助于减少名字增生（name proliferation）。再没有规则的情况下，很容易给一个对象起两个不同的名字。但是以后他人阅读时会造成困惑。
*       弥补编程语言的不足之处。可以用规则来效仿具名常量和枚举类型。规则可以根据局部数据，类数据以及全局数据的不同而有所差别，并且可以包含编译器不直接提供的类型信息。
*       强调相关变量之间的关系。如果编程语言不支持对象，可以使用命名规则来予以补充。address,phone,name 这样的名字不能表明这些变量是否关联。但是假设你决定所有的员工数据变量都应该以Employee作为前缀则，employeeAddress,employeePhone,employeeName就会毫无疑问地表名这些变量是彼此相关的，从而弥补了编程语言的不足。

       关键之处在于，采用任何一项规则都要好于没有规则。规则的存在为你的代码增加了结构，减少了你需要的考虑的事情。




