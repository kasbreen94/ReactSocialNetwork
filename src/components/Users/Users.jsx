// const [data, setData] = useState<UsersType[]>([])
// const [count, setCount] = useState(10)
// const [page, setPage] = useState<number>(1)
// const [totalCount, setTotalCount] = useState<number>(0)
// const [loading, setLoading] = useState<boolean>(true)
// const totalPage = Math.ceil(totalCount / 100)
//
// const getPage = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const n = Number(e.target.value)
//     setPage(n)
// }

// const [followed, setFollowed] = useState<boolean>(false)
// const [expectation, setExpectation] = useState({userId: null as null | number})

// const follow = async (userId: number) => {
//     let res: any = await usersAPI.follow(userId)
//     if (res.data.resultCode === 0) {
//         setFollowed(true)
//     }
// }
//
// const unfollow = async (userId: number) => {
//     let res: any = await usersAPI.unfollow(userId)
//     if (res.data.resultCode === 0) {
//         setFollowed(false)
//     }
// }
//
// const followedUser = async (userId: number) => {
//     setExpectation({userId: userId})
//     let res: any = await usersAPI.getFollowed(userId)
//     setFollowed(res.data)
//     if (res.data === false) {
//         res = await usersAPI.follow(userId)
//     } else {
//         res = await usersAPI.unfollow(userId)
//     }
//     if(res.data.resultCode === 0) {
//         setFollowed(!followed)
//     }
//     setExpectation({userId: null})
// }

// const getUsers = async (page: number) => {
//     const res: any = await usersAPI.getUsers(page)
//     setData(res.data.items)
//     // setPage(prev => prev + 1)
//     setTotalCount(res.data.totalCount)
// }

// const scrollHandler = (e: any ) => {
//     if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
//         && data.length === totalCount) {
//         setLoading(true)
//     }
// }
//
// useEffect(() => {
//     document.addEventListener('scroll', scrollHandler)
//     return () => {
//         document.removeEventListener('scroll', scrollHandler)
//     }
// }, []);



import {useEffect} from "react";

{/*<div className={s.infoPage}>*/}
{/*    <span>Total users: {totalCount}</span>*/}
{/*    <span>Total pages: {totalPage}</span>*/}
{/*    <span>Total users per page: 100</span>*/}
{/*</div>*/}
{/*<div className={s.pagination}>*/}
{/*    {page !== 1 && <button*/}
{/*        onClick={() => setPage(page - 1)} className={s.showMore} disabled={props.loading}>*/}
{/*        PrevPage*/}
{/*    </button>}*/}
{/*    <label>*/}
{/*        Page:*/}
{/*        <input className={s.numberPage} value={page} onChange={getPage}/>*/}
{/*    </label>*/}

{/*    <button*/}
{/*        onClick={() => {setPage(page + 1); setCount(5)}} className={s.showMore} disabled={props.loading}>*/}
{/*        NextPage*/}
{/*    </button>*/}
{/*</div>*/}



{/*<div >*/}
{/*    {count < 100 && <button*/}
{/*        onClick={() => setCount(count + 5)} className={s.showMore} disabled={loading}>*/}
{/*        {loading ? "Loading..." : "Load More"}*/}
{/*    </button>}*/}
{/*    {count === 100 &&*/}
{/*        <div className={s.pagination}>{page !== 1 &&*/}
{/*            <button*/}
{/*                onClick={() => {setPage(page - 1);setCount(5)}}*/}
{/*                className={s.showMore} disabled={props.loading}>*/}
{/*                PrevPage*/}
{/*            </button>}*/}
{/*            <input className={s.showMore} value={page} onChange={getPage}/>*/}
{/*            <button*/}
{/*                onClick={() => {setPage(page + 1); setCount(5)}}*/}
{/*                className={s.showMore} disabled={props.loading}>*/}
{/*                NextPage*/}
{/*            </button>*/}
{/*        </div>}*/}

{/*</div>*/}



// useEffect(() => {
//     if(loading){
//         getUsers(page)
//             .finally(() => setLoading(false))
//     }
// }, []);