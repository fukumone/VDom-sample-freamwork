class ArticleEdit extends React.Component {
    constructor() {
        super()
        this.state = {}
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
        var form
        if (this.state.article) {
            form = <ArticleForm action={`/articles/${this.props.params.id}.json`} method="PATCH" submit="Update" updateFlash={this.props.updateFlash} article={this.state.article}/>
        }
        return (
            <div>
                <h1>Editing Article</h1>
                {form}
                <ReactRouter.Link to="index" className="btn btn-link">Back</ReactRouter.Link>
            </div>
        )
    }
}
