use axum::{routing::post, Router};
use serde_derive::{Deserialize, Serialize};
use std::net::SocketAddr;
use mongodb::{options::ClientOptions, Client, Database};
use mongodb::bson::doc;

#[derive(Serialize, Deserialize, Debug, Clone)]
struct Todo {
    id: i32,
    name: String,
    content: String,
}

async fn add_todo(new_todo: axum::extract::Json<Todo>, db: Database) -> impl axum::response::IntoResponse {
    let mut todo = new_todo.0;
    todo.id = uuid::Uuid::new_v4().as_u128() as i32; // Assign a new UUID as i32

    let todos = db.collection("todos");
    let todo_clone = todo.clone();
    let todo_doc = doc! {
        "id": todo_clone.id,
        "name": todo_clone.name,
        "content": todo_clone.content,
    };
    todos.insert_one(todo_doc, None).await.unwrap();

    println!("Added new todo: {:?}", todo);
    axum::response::Json(todo)
}

#[tokio::main]
async fn main() {
    let client_options = ClientOptions::parse("mongodb://localhost:27017").await.unwrap();
    let client = Client::with_options(client_options).unwrap();
    let db = client.database("my_db");

    let app = Router::new().route("/todos", post(move |todo: axum::extract::Json<Todo>| add_todo(todo, db.clone())));

    let addr = SocketAddr::from(([127, 0, 0, 1], 5000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
