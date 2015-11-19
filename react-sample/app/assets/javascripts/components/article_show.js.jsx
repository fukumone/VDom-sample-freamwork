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
                 <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Body</th>
                            <th>Created</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.article.id}</td>
                            <td>{this.state.article.name}</td>
                            <td>{this.state.article.body}</td>
                            <td>{this.state.article.created_at}</td>
                            <td>{this.state.article.updated_at}</td>
                        </tr>
                    </tbody>
                </table>
                <ReactRouter.Link to="index">Back</ReactRouter.Link>
            </div>
        )
    }
}
