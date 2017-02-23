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
    // check if we have feedable type available to us here
    // goal: use proper api util so rails controller gets commentable_id and
    // commentable_type
    e.preventDefault();
    const id = this.props.activityId;
    if (this.props.activityType === 'Route') {
      this.props.createRouteComment(id, this.state);
    } else {
      this.props.createRunComment(id, this.state);
    }
  }

  render() {
    return (
      <div className='new-comment-form-container'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='errors-list'>
            {this.errors()}
          </div>

          <input
            type="text"
            value={this.state.body}
            onChange={this.update('body')} />

          <input type="submit" value='ADD COMMENT' />
        </form>
      </div>
    );
  }
}
