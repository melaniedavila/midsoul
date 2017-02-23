json.extract! comment, :id, :author_id, :commentable_id, :commentable_type, :body
json.set! :author do
  json.partial! 'api/users/user', user: comment.author
end
