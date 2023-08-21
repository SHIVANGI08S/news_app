import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default function News(props) {
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage]= useState(1)
  const [totalResults,setTotalResults]= useState(0)
  //document.title= `NewsMaster-${props.category}`;
News.defaultProps = {
    country:'in',
    pageSize: 8,
    category: 'general',
  }
News.propTypes={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
const updateNews= async ()=>{
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
  setLoading({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json(); 
  setArticles(parsedData.articles);
  setTotalResults(parsedData.totalResults)
  setLoading(false)
}
 
useEffect(()=>{
  updateNews();
},[])


const handlnext = async()=>{ 

      setPage(page+1)
    updateNews();
  }


const handleprev = async()=>{
  setPage(page - 1)
  updateNews();
}
 
    return (
      <div className='container my-3'>
        <h2 className= "text-center" style = {{fontFamily:"'Borel', cursive", color:"red",marginTop:"90px"}}>News Master Top-headlines on {props.category}</h2>
        {loading && <Spinner/>}
        <div className='row'>
        {!loading && articles.map((element)=> {
        return <div className='col-md-4' key ={element.url} >
        <NewsItem title = {element.title} description = {element.description} imageUrl={element.urlToImage?element.urlToImage:"https://cdn.wionews.com/sites/default/files/2023/08/15/1508_WION_CHUNK_CHANDRAYAN_11AM-1692084310-00000003.jpg"} newsUrl = {element.url} author ={element.author ? element.author:"unknown"} date = {element.publishedAt} source = {element.source.name}/>
        </div>})}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled = {page<=1}type="button" className="btn btn-danger" onClick={handleprev}>&larr; Previous</button>
        <button disabled = {page+1 > Math.ceil(totalResults/props.pageSize)}type="button" className="btn btn-danger" onClick={handlnext}>Next &rarr;</button>
        </div>
      </div>
    )
  }

