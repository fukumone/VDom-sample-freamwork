'use strict'

class Articles extends React.Component {
    constructor() {
        this.state = {
            flash: null,
            flashShown: false
        }
    }
    updateFlash(message) {
        this.setState({
            flash: message,
            flashShown: false
        })
    }
    handleClickAlertClose(e) {
        this.setState({ flash: null })
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.flashShown) {
            this.setState({ flash: null })
        } else {
            this.setState({ flashShown: true })
        }
    }
    render() {
        var flash
        if (this.state.flash) {
            flash = (
                <div className="alert alert-success">
                    <button type="button" className="close">
                        <span onClick={this.handleClickAlertClose.bind(this)}>&times</span>
                    </button>
                    {this.state.flash}
                </div>
            )
        }
        return (
            <div>
                {flash}
                <ReactRouter.RouteHandler params={this.props.params} query={this.props.query} updateFlash={this.updateFlash.bind(this)}/>
            </div>
        )
    }
}

$(() => {
    var routes = (
        <ReactRouter.Route path="/articles/?" handler={Articles}>
            <ReactRouter.DefaultRoute name="index" handler={ArticleIndex}/>
        </ReactRouter.Route>
    )
    ReactRouter.run(routes, ReactRouter.HistoryLocation, (Handler, state) => {
        ReactDOM.render(<Handler {...state}/>, document.getElementById('main'))
    })
})
