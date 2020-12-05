import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import styles from './css/MyProfile.module.css'
import UserInfo from '../components/myProfile/UserInfo'
import Axios from 'axios'
import github_logo from '../assets/icon/myProfile/icon_github@3x.png'
import page_website from '../assets/icon/myProfile/icon_website@3x.png'

const MyProfile = () => {
    const sectionName = "기본정보"

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async() => {
            setLoading(true);
            const res = await Axios.get('https://jsonplaceholder.typicode.com/users');
            setUser(res.data[0]);
            setLoading(false);
        }
        fetchUser();
    },[])
    //console.log(user);

    return (
        <div className = {styles.container}>
            <Header/>
            <div className = {styles.rowBox /*Body*/}>
                <div className = {styles.title}>MY PROFILE</div>
                <div className = {styles.editProfile}>프로필 수정하기</div>
            </div>
            <div className = {styles.rowBox2}>
                <div className = {styles.nameBox}>
                    <div className = {styles.name}>Jyami</div>
                    <div className = {styles.jobname}>Backend Developer</div>
                </div>
                <div className = {styles.profileCircle}></div>
                <div className ={styles.pageBox}>
                    <a target="_blank" rel="noreferrer" href= "https://github.com/">
                        <img src={page_website} alt="page logo"/>
                    </a>
                        <div className = {styles.logoname}>웹사이트</div> 
                    
                </div>
                <div className ={styles.pageBox2}>
                    <a target="_blank" rel="noreferrer" href= "https://github.com/">
                        <img src={github_logo} alt="github logo"/>
                    </a>
                        <div className = {styles.logoname}>Github</div> 
                    
                </div>
            </div>
            <div className = {styles.nav}>
                    <div className = {sectionName === "기본정보" ? styles.navNow : styles.navDefault}>기본 정보</div>
                    <div className = {sectionName === "나의커밋정보" ? styles.navNow : styles.navDefault}>나의 커밋 정보</div>
                    <div className = {sectionName === "통계" ? styles.navNow : styles.navDefault}>통계</div>
            </div>
            <div className = {styles.line}></div>
            <UserInfo loading = {loading} user = {user} />
            {/*<UserInfo /> userInfo 불러와서 뿌려야야/ */}

        </div>
        )
}

export default MyProfile;