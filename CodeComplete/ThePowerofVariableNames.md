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
    
###    Optimum name length 最奢当的名字长度
    
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

