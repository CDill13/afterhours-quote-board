CREATE TABLE Users (
    id serial primary key,
    name text
    )

CREATE TABLE Quotes (
  creator integer references Users(id),
  quote text
)

insert into Users (name)
values ('Bob Ross')