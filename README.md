# How to use pemilu Backend using Postman

How to use authorization
1. Click tab authorization on postman
2. Choose Type "Bearer Token" on the left
3. Insert Token on the right

#### A. User

1. Register User<br>
* Url : http://localhost:5000/api/v1/auth/register
* Method : `POST`
* JSON body example :

        {
            "fullName" : "Roy Kiyoshi",
            "address" : "Jl Bikini Bottom",
            "gender" : "Laki-laki",
            "username" : "Roy",
            "password" : "root"
        }

2. Login<br>
* Url : http://localhost:5000/api/v1/auth/login
* Method : `POST`
* JSON body example : 

        {
            "username" : "Roy",
            "password" : "root"
        }

Note: you will received token which is used to Authorization<br>


#### B. Article

1. Getting all articles (no Authorization)<br>
* Url : http://localhost:5000/api/v1/articles
* Method : `GET`

2. Getting a article (no Authorization)<br>
* Url : http://localhost:5000/api/v1/article/{article-id}
* Method: `GET`

3. Create a article (required Authorization)<br>
* Url : hhtp://localhost:5000/api/v1/article/create
* Method : `POST`
* Form-data body example :
```
    title       = Paslon xxx teryata jual narkoba
    author      = Roy
    description = Jadi begini alasan paslon xxx jual narkoba...
    image       = paslon.jpg
    date        = 2023/01/01
```

4. Update a article (required authroization)<br>
* Url       : http://localhost:5000/api/v1/article/{article-id}
* Method    : `PATCH`
* Form-data body example :
```
    title       = Paslon xxx teryata jual narkoba
    author      = Roy
    description = Jadi begini alasan paslon xxx jual narkoba...
    image       = paslon.jpg
    date        = 2023/01/01
```

5. Delete a article (required authorization)<br>
* Url       : http://localhost:5000/api/v1/article/{blog-id}
* Method    : `DELETE`

#### C. Voter

1. Getting all vote (required authorization)<br>
* Url       : http://localhost:5000/api/v1/vote/findall
* Method    : `GET`

2. Voting (required authorization)<br>
* Url       : http://localhost:5000/api/v1/vote>
* Method    : `POST`
* JSON body example :
        
        {
            "noPaslon" : 1
        }

#### D. Paslon

1. Getting all paslon (no authorization)<br>
* Url       : http://localhost:5000/api/v1/paslons
* Method    : `GET`

2. Getting a paslon (no authorization)<br>
* Url       : http://localhost:5000/api/v1/paslon{paslon-id}
* Method    : `GET`

3. Create a paslon (required authroization)<br>
* Url       : http://localhost:5000/api/v1/paslon/add
* Method    : `POST`
* Form-data body example :
```
    name            = Pascol
    noPaslon        = 1
    visionMission   = Acak-acak len of don
    image           = pascol.png
```

4. Update a paslon (required authorization)<br>
* Url       : http://localhost:5000/api/v1/paslon/{paslon-id}
* Method    : `PATCH`
* Form-data body example :
```
    name            = update Pascol
    noPaslon        = update 1
    visionMission   = update Acak-acak len of don
    image           = update pascol.png
```
5. Delete a paslon (required authorization)<br>
* Url       : http://localhost:5000/api/v1/paslon/{paslon-id}
* Method    : `DELETE`

#### E. Partai

1. Getting all partais (no authorization)<br>
* Url       : http://localhost:5000/api/v1/partais
* Method    : `GET`

2. Getting a partai (no authorization)<br>
* Url       : http://localhost:5000/api/v1/partai/{partai-id}
* Method    : `GET`

3. Create a partai (required authorization)<br>
* Url       : http://localhost:5000/api/v1/partai/add
* Method    : `POST`
* Form-data body example :
```
    name            = Partai tahu
    partyLeader     = Roy
    visionMission   = Menghidupkan orang mati
    address         = Jl Bikini Bottom
    image           = roy.jpg
    paslon          = 1 (paslonId)
```

4. Update a partai (requried authorization)<br>
* Url       : http://localhost:5000/api/v1/partai/{paslon-id}
* Method    : `PATCH`
* Form-data body example :
```
    name            = Update partai tahu
    partyLeader     = Update Roy
    visionMission   = Update menghidupkan orang mati
    address         = Update Jl Bikini Bottom
    image           = roy.jpg
    paslon          = 1 (paslonId)
```

5. Delete a partai (required authorization)<br>
* Url       : http://localhost:5000/api/v1/partai/{paslon-id}
* Method    : `DELETE`