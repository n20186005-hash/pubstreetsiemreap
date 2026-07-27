import json, os

base = './src/i18n/'
for lang in ['km', 'en', 'zh']:
    main_path = base + lang + '.json'
    legal_path = base + '_legal_' + lang + '.json'
    data = json.load(open(main_path, encoding='utf-8'))
    legal = json.load(open(legal_path, encoding='utf-8'))
    # Insert "legal" before "footer" to keep a logical order
    if 'legal' in data:
        del data['legal']
    new = {}
    for k, v in data.items():
        if k == 'footer':
            new['legal'] = legal
        new[k] = v
    if 'footer' not in new:
        new['legal'] = legal
    with open(main_path, 'w', encoding='utf-8') as f:
        json.dump(new, f, ensure_ascii=False, indent=2)
        f.write('\n')
    os.remove(legal_path)
    print('merged', lang)
print('done')
