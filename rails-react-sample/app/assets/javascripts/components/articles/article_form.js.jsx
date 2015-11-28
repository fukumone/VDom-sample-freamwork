class ArticleForm extends React.Component {
    constructor() {
        super()
        this.state = {
            alerts: []
        }
    }
    handleSubmit(e) {
        e.preventDefault()

        let params = {}
        Object.keys(this.refs).forEach((key) => {
            params[key] = React.findDOMNode(this.refs[key]).value
        })
        $.ajax({
            url: this.props.action,
            method: this.props.method,
            data: { article: params },
            success: (result) => {
                this.props.updateFlash(result.notice)
                this.context.router.transitionTo(result.location)
            },
            error: (jqXHR) => {
                this.setState({
                    alerts: jqXHR.responseJSON
                })
            }
        })
    }
    render() {
        let article = this.props.article
        let alerts
        if (this.state.alerts.length > 0) {
            alerts = (
                <div className="alert alert-danger">
                    <ul>{this.state.alerts.map((e, i) => <li key={i}>{e}</li>)}</ul>
                </div>
            )
        }
        return (
            <div>
                {alerts}
                <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Title</label>
                        <div className="col-sm-10">
                            <input ref="name" className="form-control" defaultValue={article ? article.name : null}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Price</label>
                        <div className="col-sm-10">
                            <input ref="body" className="form-control" defaultValue={article ? article.body : null}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button className="btn btn-primary">{this.props.submit}</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

ArticleForm.contextTypes = { router: React.PropTypes.func }
