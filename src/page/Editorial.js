import { useEffect, useState } from "react"

export default function Editorial(props){
    const [data,setData] = useState(props.soprtS)
    useEffect(()=>{
        setData(props.soprtS)
        console.log(data)
    },[])
    return(
        <>
            <div className="container">
                        <section>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="HmAnnouncement2"><a href="10/lifestyle.html">সম্পাদকীয়</a></div>
                                    <div className="DCategoryNews">
                                        <a href="#"><img src="media/imgAll/Suchi-1912110522-SM.jpg" alt="#" title="#" className="img-fluid img100" />
                                            <p className="pTopNews">৩৬০০ কোটি টাকা আত্মসাৎ: বাংলাদেশ ব্যাংকের কথা শুনবে আপিল বিভাগ</p></a>
                                        <ul className="DCategoryNewsList">
                                            <li className="DCategoryNewsListItem"><a href="#"><i className="fa fa-arrow-circle-right"></i>সিরিয়ায় আইএস বিরোধী যুদ্ধে নেতৃত্ব দেবে তুরস্ক: এরদোগান</a></li>
                                            <li className="DCategoryNewsListItem"><a href="#"><i className="fa fa-arrow-circle-right"></i>সিরিয়ায় আইএস বিরোধী যুদ্ধে নেতৃত্ব দেবে তুরস্ক: এরদোগান</a></li>
                                            <li className="DCategoryNewsListItem"><a href="#"><i className="fa fa-arrow-circle-right"></i>সিরিয়ায় আইএস বিরোধী যুদ্ধে নেতৃত্ব দেবে তুরস্ক: এরদোগান</a></li>
                                            <li className="DCategoryNewsListItem"><a href="#"><i className="fa fa-arrow-circle-right"></i>সিরিয়ায় আইএস বিরোধী যুদ্ধে নেতৃত্ব দেবে তুরস্ক: এরদোগান</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="HmAnnouncement2"><a href="13/science-technology.html">উপ-সম্পাদকীয়</a></div>
                                    <div className="DCategoryNews">
                                        <a href="#"><img src="media/imgAll/Suchi-1912110522-SM.jpg" alt="#" title="#" className="img-fluid img100" />
                                            <p className="pTopNews">৩৬০০ কোটি টাকা আত্মসাৎ: বাংলাদেশ ব্যাংকের কথা শুনবে আপিল বিভাগ</p></a>
                                        <ul className="DCategoryNewsList">
                                            <li className="DCategoryNewsListItem"><a href="#"><i className="fa fa-arrow-circle-right"></i>সিরিয়ায় আইএস বিরোধী যুদ্ধে নেতৃত্ব দেবে তুরস্ক: এরদোগান</a></li>
                                            <li className="DCategoryNewsListItem"><a href="#"><i className="fa fa-arrow-circle-right"></i>সিরিয়ায় আইএস বিরোধী যুদ্ধে নেতৃত্ব দেবে তুরস্ক: এরদোগান</a></li>
                                            <li className="DCategoryNewsListItem"><a href="#"><i className="fa fa-arrow-circle-right"></i>সিরিয়ায় আইএস বিরোধী যুদ্ধে নেতৃত্ব দেবে তুরস্ক: এরদোগান</a></li>
                                            <li className="DCategoryNewsListItem"><a href="#"><i className="fa fa-arrow-circle-right"></i>সিরিয়ায় আইএস বিরোধী যুদ্ধে নেতৃত্ব দেবে তুরস্ক: এরদোগান</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="HmAnnouncement2"><a href="12/feature.html">খোলামত</a></div>
                                    <div className="DCategoryNews">
                                        <a href="#"><img src={`https://provaati.com/media/imgAll/${data[3].ImageThumbPath}`} alt="#" title="#" className="img-fluid img100" />
                                            <p className="pTopNews">{data[3].ContentHeading}</p></a>
                                        <ul className="DCategoryNewsList">
                                            {
                                                data.map((d,i)=>{
                                                    if(i>3 && i<9){
                                                        return(
                                                            <li className="DCategoryNewsListItem"><a href="#"><i className="fa fa-arrow-circle-right" key={i}></i>{d.ContentHeading}</a></li>
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
        </>
    )
}