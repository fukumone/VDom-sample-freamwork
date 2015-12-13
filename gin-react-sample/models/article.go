package models

import(
    "github.com/wcl48/valval"
    "time"
    "regexp"
)

type Article struct {
    Id int64
    Title string `sql:"size:255"`
    Link string `sql:"size:255"`
    CreatedAt time.Time
    UpdatedAT time.Time
}

func ArticleValidate(article Article)(error){
    Validator := valval.Object(valval.M{
        "Name": valval.String(
                valval.MaxLength(20),
                valval.Regexp(regexp.MustCompile(`^[a-z ]+$`)),
        ),
    })

    return Validator.Validate(article)
}

func NewArticle(name string, title string, body string) *Article {
    return &Gallery {
        Name: name,
        Title: title,
        Body: body,
        CreatedAt: time.Now(),
        UpdatedAT: time.Now(),
    }
}
