import requests
import json
import pandas as pd


getArticles = requests.get('http://localhost:3001/')

# transform json to dataframe
df = pd.read_json(json.dumps(getArticles.json()))

# quantity of category by articles
categoryCountReports = df.groupby(['category']).agg(
    quantity_category_by_article=('category', 'count')
)

authorCount = df.groupby(['author']).agg(
    quantity_author_by_article=('category', 'count')
)

categoryCountReports.to_csv('scripts/reports/category.csv')
authorCount.to_csv('scripts/reports/author.csv')
