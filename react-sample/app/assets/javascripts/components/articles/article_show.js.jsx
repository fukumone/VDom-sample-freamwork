class ArticleShow extends React.Component {
    constructor() {
        super()
        this.state = {
            article: {}
        }
    }
    componentDidMount() {
        $.ajax({
            url: `/articles/${this.props.params.id}.json`,
            method: 'GET',
            success: (result) => {
                this.setState({ article: result })
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Show Article</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <td>{this.state.article.id}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{this.state.article.name}</td>
                        </tr>
                        <tr>
                            <th>Body</th>
                            <td>{this.state.article.body}</td>
                        </tr>
                        <tr>
                            <th>Created</th>
                            <td>{this.state.article.created_at}</td>
                        </tr>
                        <tr>
                            <th>Updated</th>
                            <td>{this.state.article.updated_at}</td>
                        </tr>
                    </tbody>
                </table>
                <ReactRouter.Link to="index" className="btn btn-default">Back</ReactRouter.Link>
            </div>
        )
    }
}
