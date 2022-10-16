import requests

amount, currency_from, currency_to = input("Enter three values: ").split()

url = 'https://api.exchangerate.host/convert'
response = requests.get(url, params={
    "from": currency_from,
    "to": currency_to,
    "amount": amount
})
data = response.json()['result']

print(f'> Result: {data}', currency_to.upper())
