'use strict';

class Content extends React.Component {
    state = {
        page: Math.min(parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)page\s*\=\s*([^;]*).*$)|^.*$/, "$1")) || 0, Math.ceil(data.length / PAGE_LIMIT) - 1),
        target: null
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
        document.cookie = `page=${page}`;
    };

    showDetail = (target) => {
        // this.setState({ target });
    }

    hideDetail = () => {
        this.setState({ target: null });
    }

    render() {
        const { page, target } = this.state;

        return target ?
            (
                <div>
                    <h3 className="content-title">{target.title}&emsp;<span
                        className="content-date">{target.date}</span></h3>
                    <div>{target.content}</div>
                </div>
            )
            :
            (
                <div>
                    <ul>

                        {data.slice(page * 5, page * 5 + 5).map((target, i) =>
                            <li className="list" key={i}>
                                <a href={target.url}>
                                    <h3 className="content-title">{target.title}&emsp;<span
                                        className="content-date">{target.date}</span></h3>
                                    <p>{target.preview}</p>
                                </a>
                            </li>

                        )}

                    </ul>
                    <MaterialUI.TablePagination
                        component="div"
                        count={data.length}
                        page={page}
                        onChangePage={this.handleChangePage}
                        rowsPerPage={5}
                        labelRowsPerPage={null}
                        rowsPerPageOptions={[]}
                    />
                </div>
            );
    }
}

ReactDOM.render(<Content />, document.querySelector('#content'));