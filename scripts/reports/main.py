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


# calculating media of words by text

def count_words(content):
    words = content.split()
    return len(words)


df['average_content_article'] = df['content'].apply(count_words)

average = df.groupby('title')['average_content_article'].mean()

# save file csv

categoryCountReports.to_csv('scripts/reports/category.csv')
authorCount.to_csv('scripts/reports/author.csv')
average.to_csv('scripts/reports/average.csv')
