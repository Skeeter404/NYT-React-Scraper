import axios from 'axios';

const APIKEY = "112da6dc944c46e38175cc791005d94e";

export default {

    searchArticles: function(query, beginDate, endDate){
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKEY}&q=${query}&begin_date=${beginDate}&end_date=${endDate}&sort=newest`);
    },

    getArticle: function(id) {
        return axios.get("/api/articles/" + id);
    },

    deleteArticle: function(id) {
        return axios.delete("/api/articles/" + id);
    },

    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData);
    }
};