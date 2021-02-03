import React, { Component } from "react";
import classes from "./Home.module.css";
import NewsCard from "../../components/NewsCard/NewsCard";
import Spinner from "../../components/Spinner/Spinner";
import axios from "axios";
class Home extends Component {
    state = {
        posts: [],
        loading: false,
    };
    componentDidMount() {
        this.setState({
            loading: true,
        });
        axios
            .get("https://rj-proxy.herokuapp.com/")
            .then((res) => {
                this.setState({
                    posts: res.data.articles,
                    loading: false,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        console.log("render");
        var newsPosts = <Spinner />;

        if (!this.state.loading) {
            newsPosts = this.state.posts.map((post) => {
                return (
                    <NewsCard
                        title={post.description}
                        source={post.author}
                        image={post.urlToImage}
                        date={post.publishedAt}
                        url ={post.url}
                    />
                );
            });
        }

        return (
            <div>
                <h3 className={classes.header}>Top stories for you</h3>
                <div className={classes.newsWrapper}>
                    {newsPosts}
                </div>
            </div>
        );
    }
}

export default Home;
