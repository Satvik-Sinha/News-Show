import React, { Component} from 'react'
import NewsItem from './NewsItem'
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/ListItem';
// import Button from '@mui/material/Button'
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'


export default class News extends Component {
  
  static defaultProps={
    country:'in',
    pageSize:18,
    category: 'general'

  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(){
    super();
    this.state={
      articles:[
        // {
          // "source": {
          // "id": null,
          // "name": "SciTechDaily"
          // },
          // "author": null,
          // "title": "Harvard Scientists Find That Eating Red Meat Could Increase Your Risk of Diabetes - SciTechDaily",
          // "description": "Switching from red meat to plant-derived protein sources could lower the risk of diabetes and offer environmental benefits. Consuming as few as two servings of red meat weekly could elevate the risk of type 2 diabetes in comparison to those who consume less, …",
          // "url": "https://scitechdaily.com/harvard-scientists-find-that-eating-red-meat-could-increase-your-risk-of-diabetes/",
          // "urlToImage": "https://scitechdaily.com/images/Red-Meat-Ribeye.jpg",
          // "publishedAt": "2023-10-22T14:19:56Z",
          // "content": "ByHarvard T.H. Chan School of Public HealthOctober 22, 2023\r\nA recent study has revealed that even two servings of red meat per week can increase the risk of developing type 2 diabetes. The risk rise… [+4554 chars]"
          // },
          // {
          // "source": {
          // "id": "reuters",
          // "name": "Reuters"
          // },
          // "author": "Parisa Hafezi, Jonathan Saul, Arshad Mohammed",
          // "title": "Iran's quandary: How to stay out of Israel's war on Hamas - Reuters",
          // "description": "On Oct. 15, Iran issued a stinging public <a href=\"/world/middle-east/iranian-fm-says-us-will-suffer-significant-damages-if-gaza-war-expands-jazeera-2023-10-15/\">ultimatum</a> to its arch-enemy Israel: Halt your onslaught on Gaza or we'll be forced to take ac…",
          // "url": "https://www.reuters.com/world/middle-east/irans-quandary-how-stay-out-israels-war-hamas-2023-10-22/",
          // "urlToImage": "https://www.reuters.com/resizer/5Ik3UCa_8-36NC93pkUP2owaztI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/N65TCZVASJP4VCVYVHIK5ZQTQQ.jpg",
          // "publishedAt": "2023-10-22T14:00:19Z",
          // "content": "DUBAI, Oct 22 (Reuters) - On Oct. 15, Iran issued a stinging public ultimatum to its arch-enemy Israel: Halt your onslaught on Gaza or we'll be forced to take action, its foreign minister warned.\r\nOn… [+8669 chars]"
          // },
          // {
          // "source": {
          // "id": "espn",
          // "name": "ESPN"
          // },
          // "author": "AJ Mass",
          // "title": "Fantasy football Week 7 inactives - Who's in and who's out? - ESPN - ESPN",
          // "description": "AJ Mass provides updated inactives and analysis based on the latest reports and official announcements leading up to kickoff.",
          // "url": "https://www.espn.com/fantasy/football/story/_/page/23suninactivesWeek7/nfl-fantasy-football-espn-injured-inactives-watchlist-week-7-2023-october-22",
          // "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1021%2Fr1241670_1296x729_16%2D9.jpg",
          // "publishedAt": "2023-10-22T13:56:00Z",
          // "content": "Whom should you start? Whom should you sit? To help you set your fantasy football lineups and avoid starting an offensive player who won't be in the lineup, we'll post fantasy-relevant updates and an… [+5446 chars]"
          // },
          // {
          // "source": {
          // "id": null,
          // "name": "[Removed]"
          // },
          // "author": null,
          // "title": "[Removed]",
          // "description": "[Removed]",
          // "url": "https://removed.com",
          // "urlToImage": null,
          // "publishedAt": "1970-01-01T00:00:00Z",
          // "content": "[Removed]"
          // },
          // {
          // "source": {
          // "id": null,
          // "name": "The Athletic"
          // },
          // "author": "Mike Jones",
          // "title": "NFL Week 7 storylines to watch: Lions-Ravens, Bills-Patriots and a possible Super Bowl preview - The Athletic",
          // "description": "Bill Belichick needs a turnaround fast, while Detroit, Kansas City, Miami, Philadelphia and San Francisco all try to improve to 6-1.",
          // "url": "https://theathletic.com/4978874/2023/10/22/nfl-week-7-schedule-games-matchups/",
          // "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/10/19190225/1022_nflweek7storylines.jpg",
          // "publishedAt": "2023-10-22T12:18:33Z",
          // "content": "The NFLs last two unbeaten teams the San Francisco 49ers and Philadelphia Eagles both fell from their lofty perches last Sunday, and now comes a Week 7 slate that features five 5-1 squads, three 4-2 … [+7089 chars]"
          // },
          // {
          // "source": {
          // "id": null,
          // "name": "CNBC"
          // },
          // "author": "Sam Meredith, Joanna Tan",
          // "title": "Israel-Hamas war live updates: Israel vows to step up Gaza bombardment ahead of expected ground offensive; West Bank mosque hit - CNBC",
          // "description": "Israel's military has pledged to step up its bombardment of the besieged Gaza Strip in the next stage of the war.",
          // "url": "https://www.cnbc.com/2023/10/22/israel-hamas-war-updates-and-latest-news-on-gaza-conflict.html",
          // "urlToImage": "https://image.cnbcfm.com/api/v1/image/107321292-1697971010628-gettyimages-1737988302-AA_22102023_1387652.jpeg?v=1697971065&w=1920&h=1080",
          // "publishedAt": "2023-10-22T12:05:00Z",
          // "content": "A top official with Hezbollah vowed that Israel will pay a high price whenever it starts a ground offensive in the Gaza Strip and said Saturday that his militant group based in Lebanon already is \"in… [+1312 chars]"
          // },
          // {
          // "source": {
          // "id": "usa-today",
          // "name": "USA Today"
          // },
          // "author": "Daniel de Visé",
          // "title": "How 1 in 4 couples is giving up \"free money\" in their 401 (k) plans - USA TODAY",
          // "description": "One in four married couples leaves valuable retirement funds on the table by failing to claim employer matches in their 401 (k) plans, a study finds.",
          // "url": "https://www.usatoday.com/story/money/2023/10/22/how-1-in-4-couples-is-giving-up-free-money-in-their-401-k-plans/71225707007/",
          // "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/10/18/USAT/71230319007-niv-persaud.jpg?crop=1499,843,x0,y420&width=1499&height=843&format=pjpg&auto=webp",
          // "publishedAt": "2023-10-22T12:01:45Z",
          // "content": "Imagine a young married couple. One partner invests heavily in his employers 401(k), saving for both spouses. The other focuses on paying the bills and contributes nothing to her retirement plan, mis… [+5745 chars]"
          // },
          // {
          // "source": {
          // "id": null,
          // "name": "NBCSports.com"
          // },
          // "author": "Mary Omatiga",
          // "title": "What NFL games are on today: Week 7 NFL Sunday Schedule, TV channels, kick off times, how to watch, and more - NBC Sports",
          // "description": "Week 7 of the NFL season is underway! Find out what time your team is playing and how to watch live.",
          // "url": "https://www.nbcsports.com/nfl/news/what-nfl-games-are-on-today-week-7-nfl-sunday-schedule-tv-channels-kick-off-times-how-to-watch-and-more",
          // "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/129a3ab/2147483647/strip/true/crop/1920x1080+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fhdliveextra-a.akamaihd.net%2FHD%2Fimage_sports%2FNBCU_Sports_Group_-_nbcsports%2F110%2F983%2Fnbc_pk_dolphinseagles_231017.jpg",
          // "publishedAt": "2023-10-22T12:00:34Z",
          // "content": "Week 7 of the 2023 NFL Season is in high gear and as usual, NBC and Peacock have got you covered with another Sunday of action-packed NFL excitement, all leading up to a highly anticipated matchup on… [+3009 chars]"
          // },
          // {
          // "source": {
          // "id": null,
          // "name": "CNBC"
          // },
          // "author": "Alex Sherman",
          // "title": "Paramount's Shari Redstone is open for business, but business may not be open for her - CNBC",
          // "description": "Paramount Global controlling shareholder Shari Redstone is open to doing a transformative deal, but market conditions are making it very difficult.",
          // "url": "https://www.cnbc.com/2023/10/22/paramount-shari-redstone-might-have-missed-deal-window.html",
          // "urlToImage": "https://image.cnbcfm.com/api/v1/image/107270662-1689187794205-_95A1370-143r.jpg?v=1697976001&w=1920&h=1080",
          // "publishedAt": "2023-10-22T12:00:01Z",
          // "content": "Shari Redstone, president of National Amusements and controlling shareholder of Paramount Global, walks to a morning session at the Allen &amp; Company Sun Valley Conference in Sun Valley, Idaho, Jul… [+10076 chars]"
          // },
          // {
          // "source": {
          // "id": null,
          // "name": "[Removed]"
          // },
          // "author": null,
          // "title": "[Removed]",
          // "description": "[Removed]",
          // "url": "https://removed.com",
          // "urlToImage": null,
          // "publishedAt": "1970-01-01T00:00:00Z",
          // "content": "[Removed]"
          // },
          // {
          // "source": {
          // "id": null,
          // "name": "YouTube"
          // },
          // "author": null,
          // "title": "Killers of the Flower Moon - Official 'Coyote' Clip (2023) Lily Gladstone, Leonardo DiCaprio - IGN",
          // "description": "Mollie Kyle (Lily Gladstone) talks about Ernest Burkhart (Leonardo DiCaprio) in this clip from Killers of the Flower Moon. The film also stars Robert De Niro...",
          // "url": "https://www.youtube.com/watch?v=U7cB-RrkxtM",
          // "urlToImage": "https://i.ytimg.com/vi/U7cB-RrkxtM/maxresdefault.jpg",
          // "publishedAt": "2023-10-22T11:00:20Z",
          // "content": null
          // },
          // {
          // "source": {
          // "id": null,
          // "name": "CNBC"
          // },
          // "author": "Michael Wayland",
          // "title": "GM and Ford will answer to Wall Street and the UAW with third-quarter earnings this week - CNBC",
          // "description": "GM and Ford report third-quarter earnings and future guidance this week amid ongoing strikes and contract negotiations with the United Auto Workers union.",
          // "url": "https://www.cnbc.com/2023/10/22/gm-and-ford-report-q3-earnings-as-wall-street-and-uaw-watch.html",
          // "urlToImage": "https://image.cnbcfm.com/api/v1/image/107053947-1651264400451-farley_barra.jpg?v=1697972401&w=1920&h=1080",
          // "publishedAt": "2023-10-22T11:00:01Z",
          // "content": "Jim Farley, CEO, Ford, left, and Mary Barra, CEO, General Motors\r\nDETROIT Ready for a tightrope walk?\r\nGeneral Motors and Ford Motor report third-quarter earnings and future guidance this week amid o… [+5851 chars]"
          // },
          // {
          // "source": {
          // "id": "politico",
          // "name": "Politico"
          // },
          // "author": null,
          // "title": "Even Tim Scott's supporters are 'disappointed' in his campaign - POLITICO - POLITICO",
          // "description": "Scott's polling is down, his super PAC is in retreat and his hometown newspaper is cheering on Nikki Haley instead.",
          // "url": "https://www.politico.com/news/2023/10/22/tim-scott-disappointed-campaign-00122896",
          // "urlToImage": "https://static.politico.com/57/24/73cf212b4c32b736041aaaa50bae/https-delivery-gettyimages.com/downloads/1705357553",
          // "publishedAt": "2023-10-22T11:00:00Z",
          // "content": "The shake-up may come too late to energize Scotts faltering campaign.\r\nAfter months of staying out of the conversation, the South Carolina senator is now sputtering below 2 percent in national polls.… [+8257 chars]"
          // },
          // {
          // "source": {
          // "id": "reuters",
          // "name": "Reuters"
          // },
          // "author": "Reuters",
          // "title": "Iranian teenager Armita Geravand is 'brain dead': state media - Reuters",
          // "description": "A teenage Iranian girl, who fell into a coma earlier this month following an alleged <a href=\"/world/middle-east/iranian-girl-critical-hospital-after-alleged-encounter-over-hijab-activists-2023-10-04/\">encounter</a> with officers over violating the country's …",
          // "url": "https://www.reuters.com/world/middle-east/iranian-state-media-teenage-girl-armita-geravand-is-brain-dead-2023-10-22/",
          // "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.webp?d=160",
          // "publishedAt": "2023-10-22T10:43:00Z",
          // "content": "DUBAI, Oct 22 (Reuters) - A teenage Iranian girl, who fell into a coma earlier this month following an alleged encounter with officers over violating the country's hijab law, is said to be \"brain dea… [+1536 chars]"
          // },
          // {
          // "source": {
          // "id": null,
          // "name": "SciTechDaily"
          // },
          // "author": null,
          // "title": "This Week @NASA: “Ring of Fire” Solar Eclipse, New Engine Test, Quartz Clouds on Exoplanet - SciTechDaily",
          // "description": "Highlighting the “Ring of Fire” solar eclipse… Learning how the human body reacts to long spaceflights… And a new engine test series for future Artemis missions… A few of the stories to tell you about – This Week at NASA! https://youtu.be/XYHw5320Rcg Highligh…",
          // "url": "https://scitechdaily.com/?p=320306",
          // "urlToImage": "https://scitechdaily.com/images/Ring-of-Fire-Solar-Eclipse-Photo-Illustration.jpg",
          // "publishedAt": "2023-10-22T10:37:34Z",
          // "content": "ByNASAOctober 22, 2023\r\nNASA covered the Ring of Fire annular solar eclipse on October 14, with broadcasts from Kerrville, Texas, and Albuquerque, New Mexico. This event also allowed NASA to launch s… [+2329 chars]"
          // },
          // {
          // "source": {
          // "id": "financial-times",
          // "name": "Financial Times"
          // },
          // "author": "Edward White, Kathrin Hille",
          // "title": "China launches investigation into iPhone maker Foxconn, says state media - Financial Times",
          // "description": "Tax authorities said to have inspected a number of the Apple supplier’s sites in provinces",
          // "url": "https://www.ft.com/content/e6abcb86-1c80-4914-ae54-c7df94d7a9e0",
          // "urlToImage": null,
          // "publishedAt": "2023-10-22T09:17:07Z",
          // "content": "What is included in my trial?\r\nDuring your trial you will have complete digital access to FT.com with everything in both of our Standard Digital and Premium Digital packages.\r\nStandard Digital includ… [+1494 chars]"
          // },
          // {
          // "source": {
          // "id": null,
          // "name": "YouTube"
          // },
          // "author": null,
          // "title": "Chinese ship collides with Philippine supply vessel in South China Sea - CNA",
          // "description": "The moment a Chinese coast guard vessel grazed the hull of a Philippine supply boat in the South China Sea on Sunday (Oct 22). China's coast guard said there...",
          // "url": "https://www.youtube.com/watch?v=5i5WFHv6yKY",
          // "urlToImage": "https://i.ytimg.com/vi/5i5WFHv6yKY/maxresdefault.jpg",
          // "publishedAt": "2023-10-22T09:05:08Z",
          // "content": null
          // },
          // {
          // "source": {
          // "id": null,
          // "name": "Futurism"
          // },
          // "author": "Frank Landymore",
          // "title": "Scientists Intercept Signal That Took 8 Billion Years to Reach Earth - Futurism",
          // "description": "The signal is know as a fast radio burst (FRB), and it is the oldest and most powerful of its kind ever detected.",
          // "url": "https://futurism.com/the-byte/scientists-signal-8-billion-earth",
          // "urlToImage": "https://wp-assets.futurism.com/2023/10/scientists-signal-8-billion-earth.jpg",
          // "publishedAt": "2023-10-22T09:04:01Z",
          // "content": "And the Sun is no match for its power.\r\nOrville RedenFRBer\r\nAstronomers have intercepted a mysterious and ancient radio signal that's traveled from the farthest reaches of the cosmos for an astonishi… [+3009 chars]"
          // },
          // {
          // "source": {
          // "id": null,
          // "name": "[Removed]"
          // },
          // "author": null,
          // "title": "[Removed]",
          // "description": "[Removed]",
          // "url": "https://removed.com",
          // "urlToImage": null,
          // "publishedAt": "1970-01-01T00:00:00Z",
          // "content": "[Removed]"
          // },
          // {
          // "source": {
          // "id": "cnn",
          // "name": "CNN"
          // },
          // "author": "Sara Smart, Nouran Salahieh",
          // "title": "Police are searching for motive in the death of the Detroit synagogue leader who was found with multiple stab wounds - CNN",
          // "description": "Investigators are searching for a motive in the death of a Detroit synagogue leader found stabbed over the weekend, the city’s police chief said.",
          // "url": "https://www.cnn.com/2023/10/22/us/detroit-president-synagogue-killing-sunday/index.html",
          // "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231021155134-samantha-woll.jpg?c=16x9&q=w_800,c_fill",
          // "publishedAt": "2023-10-22T05:26:00Z",
          // "content": "Investigators are searching for a motive in the death of a Detroit synagogue leader found stabbed over the weekend, the citys police chief said.\r\nThe body of Samantha Woll, president of the board of … [+3704 chars]"
          // }
      ],
      loading:false,
      page:1,
      totalArticles:0
    }
  }


  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d927c2761b7d4c77a526e68d8f9b2873&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      totalArticles:parsedData.totalResults
    });
  }

  // handleNext = async () =>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category} &apiKey=d927c2761b7d4c77a526e68d8f9b2873&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
  //   let data=await fetch(url);
  //   let parsedData=await data.json();
    
  //   this.setState({
  //     page:this.state.page+1,
  //     articles:parsedData.articles
  //   })
    
  // }

  // handlePrev = async () =>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category} &apiKey=d927c2761b7d4c77a526e68d8f9b2873&pageSize=${this.props.pageSize}&page=${this.state.page-1}`;
  //   let data=await fetch(url);
  //   let parsedData=await data.json();
    
  //   this.setState({
  //     page:this.state.page-1,
  //     articles:parsedData.articles
  //   })
  // }

  fetchMoreData = async () => {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d927c2761b7d4c77a526e68d8f9b2873&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    
    this.setState({
      page:this.state.page+1,
      articles:this.state.articles.concat(parsedData.articles)
    })
  };

  render() {
    return (
      <>

        

        <h1>News-Displayer</h1>
        <InfiniteScroll
                  dataLength={this.state.articles.length}
                  next={this.fetchMoreData}
                  hasMore={this.state.articles.length!==this.state.totalArticles}
                  
                  loader={<h4>Loading...</h4>}
                >
        
        <Grid container rowSpacing={1} columnSpacing={24} >
        {this.state.articles.map((element) => {
            return <Grid xs={4} justifyContent="center" display="flex">
                    
                    <Item key={element.url}>
                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:""} newsUrl={element.url?element.url:""}/>
                    {console.log(element)}
                    </Item>
                    
                   </Grid>
        })}
        </Grid>  
        

        </InfiniteScroll>

        {/* <Grid container rowSpacing={1} columnSpacing={1} mt={4}>
          <Grid xs={6} justifyContent="center" display="flex">
              <Button variant="contained" color="primary" onClick={this.handlePrev} disabled={this.state.page<=1}>
                Previous
              </Button>
          </Grid>
          <Grid xs={6} justifyContent="center" display="flex">
              <Button variant="contained" color="success" onClick={this.handleNext} disabled={this.state.page>=Math.ceil(this.state.totalArticles/18)}>
                Next
              </Button>
          </Grid>
        </Grid>       */}
      </>
    )
  }
}
