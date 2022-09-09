import { useEffect, useState } from "react"

export default function Header(props) {
    const [data,setData]=useState(props.data)
    useEffect(()=>{
        setData(data)
    },[])
    return (
        <header>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <div id="headerTop1">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 text-left DHeaderDate">ঢাকা, ২০২২-২২-০১ | ২৫&nbsp;কার্তিক, &nbsp;১৪২৭</div>
                        <div className="col-sm-8 text-right DSocialLink">
                            <a href="#"><i className="fa fa-align-left"></i> এই সপ্তাহের ভিউ</a>&nbsp;&nbsp;
                            <a href="#" target="_blank" title="Find us on Facebook"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>&nbsp;&nbsp;
                            <a href="#" target="_blank" title="Visit our Youtube Channel"><i className="fa fa-youtube" aria-hidden="true"></i></a>&nbsp;&nbsp;
                            <a href="#" target="_blank" title="Subscribe our Twitter page"><i className="fa fa-twitter" aria-hidden="true"></i></a>&nbsp;
                            <a href="rss/rss.xml" target="_blank" title="Subscribe our RSS Feed"><i className="fa fa-rss" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container MobileHide">
                <div className="row" id="headerTop2">
                    <div className="col-sm-3 DHeaderLogo"><a href="index.html"><img src="media/common/logo.png" alt="ajkalnewyork.com" title="ajkalnewyork.com" className="img-fluid img100" /></a></div>
                    <div className="col-sm-9 DHeaderRight">
                        <div className="row">
                            <div className="col-sm-9">
                                <div className="row DScroll">
                                    <div className="col-sm-1 DPadding0">সর্বশেষ:&nbsp;</div>
                                    <div className="col-sm-11 DPadding0">
                                        <marquee direction="left" speed="normal" scrollamount="4" behavior="loop" onMouseOver="this.stop();" onMouseOut="this.start();">
                                            <span><i className="fa fa-square"></i> নির্বাচনি জনসভায় যোগ দিতে সিলেটে শেখ হাসিনা, হযরত শাহজালাল (রহ.)-এর মাজার জিয়ারত করেছেন</span><span><i className="fa fa-square"></i> জাতীয় প্রতীক ভাসমান শাপলার নকশাকার মোহাম্মদ ইদ্রিস মারা গেছেন (ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন)</span><span><i className="fa fa-square"></i> নৌকায় ভোট চাওয়ায় সাতক্ষীরার কলরোয়া থানার ওসি প্রত্যাহার</span><span><i className="fa fa-square"></i> সর্বস্তরের শ্রদ্ধা নিবেদনের জন্য চলচ্চিত্র নির্মাতা আমজাদ হোসেনের মরদেহ নেয়া হয়েছে কেন্দ্রীয় শহীদ মিনারে</span>
                                        </marquee>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="DHeaderSearch">
                                    <div className="form-group has-search">
                                        <span className="fa fa-search form-control-feedback"></span>
                                        <input type="text" className="form-control" placeholder="Search" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container MobileShow Padding0">
                <div className="row" id="headerTop2">
                    <div className="col-sm-12 DHeaderLogo" align="center"><a href="index.html"><img src="media/common/logo.png" alt="ajkalnewyork.com" title="ajkalnewyork.com" /></a> <span className="Experiment"></span></div>
                </div>
                <div className="row DScroll">
                    <div className="col-sm-1 DPadding0">সর্বশেষ:&nbsp;</div>
                    <div className="col-sm-11 DPadding0">
                        <marquee direction="left" speed="normal" scrollamount="4" behavior="loop" onMouseOver="this.stop();" onMouseOut="this.start();">
                            <span><i className="fa fa-square"></i> নির্বাচনি জনসভায় যোগ দিতে সিলেটে শেখ হাসিনা, হযরত শাহজালাল (রহ.)-এর মাজার জিয়ারত করেছেন</span><span><i className="fa fa-square"></i> জাতীয় প্রতীক ভাসমান শাপলার নকশাকার মোহাম্মদ ইদ্রিস মারা গেছেন (ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন)</span><span><i className="fa fa-square"></i> নৌকায় ভোট চাওয়ায় সাতক্ষীরার কলরোয়া থানার ওসি প্রত্যাহার</span><span><i className="fa fa-square"></i> সর্বস্তরের শ্রদ্ধা নিবেদনের জন্য চলচ্চিত্র নির্মাতা আমজাদ হোসেনের মরদেহ নেয়া হয়েছে কেন্দ্রীয় শহীদ মিনারে</span>
                        </marquee>
                    </div>
                </div>
            </div>


            <div className="DHeaderNav">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-home"></i></a></li>
                                        {
                                            data.map((d, i) => {
                                                if (i < 9) {
                                                   return( <li className="nav-item" key={i}><a className="nav-link" href="#">{d.CategoryName}</a></li>)
                                                } else {
                                                   return( <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">অন্যান‌্য </a>
                                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                            <a className="dropdown-item" href="#">{d.CategoryName}</a>

                                                        </div>
                                                    </li>
                                                   )
                                                }
                                            })
                                        }

                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}