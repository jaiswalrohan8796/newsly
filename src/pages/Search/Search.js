import React, { Component } from "react";
import InputBar from "../../components/InputBar/InputBar";
import Spinner from "../../components/Spinner/Spinner";
import NewsCard from "../../components/NewsCard/NewsCard";
import SourceCard from "../../components/SourceCard/SourceCard";
import axios from "axios";
import classes from "./Search.module.css";
import generateRandomColor from "../../utility/generateRandomColor";
class Search extends Component {
    state = {
        searchResults: [],
        searching: false,
        sources: [],
    };

    componentDidMount() {
        this.setState({ searching: true });
        axios
            .get("https://rj-proxy.herokuapp.com/sources")
            .then((res) => {
                this.setState({
                    sources: res.data.sources,
                    searching: false,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    searchHandlerParent = (searchQuery) => {
        this.setState({ searching: true, searchResults: [] });
        axios
            .get(`https://rj-proxy.herokuapp.com/search/${searchQuery}`)
            .then((res) => {
                this.setState({
                    searchResults: res.data.articles,
                    searching: false,
                });
            })
            .catch((err) => console.log(err));
    };
    render() {
        var searchNewsCards = this.state.searching ? <Spinner /> : "";
        if (this.state.searchResults.length > 0) {
            searchNewsCards = this.state.searchResults.map((post) => {
                return (
                    <NewsCard
                        title={post.description}
                        source={post.author}
                        image={post.urlToImage}
                        date={post.publishedAt}
                        url={post.url}
                    />
                );
            });
        }

        var sourceCards = this.state.searching ? <Spinner /> : "";
        if (this.state.sources.length > 0) {
            sourceCards = this.state.sources.map((source) => {
                const color = generateRandomColor();
                return (
                    <SourceCard
                        name={source.name}
                        description={source.description}
                        category={source.category}
                        country={source.country}
                        url={source.url}
                        color={color}
                    />
                );
            });
        }

        return (
            <div>
                <InputBar searchHandler={this.searchHandlerParent} />
                <div className={classes.newsWrapper}>
                    {searchNewsCards}
                    {sourceCards}
                </div>
            </div>
        );
    }
}

export default Search;
