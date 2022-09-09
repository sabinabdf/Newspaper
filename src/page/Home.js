import { useEffect, useState } from "react"
import Header from "./Header"
import PreLoader from "./PreLoader"
import Sidebar from "./Sidebar"
import Topnews from "./Topnews"
import Editorial from "./Editorial"
import Entertainment from "./Entertainment"
import Lifestyle from "./Lifestyle"
import PhotoGallery from "./PhotoGallery"
import Religion from "./Religion"
import CommunityNews from "./CommunityNews"
export default function Home() {
    const [news, setNews] = useState([])
    const [isBusy, setBusy] = useState(true)
    useEffect(() => {
        fetch('https://provaati.com/api/get_main_story.php')
            .then(response => response.json())
            .then(data => setNews(data))
            
    }, []);
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('https://provaati.com/api/category_list.php')
            .then(response => response.json())
            .then(data => setCategory(data))
      

    }, []);
    const [national, setNational] = useState([])
    useEffect(() => {
        fetch('https://provaati.com/api/category.php?id=12&limit=50')
            .then(response => response.json())
            .then(data => setNational(data))
            
    }, []);
    const [allNews, setAllNews] = useState([])
    useEffect(() => {
        fetch('https://provaati.com/api/category.php?id=2&limit=50')
            .then(response => response.json())
            .then(data => setAllNews(data))
           
    }, []);
    const [soprts, setSoprts] = useState([])
    useEffect(() => {
        fetch('https://provaati.com/api/category.php?id=6&limit=50')
            .then(response => response.json())
            .then(data => setSoprts(data))
            
    }, []);
    const [international, setInternational] = useState([])
    useEffect(() => {
        fetch('https://provaati.com/api/category.php?id=19&limit=50')
            .then(response => response.json())
            .then(data => setInternational(data))
           
    }, []);
    const [politics,setPolitics] = useState([])
    useEffect(()=>{
        fetch('https://provaati.com/api/category.php?id=22&limit=50')
        .then(response=>response.json())
        .then(data=>setPolitics(data))
        .then(()=>setBusy(false))
    },[])
    if (isBusy) {
        return (<PreLoader />)
    } else {
        return (
            <>
                <div id="fb-root"></div><script async defer crossOrigin="anonymous" src="../../../connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v4.0&appId=2689491844415645&autoLogAppEvents=1"></script>
                <Header data={category} />
                <main>
                    <div className="container">

                        <section>
                            <div className="row">
                                <div className="col-sm-9">
                                    <div className="row">
                                        <div className="col-sm-8 DTopNews MarginTop20">
                                            <div className="col-sm-12 thumbnail">
                                                <a href="#"><img src={`https://provaati.com/media/imgAll/${news[0].ImageBGPath}`} alt="" title="" className="img-fluid img100" /></a>
                                                <div className="caption"><h1><a href="#">{news[0].ContentHeading}</a></h1></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 MarginTop20">
                                            {
                                                news.map((d, i) => {
                                                    if (i > 0) {
                                                        return (
                                                            <div className="DTRNewsList" key={i}>
                                                                <div className="row">
                                                                    <div className="col-sm-5"><a href="#"><img src={`https://provaati.com/media/imgAll/${d.ImageBGPath}`} alt="" title="" className="img-fluid img100" /></a></div>
                                                                    <div className="col-sm-7"><h2><a href="#">{d.ContentHeading}</a></h2></div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }



                                        </div>
                                    </div>
                                    <Topnews national={national} allnews={allNews} soprts={soprts} />
                                </div>
                                {/* sidebar start */}
                                <div className="col-sm-3">

                                    <Sidebar />

                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="HmAnnouncement2"><a href="4/international.html">জাতীয়</a></div>
                                    <div className="DCategoryNews">
                                        <a href="#"><img src={`https://provaati.com/media/imgAll/${national[10].ImageThumbPath}`} alt="#" title="#" className="img-fluid img100" />
                                            <p className="pTopNews">{national[10].ContentHeading}</p></a>
                                        <ul className="DCategoryNewsList">
                                            {
                                                national.map((d, i) => {
                                                   if(i>12 && i<18){
                                                   return( 
                                                    <li className="DCategoryNewsListItem"><a href="#"><i className="fa fa-arrow-circle-right"></i>{d.ContentHeading}</a></li>
                                                   )
                                                   }
                                                })
                                            }


                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="HmAnnouncement2"><a href="2/politics.html">আন্তর্জাতিকি</a></div>
                                    <div className="DCategoryNews">
                                        <a href="#"><img src={`https://provaati.com/media/imgAll/${international[0].ImageThumbPath}`} alt="#" title="#" className="img-fluid img100" />
                                            <p className="pTopNews">{international[0].ContentHeading}</p></a>
                                        <ul className="DCategoryNewsList">
                                            {
                                                international.map((d,i)=>{
                                                    if(i <5){
                                                        return(
                                                            <li className="DCategoryNewsListItem"><a href="#"><i className="fa fa-arrow-circle-right"></i>{d.ContentHeading}</a></li>
                                                        )
                                                    }
                                                })
                                            }
                                           
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="HmAnnouncement2"><a href="3/ecomony.html">রাজনীত</a></div>
                                    <div className="DCategoryNews">
                                        <a href="#"><img src={`https://provaati.com/media/imgAll/${politics[1].ImageThumbPath}`} alt="#" title="#" className="img-fluid img100" />
                                            <p className="pTopNews">{politics[1].ContentHeading}</p></a>
                                        <ul className="DCategoryNewsList">
                                            {
                                                politics.map((d,i)=>{
                                                    if(i > 1 && i<7 ){
                                                        return(
                                                            <li className="DCategoryNewsListItem"><a href="#"><i className="fa fa-arrow-circle-right"></i>{d.ContentHeading}</a></li>

                                                        )
                                                    }
                                                })
                                            }
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                                            
                    <Editorial soprtS={soprts}/>
                    <Entertainment/>
                    <Lifestyle/>
                    <PhotoGallery/>
                    <Religion/>
                   <CommunityNews/>

                </main>

                <footer>
                    <div className="container">
                        <div className="DFooterBG2">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="DFLogo">
                                        <a href="media/common/logo.png"><img src="media/common/logo.png" alt="ajkalnewyork.com" title="ajkalnewyork.com" className="img-fluid img100" /></a>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <p><b>প্রধান সম্পাদক ও প্রকাশক:</b> নাইম হাসান </p>
                                    <p><b>সম্পাদক:</b> মনজুর আহমেদ</p>
                                    <p><b>ঠিকানা : </b>Mohammadpur, Dhaka</p>
                                </div>
                                <div className="col-sm-4">
                                    <p><b>ফোন:</b> 01775566991</p>
                                    <p><b>ফ্যাক্স:</b> 718-865-9130</p>
                                    <p><b>ই-মেইল :</b>yesmin92@gmail.com</p>
                                    <div className="DFSocialLink">
                                        <ul>
                                            <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#" target="_blank"><i className="fa fa-youtube"></i></a></li>
                                            <li><a href="rss/rss.xml" target="_blank"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="DFooterBG3">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-center"><p><span className="En">&copy;</span> ২০২০ | <a href="index.html">সাপ্তাহিক আজকাল</a> কর্তৃক সর্বসত্ব <span className="En">&reg;</span> সংরক্ষিত | উন্নয়নে <a href="http://www.prantiksoft.com/" target="_blank">PRANTIK-SOFT</a></p></div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div id="back_to_top" className="back_to_top on"><span className="go_up"><i className="fa fa-arrow-up"></i></span></div>
            </>
        )
    }
}