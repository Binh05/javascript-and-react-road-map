import Toggle from "@components/Toggle";
import { useEffect, useState } from "react";
import studentsData from "./data.json";

export default function JSBase() {
  console.clear();
  {
    /* var let const */
    // function varFun() {
    //   if (true) {
    //     var a = 10;
    //   }
    //   console.log(a);
    // }
    // varFun();
    // function letFun() {
    //   for (let i = 0; i < 6; i++) {
    //     setTimeout(() => {
    //       console.log(i);
    //     }, 1000);
    //   }
    // }
    // letFun();
  }

  {
    /* switch/case */
    // const switchCaseFunction = () => {
    //   console.log("switch/case test");
    //   const a = 4;
    //   switch (a) {
    //     case 1:
    //       console.log("1");
    //       break;
    //     case 2:
    //       console.log("2");
    //       break;
    //     case 3:
    //     case 4:
    //       console.log("lon hon");
    //       break;
    //     default:
    //       return a;
    //   }
    // };
    // switchCaseFunction();
  }

  {
    /* For ... in ... */
    // const myInfo = {
    //   name: "Binh dep trai",
    //   age: 18,
    //   salary: "10000",
    // };
    // for (let key in myInfo) {
    //   console.log(myInfo[key]);
    // }
  }

  {
    /* for of */
  }

  // const langue = ["PHP", "Java", "C++"];

  // for (const l of langue) {
  //   console.log(l);
  // }

  {
    /* rest parameter */
  }

  // function restFun(...rest) {
  //   console.log(rest);
  // }

  // restFun("binh dep trai", true);

  {
    /** Tao Object **/
    // const Person = {
    //   name: "Binhh",
    //   salary: "$10000",
    // };
    // const Person = new Object();
    // Person.name = "Binh";
    // Person.salary = "$10000";
    // function Person(name, salary) {
    //   this.name = name;
    //   this.salary = salary;
    // }
    // class Person {
    //   constructor(name, salary) {
    //     this.name = name;
    //     this.salary = salary;
    //   }
    // }
    // const proto = { type: "human" };
    // const opro = Object.create(proto);
    // opro.name = "Binh";
    // opro.salary = "$10000";
    // console.dir(opro);
    // const Person = {
    //   name: "Binh",
    //   age: 18,
    //   salary: "$10000",
    // };
    // let keys = Object.keys(Person);
    // console.log(keys);
    // let values = Object.values(Person);
    // console.log(values);
    // let entries = Object.entries(Person);
    // for (const [key, value] of entries) {
    //   console.log(`${key}: ${value}`);
    // }
  }

  {
    /* Array method */
  }

  // const [students, setStudents] = useState([]);
  // useEffect(() => {
  //   setStudents(studentsData);
  // }, []);

  // useEffect(() => {
  //   console.log(students);
  // }, [students]);

  // const mapMethod = () => {
  //   students.map((student) => {
  //     console.log(`${student.id}: ${student.name}`);
  //   });
  // };
  // mapMethod();

  // const filterStudents = students.filter(
  //   (student) => student.gender === "female",
  // );
  // console.dir(filterStudents);

  // const findStudent = students.find((student) => student.id === 5);
  // console.dir(findStudent);

  {
    /* every method kiểm tra tất cả sinh viên có điểm toán > 5 không */
  }
  // const everyMethod = students.every((student) => student.scores.math > 5);
  // console.dir(everyMethod);

  {
    /* some method kiểm tra có sinh viên nào trên 22 tuổi ko */
  }
  // const someMethod = students.some((s) => s.age > 22);
  // console.log(someMethod);

  // const reduceMethod = students
  //   .map((s) => s.scores.math)
  //   .filter((s) => s > 5)
  //   .reduce((sum, s) => sum + s, 0);
  // console.log(reduceMethod);

  // const int = [1, 2, 3, 4];
  // int.splice(1, 2, 99, 100, 45, 66);
  // console.log(int);

  {
    /* Destructuring */

    // const arr = [1, 2, 3, 4];

    // const [a, , , b, c = 100] = arr;
    // console.log(a);
    // console.log(b);
    // console.log(`a + b = ${a + b}`);
    // console.log(`new array: ${c}`);

    {
      /*const person = { name: "Binh", age: 18 };

  const { name, age } = person;
  console.log(`name: ${name}, age: ${age}`);

  const { name: n, age: a } = person;
  console.log(`name: ${n}, age: ${a}`);*/
    }

    // const user = { id: 1, info: { name: "Binh", age: 18 } };
    // const {
    //   info: { name: n, age: a },
    // } = user;
    // console.log(n, a);

    // function printInfo({ name, age }) {
    //   console.log(`name: ${name}, age: ${age}`);
    // }
    // printInfo({ name: "Binh", age: 18 });
  }
  {
    /* Spread */

    {
      /*const arr1 = [3, 4, 5];
    const arr2 = [1, 2];

    const arr3 = [...arr1, ...arr2];
    console.log(arr3);

    const arr4 = [4, ...arr1, 4];
    console.dir(arr4);*/
    }

    // const obj1 = { a: 1, b: 2 };
    // const obj2 = { c: 3 };

    // const obj3 = { ...obj1, ...obj2 };
    // console.dir(obj3);

    // const obj4 = { ...obj1, b: 20 };
    // console.dir(obj4);
  }

  {
    // Bai tap array co ban
    {
      /*const debai =
      "\t numbers = [10, 20, 30, 40, 50]\n" +
      "1. Dùng destructuring để gán 10 vào biến a và 20 vào biến b.\n" +
      "2. Dùng destructuring để lấy phần tử đầu tiên vào first, còn lại vào rest.\n" +
      "3. Dùng spread để tạo một mảng mới copy từ numbers.\n" +
      "4. Dùng spread để tạo một mảng mới có thêm số 60 vào cuối.\n" +
      "5. Dùng spread để tạo một mảng mới có thêm số 5 vào đầu.\n" +
      "6. Dùng destructuring để bỏ qua 20 và lấy 10 và 30.";
    console.log(debai);

    const numbers = [10, 20, 30, 40, 50];
    // 1.
    const [a, b] = numbers;
    console.log(`1. a: ${a}, b: ${b}`);
    // 2.
    const [first, ...rest] = numbers;
    console.log(`2. first:`, first, `rest:`, rest);
    // 3.
    const newArr = [...numbers];
    console.log("3. new Array: ", newArr);
    // 4.
    const arr4 = [...numbers, 60];
    console.log("4. Mảng mới có thêm số 60 vào cuối:", arr4);
    // 5.
    const arr5 = [5, ...numbers];
    console.log("5. Mảng mới có thêm số 5 vào đầu:", arr5);
    // 6.
    const [c, , d] = numbers;
    console.log("6. bo qua 20:", c, d);*/
    }
    // Object cơ bản
    {
      const debai =
        `person = {
      name: "Binh",
      age: 25,
      country: "VietNam",
    };\n` +
        "7. Dùng destructuring để lấy name và age.\n" +
        "8. Dùng destructuring để đổi tên biến country thành nation.\n" +
        '9. Dùng destructuring với giá trị mặc định: lấy job, nếu không có thì gán "Unknow". \n' +
        '10. Dùng spread để tạo object mới thêm thuộc tính job: "Developer".\n' +
        "11. Dùng spread để tạo object mới nhưng thay age = 30.\n" +
        "12. Dùng spread để copy object person.\n";

      /*console.log(debai);

    const person = {
      name: "Binh",
      age: 25,
      country: "VietNam",
    };

    const { name, age } = person;
    console.log("7. name:", name, "age:", age);

    const { country: nation } = person;
    console.log("8. Rename country:", nation);

    const { job = "Unknown", ...rest } = person;
    console.log("9. Job: ", job);

    const newObj = { ...person, job: "Developer" };
    console.log("10. New object:", newObj);

    const object11 = { ...person, age: 30 };
    console.log("11. New object:", object11);

    console.log("12. Copy object person:", { ...person });*/
    }
    // Mảng các object
    {
      const debai =
        `     employees = [
        { id: 1, name: "John", salary: 10000 },
        { id: 2, name: "Mary", salary: 12000 },
        { id: 3, name: "Tom", salary: 9000 }
      ];\n` +
        "13. Dùng destructuring để lấy name và salary của nhân viên đầu tiên.\n" +
        "14. Dùng destructuring để lấy id của nhân viên thứ hai.\n" +
        "15. Dùng map + spread để tăng salary của tất cả nhân viên thêm 1000.\n" +
        '16. Dùng spread để tạo mảng mới có thêm nhân viên { id: 4, name: "Anna", salary: 11000 }.\n' +
        "17. Dùng map + spread để đổi salary của Tom thành 9500.\n" +
        "18. Dùng filter + spread để tạo mảng mới bỏ nhân viên John.\n";
      /*console.log(debai);

      const employess = [
        { id: 1, name: "John", salary: 10000 },
        { id: 2, name: "Mary", salary: 12000 },
        { id: 3, name: "Tom", salary: 9000 },
      ];
      // 13.
      const [{ name, salary }] = employess;
      console.log("13. Nhân viên đầu tiên: name:", name, "salary:", salary);
      // 14.
      const [, { id }] = employess;
      console.log("14. id của nhân viên thứ hai:", id);
      // 15.
      const inceSalary = employess.map((e) => ({
        ...e,
        salary: `${e.salary + 1000}`,
      }));
      console.log("15. New salary:", inceSalary);
      // 16.
      const addEm = [...employess, { id: 4, name: "Anna", salary: 11000 }];
      console.log("16. Add new employess", addEm);
      // 17.
      const updateSalaryTom = employess.map((e) => ({
        ...e,
        salary: e.name === "Tom" ? 9500 : e.salary,
      }));
      console.log("17. update Tom's salary:", updateSalaryTom);
      // 18.
      const deleteJohn = employess.filter((e) => e.name !== "John");
      console.log("18. Mảng mới không có John:", deleteJohn);*/
    }
    // Object lồng nhau
    {
      const debai =
        `     const user = {
        id: 101,
        profile: {
          username: "coder123",
          email: "coder@example.com",
          address: {
            city: "Hanoi",
            zip: 100000
          }
        }
      };\n` +
        "19. Dùng destructuring để lấy username.\n" +
        "20. Dùng destructuring để lấy city.\n" +
        "21. Dùng destructuring để lấy zip và đổi tên biến thành postalCode.\n" +
        '22. Dùng spread để tạo object mới nhưng đổi city thành "Saigon".\n' +
        '23. Dùng spread để thêm thuộc tính phone: "0123456789" vào profile.\n' +
        "24. Dùng spread để copy toàn bộ object user.\n";
      /*console.log(debai);

      const user = {
        id: 101,
        profile: {
          username: "coder123",
          email: "coder@example.com",
          address: {
            city: "Hanoi",
            zip: 100000,
          },
        },
      };
      // 19.
      const {
        profile: { username },
      } = user;
      console.log("19. Username:", username);
      // 20.
      const {
        profile: {
          address: { city },
        },
      } = user;
      console.log("20. City: ", city);
      // 21.
      const {
        profile: {
          address: { zip: postalCode },
        },
      } = user;
      console.log("21. Đổi tên zip thành postalCode:", postalCode);
      // 22.
      const renameSaiGon = {
        ...user,
        profile: {
          ...user.profile,
          address: {
            ...user.profile.address,
            city: "Saigon",
          },
        },
      };
      console.log(
        '22. Dùng spread để tạo object mới đổi city thành "Saigon"',
        renameSaiGon,
      );
      // 23.
      const addPhone = {
        ...user,
        profile: {
          ...user.profile,
          phone: "0123456789",
        },
      };
      console.log(
        '23. Thêm thuộc tính phone: "0123456789" vào profile.',
        addPhone,
      );
      // 24.
      const copyUser = user;
      console.log("24. Copy user:", copyUser);*/
    }
    // Kết hợp Array + Object
    const debai =
      `   const courses = [
      { title: "JavaScript", duration: 40, teacher: { name: "Mr A", exp: 5 } },
      { title: "Python", duration: 50, teacher: { name: "Ms B", exp: 3 } },
    ];\n` +
      "25. Dùng destructuring để lấy title của khóa học đầu tiên.\n" +
      "26. Dùng destructuring để lấy name của teacher trong khóa học thứ hai.\n" +
      '27. Dùng spread để thêm một khóa học mới { title: "React", duration: 30, teacher: { name: "Mr C", exp: 2 } }.\n' +
      "28. Dùng map + spread để tăng duration của tất cả khóa học thêm 10.\n" +
      "29. Dùng spread để tạo mảng mới, trong đó exp của Mr A tăng từ 5 → 6.\n" +
      "30. Dùng destructuring để lấy duration của cả hai khóa học và in ra tổng.\n";
    console.log(debai);

    const courses = [
      { title: "JavaScript", duration: 40, teacher: { name: "Mr A", exp: 5 } },
      { title: "Python", duration: 50, teacher: { name: "Ms B", exp: 3 } },
    ];
    // 25.
    const [{ title }] = courses;
    console.log("25. Title của khóa học đầu tiên:", title);
    // 26.
    const [
      ,
      {
        teacher: { name },
      },
    ] = courses;
    console.log("26. Name của teacher trong khóa học thứ hai:", name);
    // 27.
    const newCourses = [
      ...courses,
      { title: "React", duration: 30, teacher: { name: "Mr C", exp: 2 } },
    ];
    console.log("27. Thêm một khóa học mới:", newCourses);
    // 28.
    const increDuration = courses.map((c) => ({
      ...c,
      duration: c.duration + 10,
    }));
    console.log(
      "28. Tăng duration của tất cả khóa học thêm 10:",
      increDuration,
    );
    // 29.
    const increExp = courses.map((c) => ({
      ...c,
      teacher: {
        ...c.teacher,
        exp: c.teacher.name === "Mr A" ? c.teacher.exp + 1 : c.teacher.exp,
      },
    }));
    console.log("29. exp của Mr A tăng từ 5 → 6:", increExp);
    // 30.
    const [{ duration: duration1 }, { duration: duration2 }] = courses;
    console.log("30. Tổng duration của cả hai khóa học", duration1 + duration2);
  }

  return (
    <Toggle title={"JavaScripts Base List"}>
      <Toggle size={2} title="var const let">
        <h3>- Var</h3>
        <p>Function scope</p>
        <p>Có thể khai báo lại(re-declare)</p>
        <p>Có thể gán lại giá trị(re-assign)</p>
        <p>Hoisting</p>
        <h3>- Let</h3>
        <p>Block scope</p>
        <p>Không thể khai báo lại(re-declare)</p>
        <p>
          Không thể gán lại giá trị(re-assign). Tuy nhiên với array hoặc object
          const chỉ không cho phép thay đổi địa chỉ trỏ tới ví dụ như không thẻ
          gán const array/object cho một array/object khác nhưng có thể chỉnh
          sửa bên trong array/object như thêm, sửa giá trị, thuộc tính.
        </p>
        <p>Hoisting nhưng bị vào dead zone</p>
      </Toggle>
      <Toggle title="Kieu du lieu" size={2}>
        <p>string, number, boolen, null, undefined, object</p>
      </Toggle>
      <Toggle title="Toan tu" size={2}>
        <p>- So sanh: == ===</p>
        <p>
          - Logic: && || ??(trả về vế phải nếu vế trái null/undefined vd null ??
          5)
        </p>
        <p>- 3 Ngôi: (...) ? ... : ...</p>
      </Toggle>
      <Toggle title="Dieu kien" size={2}>
        <p>if/else, switch/case, for, while, do-while</p>
        <Toggle title="for" size={3}>
          <h3 className="font-bold">Gồm: for, for in, for of</h3>
          <p>- for (let i = 0; i{"<"}10; i++)</p>
          <p>
            - <span className="font-bold">for/in:</span> dùng để lặp qua key của
            đối tượng. Không nên dùng cho array hay string do không đảm bảo thứ
            tự, index là chuỗi, dễ lẫn thuộc tính, khó xử lý unicode trong
            string
          </p>
          <p>
            EX: const myInfo = {"{"} name: "Binh dep trai", age: 18 {"}"}
          </p>
          <p>for (let key in myInfo) {"{}"}</p>
          <p>
            <span className="font-bold">- for of:</span> Dùng để duyệt qua giá
            trị iterable (array, string, map, set NodeList)
          </p>
        </Toggle>
      </Toggle>
      <Toggle title="function" size={2}>
        <strong>Function gồm: declaration, expression, arrow function</strong>
        <p>
          <span className="font-bold">- Declaration Function: </span>ex:
          function DeFun() {"{}"} - Có hosting, có thể gọi trước khi khai báo
        </p>
        <p>
          <span className="font-bold">- Expression Function: </span>
          ex: const ExFun = function()/function NameFunction()/() ={">"} {"{}"}
        </p>
        <p>
          <span className="font-bold">- Arrow Function: </span>ex: const
          arrowFun = () ={">"} {"{}"} - Có thể bỏ dấu () và {"{}"} nếu có ít
          tham số và kết quả ngắn gọn
        </p>
        <Toggle title="Tham so" size={3}>
          <strong>Default / rest parameters</strong>
          <br />
          <strong>- Default parameters: </strong>
          <br />
          ex: <code>function Tmp(name = "Guest") {"{}"}</code>
          <br />
          <strong>- Rest parameters: </strong>
          <p>
            rest parameters gom nhóm các tham số còn lại thành 1 mảng (có thể
            dùng array method như map, reducer)
          </p>
          <code>function nameFunction(name, ...info)</code>
          <p>Lưu ý: Chỉ có 1 rest parameters và phải đứng sau cùng.</p>
        </Toggle>
      </Toggle>
      {/** Object */}
      <Toggle title="Object" size={2}>
        <p>
          <strong>- Tao object:</strong> {"{}"}, new Object(), class,
          constructor, Object.create
        </p>
        <p>
          <strong>- Truy cap Object:</strong> . (person.name) / []
          (person["name"])
        </p>
        <p>
          <strong>- Them hoac thay doi thuoc tinh:</strong> obj.name/obj["name"]
          = "Mike" (Neu key chua co - tao moi; Neu key da ton tai - cap nhap)
        </p>
        <p>
          <strong>- Xoa Object: </strong>delete obj.age
        </p>
        <p>
          <strong>- Object.keys/values/entries: </strong>
        </p>
        <p>Object.keys: lay key cua obj</p>
        <p>Object.values: lay gia tri cua obj</p>
        <p>Object.entries: Lay key va gia tri cua obj</p>
      </Toggle>
      {/* Array method */}
      <Toggle title="Array" size={2}>
        <Toggle title="Array method" size={3}>
          <p>
            <strong>
              - Array method: filter, find, some, every, map, reduce
            </strong>
          </p>
          <p>
            <strong>- filter() -</strong> lọc dữ liệu
          </p>
          <p>
            <strong>- find() -</strong> Trả về giá trị đầu tiên thỏa điều kiện
          </p>
          <p>
            <strong>- some() -</strong> Trong 1 mảng ví dụ tag = ['AAA', 'BBB',
            'CCC'] student.tags.some(tag ={">"} tag === 'BBB') nếu đúng return
            true, ngược lại false
          </p>
          <p>
            <strong>- every() -</strong> Trong 1 mảng ví dụ tag = ['AAA', 'BBB',
            'CCC'] student.tags.some(tag ={">"} tag === 'BBB') nếu tất cả mảng
            là 'BBB' return true, ngược lại false
          </p>
          <p>
            <strong>- map() -</strong> Tạo ra và trả về 1 mảng mới.
          </p>
          <p>
            <strong>- reduce() -</strong> Nhận 2 tham số là callback và
            constructor. Callback nhận 4 giá trị: accumlate (tích lũy), 3 tham
            số như các callback của các hàm khác. Constructor là giá trị khởi
            tạo ban đầu của accumlate reducer(callback, constructor)
          </p>
          <p>
            <strong>vd Tính tổng:</strong> array.reduce((acc, curr) ={">"} acc +
            curr, 0)
          </p>
        </Toggle>
        <Toggle title="Thao tác với mảng" size={3}>
          <p>
            <strong>
              Các hàm: push(), pop(), shift(), unshift(), slice(), splice()
            </strong>
          </p>
          <p>
            <strong>- push():</strong> Thêm cuối mảng
          </p>
          <p>
            <strong>- pop():</strong> Xóa cuối mảng
          </p>
          <p>
            <strong>- shift():</strong> xóa đầu mảng
          </p>
          <p>
            <strong>- unshift():</strong> Thêm đầu mảng
          </p>
          <p>
            <strong>- slice(start, end):</strong> copy 1 phần mảng // {"["}
            start, end)
          </p>
          <p>
            <strong>- splice(index, xóa, chèn):</strong> splice(1, 2, 99, 100)
            // tại index 1 xóa 2 phần tử thêm 99 100 ([1, 2, 3, 4] -{">"} [1,
            99, 100, 4])
          </p>
        </Toggle>
      </Toggle>
      <Toggle title="destructuring & spread" size={2}>
        <p>
          <strong>- Destructuring:</strong> trích xuất giá trị từ array/object
          và gán chúng vào các biến riêng lẻ
        </p>
        <p>
          <strong>- Spread:</strong> trải phẳng - copy 1 array/object để tạo
          thành array/object mới
        </p>
        <p>
          <strong>- Ex:</strong>cho arr = [1, 2, 3] newArr = [arr, 4] sẽ tạo ra
          array mới với newArr[0] = arr còn newArr[1] = 4. newArr = [...arr, 4]
          sẽ tạo ra newArr với 4 phần tử là 1, 2, 3, 4
        </p>
        <Toggle title="Bài tập destructuring & spread" size={3}>
          <code>const numbers = [10, 20, 30, 40, 50];</code>
          <ol>
            <li>Dùng destructuring để gán 10 vào biến a và 20 vào biến b.</li>
            <li>
              Dùng destructuring để lấy phần tử đầu tiên vào first, còn lại vào
              rest.
            </li>
            <li>Dùng spread để tạo một mảng mới copy từ numbers.</li>
            <li>Dùng spread để tạo một mảng mới có thêm số 60 vào cuối.</li>
            <li>Dùng spread để tạo một mảng mới có thêm số 5 vào đầu.</li>
            <li>Dùng destructuring để bỏ qua 20 và lấy 10 và 30.</li>
          </ol>
        </Toggle>
      </Toggle>
    </Toggle>
  );
}
