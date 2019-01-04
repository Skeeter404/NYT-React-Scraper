import React from 'react';
import { Input, Col, Row, Container, Card } from 'react-materialize';
import NYT from '../utils/nyt-API';


class Search extends React.Component {

    state = {
        query: "",
        beginDate: "",
        endDate: "",
        results: "",
        errorMsg: "Enter a search query to find articles!"
    }

    searchArticles = () => {
        NYT.searchArticles(this.state.query, this.state.beginDate, this.state.endDate).then(response => {
            if(response.data.response.docs) {
                console.log(response.date.response.docs)
                this.setState({ results: response.data.response.docs});
            }
        }).catch(err => {
            if(err) {
                this.setState({ errorMsg: "No results. Try again!"})
            }
        })
    }


    
}
