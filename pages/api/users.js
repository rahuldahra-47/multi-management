export default function handler(req, res) {
  const users= [
      {
        "id": 1,
        "name": "abc",
        "attendance": {
          "science": 20,
          "english": 12,
          "hindi": 32,
          "maths": 27,
          "social science": 15
        },
        "books_issued": [
          {
            "book_name": "Introduction to Biology",
            "issue_date": "2023-05-10"
          },
          {
            "book_name": "English Literature: A Comprehensive Guide",
            "issue_date": "2023-05-15"
          },
          {
            "book_name": "Chemistry Basics",
            "issue_date": "2023-05-20"
          },
          {
            "book_name": "Mathematics: Advanced Topics",
            "issue_date": "2023-05-22"
          },
          {
            "book_name": "Computer Science Fundamentals",
            "issue_date": "2023-05-25"
          }
        ]
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "attendance": {
          "science": 10,
          "english": 8,
          "hindi": 17,
          "maths": 20,
          "social science": 14
        },
        "books_issued": [
          {
            "book_name": "Physics for Beginners",
            "issue_date": "2023-05-07"
          },
          {
            "book_name": "The Complete Guide to Literature",
            "issue_date": "2023-05-10"
          },
          {
            "book_name": "Advanced Mathematics",
            "issue_date": "2023-05-18"
          }
        ]
      },
      {
        "id": 3,
        "name": "Michael Johnson",
        "attendance": {
          "science": 28,
          "english": 16,
          "hindi": 22,
          "maths": 25,
          "social science": 30
        },
        "books_issued": [
          {
            "book_name": "Physics for Beginners",
            "issue_date": "2023-05-07"
          },
          {
            "book_name": "The Complete Guide to Literature",
            "issue_date": "2023-05-10"
          },
          {
            "book_name": "Advanced Mathematics",
            "issue_date": "2023-05-18"
          },
          {
            "book_name": "History: The Modern Era",
            "issue_date": "2023-05-21"
          },
          {
            "book_name": "Geography: Concepts and Applications",
            "issue_date": "2023-05-24"
          }
        ]
      },
      {
        "id": 4,
        "name": "Sarah Williams",
        "attendance": {
          "science": 19,
          "english": 24,
          "hindi": 30,
          "maths": 32,
          "social science": 10
        },
        "books_issued": [
          {
            "book_name": "Mathematics: A Comprehensive Approach",
            "issue_date": "2023-05-05"
          },
          {
            "book_name": "Geography: Exploring the World",
            "issue_date": "2023-05-18"
          },
          {
            "book_name": "English Grammar: Essential Rules",
            "issue_date": "2023-05-20"
          },
          {
            "book_name": "Chemistry: Basics and Beyond",
            "issue_date": "2023-05-23"
          },
          {
            "book_name": "History: The Ancient World",
            "issue_date": "2023-05-28"
          }
        ]
      },
      {
        "id": 5,
        "name": "Robert Brown",
        "attendance": {
          "science": 10,
          "english": 15,
          "hindi": 20,
          "maths": 25,
          "social science": 30
        },
        "books_issued": [
          {
            "book_name": "Book 1",
            "issue_date": "2023-05-01"
          },
          {
            "book_name": "Book 2",
            "issue_date": "2023-05-02"
          },
          {
            "book_name": "Book 3",
            "issue_date": "2023-05-03"
          },
          {
            "book_name": "Book 4",
            "issue_date": "2023-05-04"
          },
          {
            "book_name": "Book 5",
            "issue_date": "2023-05-05"
          }
        ]
      },
      {
        "id": 6,
        "name": "David Johnson",
        "attendance": {
          "science": 18,
          "english": 21,
          "hindi": 26,
          "maths": 33,
          "social science": 28
        },
        "books_issued": [
          {
            "book_name": "Book A",
            "issue_date": "2023-05-01"
          },
          {
            "book_name": "Book B",
            "issue_date": "2023-05-02"
          },
          {
            "book_name": "Book C",
            "issue_date": "2023-05-03"
          },
          {
            "book_name": "Book D",
            "issue_date": "2023-05-04"
          },
          {
            "book_name": "Book E",
            "issue_date": "2023-05-05"
          }
        ]
      },
      {
        "id": 7,
        "name": "Emily Wilson",
        "attendance": {
          "science": 15,
          "english": 20,
          "hindi": 17,
          "maths": 28,
          "social science": 23
        },
        "books_issued": [
          {
            "book_name": "Book X",
            "issue_date": "2023-05-10"
          },
          {
            "book_name": "Book Y",
            "issue_date": "2023-05-12"
          },
          {
            "book_name": "Book Z",
            "issue_date": "2023-05-15"
          }
        ]
      },
      {
        "id": 8,
        "name": "Olivia Davis",
        "attendance": {
          "science": 30,
          "english": 28,
          "hindi": 26,
          "maths": 22,
          "social science": 25
        },
        "books_issued": [
          {
            "book_name": "Book P",
            "issue_date": "2023-05-07"
          },
          {
            "book_name": "Book Q",
            "issue_date": "2023-05-10"
          },
          {
            "book_name": "Book R",
            "issue_date": "2023-05-18"
          },
          {
            "book_name": "Book S",
            "issue_date": "2023-05-20"
          },
          {
            "book_name": "Book T",
            "issue_date": "2023-05-22"
          }
        ]
      },
      {
        "id": 9,
        "name": "William Thompson",
        "attendance": {
          "science": 25,
          "english": 20,
          "hindi": 18,
          "maths": 15,
          "social science": 12
        },
        "books_issued": [
          {
            "book_name": "Book M",
            "issue_date": "2023-05-05"
          },
          {
            "book_name": "Book N",
            "issue_date": "2023-05-10"
          },
          {
            "book_name": "Book O",
            "issue_date": "2023-05-18"
          },
          {
            "book_name": "Book P",
            "issue_date": "2023-05-21"
          },
          {
            "book_name": "Book Q",
            "issue_date": "2023-05-25"
          }
        ]
      },
      {
        "id": 10,
        "name": "Sophia Lee",
        "attendance": {
          "science": 12,
          "english": 15,
          "hindi": 18,
          "maths": 20,
          "social science": 25
        },
        "books_issued": [
          {
            "book_name": "Book Alpha",
            "issue_date": "2023-05-07"
          },
          {
            "book_name": "Book Beta",
            "issue_date": "2023-05-10"
          },
          {
            "book_name": "Book Gamma",
            "issue_date": "2023-05-18"
          },
          {
            "book_name": "Book Delta",
            "issue_date": "2023-05-21"
          },
          {
            "book_name": "Book Epsilon",
            "issue_date": "2023-05-25"
          }
        ]
      }
    ];
    res.setHeader('Content-Type', 'application/json');

    // Return the JSON data
    res.status(200).json({ users });
  }
  