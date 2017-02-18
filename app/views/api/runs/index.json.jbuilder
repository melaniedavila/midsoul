@runs.each do |run|
  json.set! run.id do
    json.extract! run, :id, :runner_id, :route_id, :date, :description, :duration, :title
    json.set! :route do
      json.partial! 'api/routes/route', route: run.route
    end
  end
end
