import random
import time

from locust import HttpUser, between, task


class ChatUser(HttpUser):
    wait_time = between(5, 20)

    @task
    def ask_question(self):
        self.client.get("/")
        time.sleep(5)
        self.client.post(
            "/chat",
            json={
                "history": [
                    {
                        "user": random.choice(
                            [
                                "What happens if I miss the tax filing deadline?", 
                                "How does sales tax differ from VAT?", 
                                "What are the tax penalties for tax evasion?",
                                "What are the tax implications of buying or selling a home?"
                            ]
                        )
                    }
                ],
                "overrides": {
                    "retrieval_mode": "hybrid",
                    "semantic_ranker": True,
                    "semantic_captions": False,
                    "top": 3,
                    "suggest_followup_questions": False,
                },
            },
        )
        time.sleep(5)
        self.client.post(
            "/chat",
            json={
                "history": [
                    {
                        "user": "What is the tax filing deadline?",
                        "bot": "The respective tax return has to be filed by 31 March of the following year (a few cantons have different deadlines) in the canton where the taxpayer has been resident at the end of the respective tax period. [fedlex-data-admin-ch-eli-cc-1991-1184_1184_1184-20230101-fr-pdf-a-3-49.pdf].",
                    },
                    {"user": "What happens if I miss the tax filing deadline?"},
                ],
                "overrides": {
                    "retrieval_mode": "hybrid",
                    "semantic_ranker": True,
                    "semantic_captions": False,
                    "top": 3,
                    "suggest_followup_questions": False,
                },
            },
        )
