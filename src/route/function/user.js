import axios from "axios";

/* 
เข้าถึงด้วย useSelector 'react-redux'

    const user = useSelectior((state) =>{
        ...state 
    })

    const [data , setData] = useState([])

    useEffect (()=>{
        loadData(user.token) 
    },[]);

    const loadData = (authtoken) => {
// listUser import function/user
        listUser(authtoken)
        .then(res => {
            setData(res.data)
        }).catch(err=>{
            clg(err)
        })
    }

    return (
        <>
        // Loop List User เอาไว้ใช้เวลาแก้ไขข้อมูล User
        {data.map((item , index)=>{
            <div>
            <h1>{item.username}</h1>
            </div>
        })}
        </>
    )
*/

export const listUser = async (authtoken) => {
  return await axios
    .get(
      "localhost:8080/api/users",
      {},
      {
        headers: {
          authtoken,
        },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("CHECK FALSEBACK ---->", err);
    });
};

export const readUser = async (authtoken) => {
  return await axios.get(process.env.REACT_APP_API + "/user/:id", {
    headers: {
      authtoken,
    },
  });
};
