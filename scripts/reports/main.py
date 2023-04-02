import requests
import json
import pandas as pd
import os.path


getArticles = requests.get('http://localhost:3001/')

# transform json to dataframe
df = pd.read_json(json.dumps(getArticles.json()))

categoryCountReports = df.groupby(['category']).agg(
    quantity_category_by_article=('category', 'count')
)
print(os.path.abspath("nmae"))
categoryCountReports.to_csv('scripts/reports/category.csv')
