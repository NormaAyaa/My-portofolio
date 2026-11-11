import urllib.request
import json

url = 'https://api.github.com/users/NormaAyaa/repos?per_page=100'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

try:
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        print(f"Total repos: {len(data)}")
        for item in data:
            print("REPO:", item['name'])
            print("DESC:", item.get('description'))
            print("LANG:", item.get('language'))
            print("URL:", item.get('html_url'))
            print("FORK:", item.get('fork'))
            print("STARS:", item.get('stargazers_count'))
            print("TOPICS:", item.get('topics'))
            print("-" * 40)
except Exception as e:
    print("Fetch error:", e)

