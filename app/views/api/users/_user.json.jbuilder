json.extract! user, :id, :f_name, :l_name, :image_url, :profile_picture, :created_at




# json.array!(user.runs) do |run|
#   json.partial! 'api/runs/run', run: run
# end
#
#
# json.array!(user.routes) do |route|
#   json.partial! 'api/routes/route', route: route
# end


# json.extract! @run, :id, :runner_id, :date, :description, :duration, :title
# json.set! :runner do
#   json.partial! 'api/users/user', user: run.runner
# end
# json.set! :route do
#   json.partial! 'api/routes/route', route: run.route
# end
