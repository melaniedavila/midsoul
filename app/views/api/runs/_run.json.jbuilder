json.extract! @run, :id, :runner_id, :date, :description, :duration
json.set! :route do
  json.partial! 'api/routes/route', route: run.route
end
