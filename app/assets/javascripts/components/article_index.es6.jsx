'use strict'

class ArticleIndex extends React.Component {
    constructor() {
        this.state = {
            articles: [],
            pagination: {}
        }
    }
    reloadArticles(query) {
        $.ajax({
            url: '/articles.json',
            data: query || this.props.query,
            success: (result) => {
                this.setState({
                    articles: result.articles,
                    pagination: result.pagination
                })
            }
        })
    }
    componentWillReceiveProps(nextProps) {
        this.reloadArticles(nextProps.query)
    }
    componentDidMount() {
        this.reloadArticles()
    }
    render() {
        var info
        if (this.state.pagination.total_count) {
            info = <p>{this.state.pagination.offset_value + 1} - {this.state.pagination.offset_value + this.state.articles.length} of {this.state.pagination.total_count}</p>
        }
        return (
            <div>
                <h1>Listing Articles</h1>
                {info}
                <ArticleIndexTable articles={this.state.articles} updateFlash={this.props.updateFlash} reloadArticles={this.reloadArticles.bind(this)}/>
                <Pagination {...this.state.pagination}/>
                <br/>
                <ReactRouter.Link to="new" className="btn btn-default">New</ReactRouter.Link>
            </div>
        )
    }
}

class ArticleIndexTable extends React.Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th colSpan="3"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.articles.map((article, i) => <ArticleIndexTableRow key={i} article={article} updateFlash={this.props.updateFlash} reloadArticles={this.props.reloadArticles}/>)}
                </tbody>
            </table>
        )
    }
}

class ArticleIndexTableRow extends React.Component {
    handleClickDestroy(url, e) {
        e.preventDefault()
        if (! confirm('Are you sure?')) {
            return
        }
        $.ajax({
            url: url,
            method: 'DELETE',
            success: (result) => {
                this.props.updateFlash(result.notice)
                this.props.reloadArticles()
            }
        })
    }
    render() {
        return (
            <tr>
                <td>{this.props.article.id}</td>
                <td>{this.props.article.name}</td>
                <td>{this.props.article.body}</td>
                <td>{this.props.article.created_at}</td>
                <td>{this.props.article.updated_at}</td>
                <td><ReactRouter.Link to="show" params={{ id: this.props.article.id }}>Show</ReactRouter.Link></td>
                <td><ReactRouter.Link to="edit" params={{ id: this.props.article.id }}>Edit</ReactRouter.Link></td>
                <td><a href="" onClick={this.handleClickDestroy.bind(this, this.props.article.url)}>Destroy</a></td>
            </tr>
        )
    }
}
