import json, io

BASE = 'src/i18n/{}.json'

# ---- 中文基准内容 ----
ZH = {
    "amenities": {
        "eyebrow": "设施与服务",
        "title": "周边设施与便民服务",
        "subtitle": "以下信息以帮助游客规划行程为目的，仅说明服务类型与大致分布，不推荐任何特定商户。实际位置与营业状态请在到访前自行核对。",
        "items": [
            {"icon": "restroom", "k": "公共洗手间", "v": "酒吧街沿线的餐馆、咖啡馆与商场内多设有洗手间，部分公共区域设有付费公共卫生间。", "badge": "常见", "note": "建议优先使用用餐场所内的设施；夜间街区露天区域较有限。"},
            {"icon": "parking", "k": "停车", "v": "街区周边设有若干露天停车场与酒店代客泊车，老市场一带车位在夜间较为紧张。", "badge": "有限", "note": "晚间高峰建议将车辆停在稍远处步行前往，或选择非自驾出行。"},
            {"icon": "food", "k": "餐饮", "v": "以酒吧、餐厅、烧烤摊与街头小吃为主，涵盖高棉菜、亚洲风味与国际料理等多种类型。", "badge": "丰富", "note": "按价位与菜系选择即可，无需指定某一家；可先看公开评价再决定。"},
            {"icon": "bed", "k": "住宿", "v": "周边从青年旅舍、精品酒店到高端度假酒店均有分布，多集中在老市场与河东岸一带。", "badge": "丰富", "note": "建议按预算与安静程度选择，临街房间夜间可能较热闹。"},
            {"icon": "shop", "k": "便利店与商超", "v": "步行范围内有便利店、杂货店与纪念品集市，可购买日用品、饮水与旅行小物。", "badge": "常见", "note": "老市场周边集市夜间最热闹，适合选购手信。"},
            {"icon": "fuel", "k": "加油与充电", "v": "城市各处设有加油站；电动车与手机充电可借助酒店、咖啡馆与商场。", "badge": "城区覆盖", "note": "租赁车辆请提前确认油量/电量，长途前在城区加满。"},
            {"icon": "atm", "k": "ATM 与货币兑换", "v": "主要街道与商场附近设有 ATM 与货币兑换点，支持主流银行卡取现。", "badge": "常见", "note": "建议使用银行网点内的 ATM，留意跨境手续费。"},
            {"icon": "medical", "k": "医疗与应急", "v": "城区设有药店、诊所与国际医疗点；紧急情况可联系当地急救与旅游警察。", "badge": "城区覆盖", "note": "建议出行前购买旅行保险，并保存驻外使领馆联系方式。"},
            {"icon": "wifi", "k": "网络与通讯", "v": "多数餐饮与住宿场所提供免费 Wi-Fi；当地便利地摊可购得旅游 SIM 卡。", "badge": "普遍", "note": "在人流密集处注意公共网络的信息安全。"}
        ],
        "disclaimer": "本站点为独立非营利科普项目，所列设施仅为类型参考，不构成任何商业推荐；具体服务以现场为准。"
    },
    "history": {
        "originTitle": "地名由来",
        "originText": "“Pub Street”（高棉语称 ផ្លូវបារអាហារ / ផ្លូវហាងស្រា）字面意为“酒吧街”，是暹粒老城区一条以餐饮与夜生活著称的短街。它得名于街区聚集的大量酒吧与餐厅，并非正式行政区划名称，而是游客与本地人对这片区域的习惯称呼。",
        "cultureTitle": "在地文化与故事",
        "cultureText": "这条街紧邻老市场（Phsar Chas），白天是本地人采买与通勤的寻常巷弄，入夜后则切换为游客聚集的步行休闲区。它的兴起与吴哥古迹旅游的发展紧密相连：随着到访暹粒的世界游客增多，沿街家庭作坊与民居逐渐让位于面向旅人的餐酒馆、街头烧烤与世界音乐。许多长期驻留的艺术家、音乐人与志愿者也在此相遇，使这里成为暹粒“新旧交织”的城市客厅——一边是千年吴哥的肃穆，一边是当代旅人的喧闹。",
        "legendTitle": "一则小传说",
        "legendText": "在暹粒的口耳相传里，有一条不成文的“规矩”：来到吴哥的旅人，总要在傍晚回到老城，于灯火与香气中卸下一天的尘土。久而久之，连接老市场与河岸的这条短街，便成了“朝圣古迹之后，回到人间”的仪式之地。故事未必见于史册，却恰当地解释了它为何成为无数旅行记忆的注脚。"
    },
    "practical": {
        "eyebrow": "行前必读",
        "title": "实用贴士",
        "subtitle": "面向自由行游客的中立建议，帮助你更从容地安排行程。",
        "items": [
            {"icon": "clock", "k": "最佳时段", "v": "傍晚亮灯后至午夜最为热闹；若只想安静逛逛，午后到日落前人流较少。"},
            {"icon": "walk", "k": "步行友好", "v": "街区为步行休闲区，最宜步行游览；小巷相连，留意随身物品。"},
            {"icon": "atm", "k": "支付方式", "v": "多数店家同时接受现金与主流电子支付，随身备少量小额现金更方便议价与小费。"},
            {"icon": "shield", "k": "安全与秩序", "v": "整体治安良好，请看管好财物、理性饮酒，并留意夜间交通与道路台阶。"},
            {"icon": "globe", "k": "语言沟通", "v": "旅游区普遍使用英语；学几句高棉语问候会更受欢迎。"},
            {"icon": "users", "k": "家庭与无障碍", "v": "白天适合家庭散步；夜间人流与音量较大，带婴幼儿或需安静环境者请酌情安排。"}
        ]
    }
}

EN = {
    "amenities": {
        "eyebrow": "Facilities & Services",
        "title": "Nearby Facilities & Services",
        "subtitle": "Listed to help you plan your visit. We describe only the type and general availability of services, and do not endorse any specific business. Verify locations and opening hours on site before your visit.",
        "items": [
            {"icon": "restroom", "k": "Public Restrooms", "v": "Restrooms are available in restaurants, cafés and shopping venues along the street; some public areas have paid facilities.", "badge": "Common", "note": "Prefer facilities inside dining venues; open-air options are limited at night."},
            {"icon": "parking", "k": "Parking", "v": "Several open-air lots and hotel valet parking exist nearby; spaces around the Old Market get tight in the evening.", "badge": "Limited", "note": "At peak hours, park a bit further and walk, or use other transport."},
            {"icon": "food", "k": "Dining", "v": "Mostly bars, restaurants, BBQ stalls and street food, covering Khmer, Asian and international cuisines.", "badge": "Abundant", "note": "Choose by budget and cuisine; check public reviews rather than a specific name."},
            {"icon": "bed", "k": "Accommodation", "v": "From hostels and boutique hotels to upscale resorts, concentrated around the Old Market and west riverbank.", "badge": "Abundant", "note": "Pick by budget and quietness; street-facing rooms can be lively at night."},
            {"icon": "shop", "k": "Convenience & Shops", "v": "Within walking distance: convenience stores, groceries and souvenir markets for daily needs, drinks and small items.", "badge": "Common", "note": "The night market near the Old Market is best for souvenirs."},
            {"icon": "fuel", "k": "Fuel & Charging", "v": "Fuel stations are spread across the city; EV and phone charging are available at hotels, cafés and malls.", "badge": "Citywide", "note": "If renting a vehicle, top up before long trips."},
            {"icon": "atm", "k": "ATM & Currency", "v": "ATMs and money changers near main streets and malls accept major cards.", "badge": "Common", "note": "Prefer ATMs inside bank branches; mind cross-border fees."},
            {"icon": "medical", "k": "Medical & Emergency", "v": "Pharmacies, clinics and international medical points are in the city; contact local ambulance and tourist police in emergencies.", "badge": "Citywide", "note": "Get travel insurance and save embassy contacts."},
            {"icon": "wifi", "k": "Connectivity", "v": "Most dining and lodging offer free Wi-Fi; tourist SIM cards are sold at local kiosks.", "badge": "Ubiquitous", "note": "Be careful with public networks in crowded areas."}
        ],
        "disclaimer": "This is an independent non-profit guide. Listed facilities are type references only and are not commercial endorsements; on-site conditions apply."
    },
    "history": {
        "originTitle": "How the Name Came About",
        "originText": "“Pub Street” (Khmer: ផ្លូវបារអាហារ / ផ្លូវហាងស្រា) literally means “bar street.” It is a short lane in Siem Reap’s old town known for dining and nightlife. The name comes from the many bars and restaurants clustered here; it is a local habit, not an official district name.",
        "cultureTitle": "Local Culture & Stories",
        "cultureText": "The street sits next to the Old Market (Phsar Chas). By day it is an ordinary alley for locals; after dark it becomes a pedestrian leisure zone for travellers. Its rise is tied to Angkor tourism: as world visitors grew, family workshops gave way to bars, street BBQ and world music. Artists, musicians and volunteers also meet here, making it Siem Reap’s “living room” where ancient Angkor meets modern travellers.",
        "legendTitle": "A Small Tale",
        "legendText": "Locals say there is an unwritten rule: after a day at the temples, every traveller returns to the old town at dusk to wash off the dust among lights and aromas. Over time, this short street between the Old Market and the river became the ritual “return to the human world” after pilgrimage. The story may not be in history books, but it explains why it anchors so many travel memories."
    },
    "practical": {
        "eyebrow": "Before You Go",
        "title": "Practical Tips",
        "subtitle": "Neutral advice for independent travellers to plan with more ease.",
        "items": [
            {"icon": "clock", "k": "Best Time", "v": "Liveliest from lighting-up to midnight; for a quiet stroll, go afternoon to before sunset."},
            {"icon": "walk", "k": "Walkable", "v": "A pedestrian leisure zone, best on foot; alleys connect, watch your belongings."},
            {"icon": "atm", "k": "Payment", "v": "Most places take cash and major e-payments; small cash helps bargaining and tips."},
            {"icon": "shield", "k": "Safety", "v": "Generally safe; guard belongings, drink responsibly, mind night traffic and steps."},
            {"icon": "globe", "k": "Language", "v": "English is widely used in the tourist area; a few Khmer greetings go a long way."},
            {"icon": "users", "k": "Families & Access", "v": "Good for families by day; at night it is crowded and loud—plan accordingly if with infants or needing quiet."}
        ]
    }
}

KM = {
    "amenities": {
        "eyebrow": "កន្លែងសម្រាប់អ្នកទេសចរ និងសេវាកម្ម",
        "title": "សម្ភារៈជុំវិញ និងសេវាកម្មងាយស្រួល",
        "subtitle": "ព័ត៌មានខាងក្រោមមានគោលបំណងជួយអ្នករៀបចំដំណើរ។ យើងរៀបរាប់តែប្រភេទ និងការមានវត្តមានជាទូទៅនៃសេវាកម្ម ហើយមិនផ្ដល់អនុសាសន៍ឲ្យអាជីវកម្មណាមួយឡើយ។ សូមពិនិត្យមើលទីតាំង និងម៉ោងបើកឲ្យបានជាក់ស្ដែងមុនពេលទៅដល់។",
        "items": [
            {"icon": "restroom", "k": "បន្ទប់ទឹកសាធារណៈ", "v": "បន្ទប់ទឹកមាននៅក្នុងភោជនីយដ្ឋាន ហាងកាហ្វេ និងផ្សារទំនើបតាមផ្លូវ ហើយខ្លះមានបន្ទប់ទឹកសាធារណៈដែលត្រូវបង់ប្រាក់។", "badge": "ទូទៅ", "note": "ជាធម្មតាគួរប្រើបន្ទប់ទឹកនៅកន្លែងញ៉ាំ ព្រោះតំបន់ក្រៅពេលយប់មានកម្រិត។"},
            {"icon": "parking", "k": "កន្លែងចតឡាន", "v": "មានទីកន្លែងចតឡានធម្មតា និងសេវាចតរបស់សណ្ឋាគារនៅក្បែរៗ តែជិតផ្សារចាស់ពេលយប់មានកន្លែងតិច។", "badge": "មានកម្រិត", "note": "ពេលម៉ោងកកកុញ ចតឆ្ងាយបន្តិចហើយដើរ ឬជ្រើសរើសការធ្វើដំណើរផ្សេង។"},
            {"icon": "food", "k": "អាហារ", "v": "ភាគច្រើនជាបារ ភោជនីយដ្ឋាន អន្ទរសព្ទ និងអាហារតាមផ្លូវ រួមទាំងម្ហូបខ្មែរ អាស៊ី និងអន្តរជាតិ។", "badge": "ច្រើន", "note": "ជ្រើសតាមថវិកា និងប្រភេទម្ហូប កុំផ្ដល់អនុសាសន៍ឲ្យកន្លែងណាមួយ។"},
            {"icon": "bed", "k": "កន្លែងស្នាក់នៅ", "v": "ពីសណ្ឋាគារយុវជន សណ្ឋាគារបែបបុរាណ ដល់រីសតអគារធំៗ ដែលផ្ដោតនៅជិតផ្សារចាស់ និងត្រើយទន្លេ។", "badge": "ច្រើន", "note": "ជ្រើសតាមថវិកា និងភាពស្ងប់ស្ងាត់ ព្រោះបន្ទប់ជាប់ផ្លូវអាចឮសម្លេងពេលយប់។"},
            {"icon": "shop", "k": "ហាងងាយស្រួល និងផ្សារ", "v": "នៅចម្ងាយដើរបានមានហាងងាយស្រួល ហាងទំនិញ និងផ្សាររបស់របររំលឹក សម្រាប់តម្រៀបប្រចាំថ្ងៃ ទឹកស្អាត និងរបស់តូចៗ។", "badge": "ទូទៅ", "note": "ផ្សារយប់ជិតផ្សារចាស់មានភាពសប្បាយបំផុតសម្រាប់របស់រំលឹក។"},
            {"icon": "fuel", "k": "ប្រេង និងសាកថ្ម", "v": "ស្ថានីយ៍ប្រេងមានរាយប៉ាយក្នុងក្រុង ហើយការសាកថ្មឡាន និងទូរស័ព្ទមាននៅសណ្ឋាគារ ហាងកាហ្វេ និងផ្សារ។", "badge": "ទូទៅក្រុង", "note": "បើជួលយានយន្ត សូមបំពេញប្រេងមុនធ្វើដំណើរឆ្ងាយ។"},
            {"icon": "atm", "k": "ATM និងប្តូរប្រាក់", "v": "ATM និងកន្លែងប្តូរប្រាក់មាននៅជិតផ្លូវធំ និងផ្សារ ហើយទទួលកាតធនាគារធំៗ។", "badge": "ទូទៅ", "note": "ជ្រើស ATM ក្នុងសាខាធនាគារ ហើយប្រយ័ត្នកម្រៃឆ្លងដែន។"},
            {"icon": "medical", "k": "វេជ្ជសាស្ត្រ និងអាសន្ន", "v": "ក្នុងក្រុងមានឱសថស្ថាន គ្លីនិក និងចំណុចវេជ្ជសាស្ត្រអន្តរជាតិ ហើយពេលអាសន្នអាចទាក់ទងឡានសង្គ្រោះ និងនគរបាលទេសចរ។", "badge": "ទូទៅក្រុង", "note": "ទិញធានារ៉ាប់រងធ្វើដំណើរ ហើយរក្សាទំនាក់ទំនងស្ថានទូត។"},
            {"icon": "wifi", "k": "អ៊ីនធឺណិត និងទូរស័ព្ទ", "v": "កន្លែងញ៉ាំ និងស្នាក់នៅភាគច្រើនមាន Wi-Fi ឥតគិតថ្លៃ ហើយកាត SIM ទេសចរមានលក់តាមតូប។", "badge": "ទូទៅ", "note": "ប្រយ័ត្នសុវត្ថិភាពព័ត៌មាននៅលើបណ្ដាញសាធារណៈ។"}
        ],
        "disclaimer": "គេហទំព័រនេះជាគម្រោងផ្តល់ព័ត៌មានទេសចរអព្យាក្រឹត និងមិនរកប្រាក់ចំណេញ។ សម្ភារៈដែលរៀបរាប់គឺជាប្រភេទយោងប៉ុណ្ណោះ មិនមែនជាការផ្សព្វផ្សាយពាណិជ្ជកម្មឡើយ។"
    },
    "history": {
        "originTitle": "ប្រភពឈ្មោះ",
        "originText": "“Pub Street” (ខ្មែរ៖ ផ្លូវបារអាហារ / ផ្លូវហាងស្រា) មានន័យតាមពាក្យថា “ផ្លូវបារ”។ វាជាផ្លូវខ្លីៗក្នុងតំបន់ចាស់របស់សៀមរាប ដែលល្បីពីការញ៉ាំ និងជីវិតពេលយប់។ ឈ្មោះនេះកើតមកពីបារ និងភោជនីយដ្ឋានជាច្រើនដែលនៅជុំវិញ ហើយវាជាឈ្មោះហៅផ្លូវធម្មតា មិនមែនជាឈ្មោះរដ្ឋបាលផ្លូវការឡើយ។",
        "cultureTitle": "វប្បធម៌ និងរឿងរ៉ាវក្នុងតំបន់",
        "cultureText": "ផ្លូវនេះនៅជាប់នឹងផ្សារចាស់ (Phsar Chas)។ ពេលថ្ងៃវាជាផ្លូវធម្មតារបស់អ្នកភូមិ តែពេលយប់វាប្រែក្លាយជាតំបន់ដើរលេងសម្រាប់ភ្ញៀវទេសចរ។ ការរីកចម្រើនរបស់វាភ្ជាប់ទៅនឹងទេសចរណ៍អង្គរ៖ កាលភ្ញៀវពីជុំវិញពិភពលោកកើនឡើង ផ្ទះរំលកគ្រួសារក៏ប្រែក្លាយជាបារ អន្ទរសព្ទ និងតន្ត្រីពិភពលោក។ សិល្បករ តន្ត្រីករ និងអ្នកស្ម័គ្រចិត្តជួបជុំគ្នាទីនេះ ធ្វើឲ្យវាក្លាយជាបន្ទប់រង់ចាំរបស់សៀមរាប ដែលភាពបុរាណនៃអង្គរ ជួបជាមួយភ្ញៀវទេសចរសម័យថ្មី។",
        "legendTitle": "រឿងតំណាលតូចមួយ",
        "legendText": "អ្នកសៀមរាបនិយាយតៗគ្នាថា មានច្បាប់មិនផ្លូវការមួយ៖ បន្ទាប់ពីថ្ងៃនៅប្រាសាទ ភ្ញៀវទេសចររៀងខ្លួនត្រូវត្រឡប់មកតំបន់ចាស់នៅពេលព្រលប់ ដើម្បីលាងធូលីក្នុងពន្លឺ និងក្លិនក្រអូប។ តួអង្គនេះធ្វើឲ្យផ្លូវខ្លីៗនេះរវាងផ្សារចាស់ និងទន្លេ ក្លាយជាពិធី “ត្រឡប់មកវិញរបស់មនុស្ស” បន្ទាប់ពីធម្មយាត្រា។ រឿងនេះប្រហែលមិនមានក្នុងសៀវភៅប្រវត្តិសាស្ត្រទេ តែវាពន្យល់បានល្អថាហះវាជាចំណុចនៃអនុស្សាវរីយ៍ដំណើរជាច្រើន។"
    },
    "practical": {
        "eyebrow": "មុនពេលចេញដំណើរ",
        "title": "គន្លឹះអត្ថប្រយោជន៍",
        "subtitle": "ដំបូន្មានអព្យាក្រឹតសម្រាប់ភ្ញៀវធ្វើដំណើរឯករាជ្យ ដើម្បីរៀបចំដំណើរបានស្រួលជាងមុន។",
        "items": [
            {"icon": "clock", "k": "ពេលវេលាល្អបំផុត", "v": "រស់រវើកបំផុតពីពេលភ្លើងបំភ្លឺដល់ពាក់កណ្ដាលយប់ តែចង់ដើរស្ងប់ៗ សូមទៅពេលរសៀលមុនព្រលប់។"},
            {"icon": "walk", "k": "ងាយស្រួលដើរ", "v": "ជាតំបន់ដើរលេង ល្អបំផុតសម្រាប់ថ្មើរជើង តែផ្លូវតូចៗជាប់គ្នា សូមមើលរបស់របស់របស់អ្នក។"},
            {"icon": "atm", "k": "ការទូទាត់", "v": "ភាគច្រើនទទួលលុយសុទ្ធ និងការទូទាត់តាមទូរស័ព្ទ ហើយលុយតូចៗងាយស្រួលសម្របសម្រួល និងបិទភ្លុក។"},
            {"icon": "shield", "k": "សុវត្ថិភាព", "v": "ជាទូទៅសុវត្ថិភាពល្អ សូមថែរក្សារបស់របស់ ផឹកស្រាឲ្យសមរម្យ និងប្រយ័ត្នចរាចរណ៍ពេលយប់។"},
            {"icon": "globe", "k": "ភាសា", "v": "អង់គ្លេសត្រូវប្រើជាទូទៅក្នុងតំបន់ទេសចរ ហើយសូមរៀនពាក្យសួសសុខធម៌ខ្មែរបន្តិចបន្តួច។"},
            {"icon": "users", "k": "គ្រួសារ និងអ្នកពិការ", "v": "ពេលថ្ងៃល្អសម្រាប់គ្រួសារ តែពេលយប់មានមនុស្សច្រើន និងឮសម្លេងខ្លាំង សូមរៀបចំបើមានទារក ឬត្រូវការភាពស្ងប់ស្ងាត់។"}
        ]
    }
}

def merge(data, add):
    for k, v in add.items():
        if isinstance(v, dict) and isinstance(data.get(k), dict):
            data[k] = {**data[k], **v}
        else:
            data[k] = v
    return data

for lang, add in (('zh', ZH), ('en', EN), ('km', KM)):
    p = BASE.format(lang)
    d = json.load(open(p, encoding='utf-8'))
    d = merge(d, add)
    json.dump(d, open(p, 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
    print(lang, 'merged')

# verify parity
import io
out = io.open('_check2.txt', 'w', encoding='utf-8')
keys = {l: set(json.load(open(BASE.format(l), encoding='utf-8')).keys()) for l in ('zh','en','km')}
base = keys['zh']
for l in ('zh','en','km'):
    miss = sorted(base - keys[l]); extra = sorted(keys[l] - base)
    out.write(f'{l} miss={miss} extra={extra}\n')
out.close()
