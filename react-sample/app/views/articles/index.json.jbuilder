json.articles do
  json.array!(@articles) do |article|
    json.extract! article, :id, :name, :body
    json.created_at article.created_at.strftime('%Y-%m-%d %H:%M')
    json.updated_at article.updated_at.strftime('%Y-%m-%d %H:%M')
    json.url article_url(article, format: :json)
  end
end
json.pagination do
  json.prev @articles.prev_page
  json.next @articles.next_page
  json.current @articles.current_page
  json.total @articles.total_pages
  json.total_count @articles.total_count
  json.offset_value @articles.offset_value
end
