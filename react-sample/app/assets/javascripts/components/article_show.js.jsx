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
             <table>
                <tr>
                    <th>ID</th>
                    <td>{this.state.article.id}</td>
                    <th>Name</th>
                    <td>{this.state.article.name}</td>
                    <th>Body</th>
                    <td>{this.state.article.body}</td>
                    <th>Created</th>
                    <td>{this.state.article.created_at}</td>
                    <th>Updated</th>
                    <td>{this.state.article.updated_at}</td>
                </tr>
                <ReactRouter.Link to="index">Back</ReactRouter.Link>
            </table>
        )
    }
}
