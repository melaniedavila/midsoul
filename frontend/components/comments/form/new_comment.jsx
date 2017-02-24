import React from 'react';

export default class NewComment extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { body: '' };
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  errors() {
    if (this.props.errors.length > 0) {
      const errorListItems = this.props.errors.map((error, idx) => {
          return (<li className="error" key={idx}>{error}</li>);
        });

      return (<ul>{ errorListItems }</ul>);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = this.props.activityId;
    const comment = this.state;
    this.setState({body: ''});

    if (this.props.activityType === 'Route') {
      this.props.createRouteComment(id, comment);
    } else {
      this.props.createRunComment(id, comment);
    }
  }

  render() {
    return (
      <div className='new-comment-form-container'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='errors-list'>
            {this.errors()}
          </div>

          <div className='new-comment-textarea-and-submit'>
            <textarea
              value={this.state.body}
              onChange={this.update('body')} />

            <input type="submit" value='ADD COMMENT' />
          </div>
        </form>
      </div>
    );
  }
}
