export default function Topnews(props) {
    return (
        <>
            <div className="row">
                {
                    props.national.map((d, i) => {
                        if (i > 8 && i < 12) {
                            return (
                                <div className="col-sm-4" key={i}>
                                    <div className="DTopNewsList">
                                        <a href="#"><img src={`https://provaati.com/media/imgAll/${d.ImageThumbPath}`} alt="" title="" className="img-fluid img100" />
                                            <p>{d.ContentHeading}</p></a>
                                    </div>
                                </div>
                            )
                        }
                    })
                }



            </div>

            <div className="row">
                {
                    props.allnews.map((d, i) => {

                        if (i < 3) {
                            return (
                                <div className="col-sm-4" key={i}>
                                    <div className="DTopNewsList">
                                        <a href="#"><img src={`https://provaati.com/media/imgAll/${d.ImageThumbPath}`} alt="" title="" className="img-fluid img100" />
                                            <p>{d.ContentHeading}</p></a>
                                    </div>
                                </div>
                            )
                        }

                    })
                }


            </div>

            <div className="row">
                {
                    props.soprts.map((d,i)=>{
                        if(i <3){
                            return(
                                <div className="col-sm-4">
                                <div className="DTopNewsList">
                                    <a href="#"><img src={`https://provaati.com/media/imgAll/${d.ImageThumbPath}`} alt="" title="" className="img-fluid img100" />
                                        <p>{d.ContentHeading}</p></a>
                                </div>
                            </div>
                            )
                        }
                    })
                }
              
               
            

            </div>
        </>
    )
}