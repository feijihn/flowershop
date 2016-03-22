import { createStore } from 'redux'

const ReduxReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        case "UNDERLINE":
            return state - 5
        default: 
            return state
    }
    return state;
}

let ReduxStore = createStore(ReduxReducer)

ReduxStore.subscribe(() =>
    console.log(ReduxStore.getState())
)


ReduxStore.dispatch({ type: 'INCREMENT' })
ReduxStore.dispatch({ type: 'INCREMENT' })
ReduxStore.dispatch({ type: 'INCREMENT' })

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsData: [
                {
                    author: 'Vanya',
                    comment: 'poshel nahui'
                },
            ]
        }
    };

    AddNewComment = (comment) => {
        this.setState({
            commentsData: this.state.commentsData.concat({comment})
        });
    };

    render() {
        return (
            <div className="example">
                <div><h2>КАМЕНТЫ</h2></div>
                <Comments commentsdata={this.state.commentsData} />
                <AddNewComment addnewcomment={this.AddNewComment}/>
            </div>
        )
    }
}

class Comments extends React.Component {
    render() {
        var ListOfComments = this.props.commentsdata.map(function (comment, id) {
            return (
                <div>
                    {comment.author}
                    {id+1}
                    {comment.comment}
                </div>
            )
        });
        return (
            <div>
                {ListOfComments}
            </div>
        )
    }
}

class AddNewComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    handleSubmit = (e) => {
        if (e.charCode == 13) { //if ENTER is pressed
            this.props.addnewcomment(this.state.value);
            this.setState({
                value: ''
            });
        };
    };

    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleSubmit}/>
        )
    }
}

export default CommentSection;