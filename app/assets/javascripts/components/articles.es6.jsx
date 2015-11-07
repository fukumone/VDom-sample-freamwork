'use strict';

class ArticleIndex extends React.Component {
    constructor() {
        this.state = {
            books: [],
            pagination: {}
        }
    }

    reloadArticles(query) {
        $.ajax({
            url: '/articles.json',
            data: query || this.props.query,
            success: (result) => {
                this.setState({
                    books: result.books,
                    pagination: result.pagination
                })
            }
        })
    }
}

class BookIndexTable extends React.Component {
    render() {
        return (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Body</th>
                  <th colspan="3"></th>
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
        e.preventDefault();
        if (! confirm('Are you sure?')) {
            return;
        }
        $.ajax({
            url: url,
            method: 'DELETE',
            success: (result) => {
                this.props.updateFlash(result.notice);
                this.props.reloadBooks();
            }
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.article.id}</td>
                <td>{this.props.article.name}</td>
                <td>{this.props.article.body}</td>
                <td><ReactRouter.Link to="show" params={{ id: this.props.article.id }}>Show</ReactRouter.Link></td>
                <td><ReactRouter.Link to="edit" params={{ id: this.props.article.id }}>Edit</ReactRouter.Link></td>
                <td><a href="" onClick={this.handleClickDestroy.bind(this, this.props.article.url)}>Destroy</a></td>
            </tr>
        )
    }
}
